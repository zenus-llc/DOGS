'use server'

import { redirect } from 'next/navigation'
import { onCurrentUser } from '../user'
import { createIntegration, getIntegration } from './queries'
import { generateTokens } from '@/lib/fetch'
import axios from 'axios'

export const onOAuthInstagram = (strategy: 'INSTAGRAM' | 'CRM') => {
  if (strategy === 'INSTAGRAM') {
    return redirect(process.env.INSTAGRAM_EMBEDDED_OAUTH_URL as string)
  }
}

export const onIntegrate = async (code: string) => {
  console.log('🔵 [INTEGRATION START] Code received:', code?.substring(0, 20) + '...')
  
  const user = await onCurrentUser()
  console.log('🔵 [USER] Current user ID:', user.id)

  try {
    const integration = await getIntegration(user.id)
    console.log('🔵 [INTEGRATION CHECK] Existing integrations:', integration?.integrations.length)

    if (integration && integration.integrations.length === 0) {
      console.log('🔵 [TOKEN] Generating Instagram tokens...')
      const token = await generateTokens(code)
      
      if (!token) {
        console.error('❌ [TOKEN] Failed to generate tokens')
        return { status: 401, error: 'Failed to generate access token' }
      }
      
      console.log('✅ [TOKEN] Access token generated:', token.access_token?.substring(0, 20) + '...')
      console.log('🔵 [TOKEN] Expires in:', token.expires_in, 'seconds')

      try {
        console.log('🔵 [INSTAGRAM] Fetching Instagram user ID...')
        const insta_id = await axios.get(
          `${process.env.INSTAGRAM_BASE_URL}/me?fields=user_id&access_token=${token.access_token}`
        )
        console.log('✅ [INSTAGRAM] User ID:', insta_id.data.user_id)

        const today = new Date()
        const expire_date = today.setDate(today.getDate() + 60)
        
        console.log('🔵 [DATABASE] Creating integration in database...')
        const create = await createIntegration(
          user.id,
          token.access_token,
          new Date(expire_date),
          insta_id.data.user_id
        )
        
        console.log('✅ [SUCCESS] Integration created successfully!')
        return { status: 200, data: create }
      } catch (instaError: any) {
        console.error('❌ [INSTAGRAM] Error fetching user or saving integration:', {
          message: instaError.message,
          response: instaError.response?.data,
          status: instaError.response?.status
        })
        return { status: 500, error: 'Failed to fetch Instagram user data' }
      }
    }
    
    console.log('❌ [INTEGRATION] User already has integrations or no integration found')
    return { status: 404, error: 'Integration already exists or user not found' }
  } catch (error: any) {
    console.error('❌ [ERROR] Integration failed:', {
      message: error.message,
      stack: error.stack,
      response: error.response?.data
    })
    return { status: 500, error: error.message }
  }
}
