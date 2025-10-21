import { onIntegrate } from '@/actions/integrations'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
  searchParams: {
    code?: string
  }
}

const Page = async ({ searchParams }: Props) => {
  console.log('🔵 [CALLBACK] Instagram OAuth callback triggered')
  console.log('🔵 [CALLBACK] Search params:', JSON.stringify(searchParams))
  
  const code = searchParams?.code
  
  if (!code) {
    console.error('❌ [CALLBACK] No authorization code provided in callback URL')
    console.log('🔵 [CALLBACK] Available params:', Object.keys(searchParams || {}))
    return redirect('/dashboard')
  }

  console.log('✅ [CALLBACK] Authorization code received:', code.substring(0, 20) + '...')
  console.log('🔵 [CALLBACK] Full code length:', code.length)
  
  const cleanCode = code.split('#_')[0]
  console.log('🔵 [CALLBACK] Cleaned code length:', cleanCode.length)
  
  console.log('🔵 [CALLBACK] Starting integration process...')
  const user = await onIntegrate(cleanCode)
  
  console.log('🔵 [CALLBACK] Integration result status:', user.status)
  
  if (user.status === 200) {
    console.log('✅ [CALLBACK] Integration successful! Redirecting to integrations page...')
    const redirectUrl = `/dashboard/${user.data?.firstname}${user.data?.lastname}/integrations`
    console.log('🔵 [CALLBACK] Redirect URL:', redirectUrl)
    return redirect(redirectUrl)
  }
  
  console.error('❌ [CALLBACK] Integration failed:', {
    status: user.status,
    error: (user as any).error
  })
  console.log('🔵 [CALLBACK] Redirecting to dashboard...')
  return redirect('/dashboard')
}

export default Page
