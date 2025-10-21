import axios from 'axios'

export const refreshToken = async (token: string) => {
  const refresh_token = await axios.get(
    `${process.env.INSTAGRAM_BASE_URL}/refresh_access_token?grant_type=ig_refresh_token&access_token=${token}`
  )

  return refresh_token.data
}

export const sendDM = async (
  userId: string,
  recieverId: string,
  prompt: string,
  token: string
) => {
  console.log('sending message')
  return await axios.post(
    `${process.env.INSTAGRAM_BASE_URL}/v21.0/${userId}/messages`,
    {
      recipient: {
        id: recieverId,
      },
      message: {
        text: prompt,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  )
}

export const sendPrivateMessage = async (
  userId: string,
  recieverId: string,
  prompt: string,
  token: string
) => {
  console.log('sending message')
  return await axios.post(
    `${process.env.INSTAGRAM_BASE_URL}/${userId}/messages`,
    {
      recipient: {
        comment_id: recieverId,
      },
      message: {
        text: prompt,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  )
}


export const generateTokens = async (code: string) => {
  try {
    console.log('🔵 [TOKEN] Starting token generation process...')
    console.log('🔵 [TOKEN] Authorization code:', code?.substring(0, 20) + '...')
    console.log('🔵 [TOKEN] Client ID:', process.env.INSTAGRAM_CLIENT_ID?.substring(0, 10) + '...')
    console.log('🔵 [TOKEN] Redirect URI:', `${process.env.NEXT_PUBLIC_HOST_URL}/callback/instagram`)
    console.log('🔵 [TOKEN] Token URL:', process.env.INSTAGRAM_TOKEN_URL)
    
    const insta_form = new FormData()
    insta_form.append('client_id', process.env.INSTAGRAM_CLIENT_ID as string)
    insta_form.append('client_secret', process.env.INSTAGRAM_CLIENT_SECRET as string)
    insta_form.append('grant_type', 'authorization_code')
    insta_form.append('redirect_uri', `${process.env.NEXT_PUBLIC_HOST_URL}/callback/instagram`)
    insta_form.append('code', code)

    console.log('🔵 [TOKEN] Requesting short-lived token from Instagram...')
    const shortTokenRes = await fetch(process.env.INSTAGRAM_TOKEN_URL as string, {
      method: 'POST',
      body: insta_form,
    })

    console.log('🔵 [TOKEN] Response status:', shortTokenRes.status, shortTokenRes.statusText)
    const token = await shortTokenRes.json()
    console.log('🔵 [TOKEN] Response data:', JSON.stringify(token, null, 2))
    
    if (token.error) {
      console.error('❌ [TOKEN] Instagram API error:', {
        error: token.error,
        error_message: token.error_message,
        error_description: token.error_description
      })
      return null
    }
    
    if (token.access_token && token.permissions && token.permissions.length > 0) {
      console.log('✅ [TOKEN] Short-lived token received')
      console.log('🔵 [TOKEN] Permissions granted:', token.permissions)
      console.log('🔵 [TOKEN] Token type:', token.token_type)
      
      console.log('🔵 [TOKEN] Exchanging for long-lived token...')
      const long_token = await axios.get(
        `${process.env.INSTAGRAM_BASE_URL}/access_token?grant_type=ig_exchange_token&client_secret=${process.env.INSTAGRAM_CLIENT_SECRET}&access_token=${token.access_token}`
      )

      console.log('✅ [TOKEN] Long-lived token received')
      console.log('🔵 [TOKEN] Expires in:', long_token.data.expires_in, 'seconds')
      return long_token.data
    }
    
    console.error('❌ [TOKEN] Invalid response - missing access_token or permissions:', {
      has_access_token: !!token.access_token,
      has_permissions: !!token.permissions,
      permissions_count: token.permissions?.length || 0
    })
    return null
  } catch (error: any) {
    console.error('❌ [TOKEN] Exception during token generation:', {
      message: error.message,
      stack: error.stack,
      response: error.response?.data
    })
    return null
  }
}
