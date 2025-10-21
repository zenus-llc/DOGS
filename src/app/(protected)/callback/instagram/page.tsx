import { onIntegrate } from '@/actions/integrations'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
  searchParams: {
    code?: string
  }
}

const Page = async ({ searchParams }: Props) => {
  const code = searchParams?.code
  
  if (!code) {
    console.log('❌ No code provided in callback')
    return redirect('/dashboard')
  }

  console.log('✅ Instagram callback code:', code)
  const cleanCode = code.split('#_')[0]
  const user = await onIntegrate(cleanCode)
  
  if (user.status === 200) {
    return redirect(
      `/dashboard/${user.data?.firstname}${user.data?.lastname}/integrations`
    )
  }
  
  console.log('❌ Integration failed with status:', user.status)
  return redirect('/dashboard')
}

export default Page
