import { SignIn } from '@clerk/nextjs';
import React from 'react'

const Page = () => {
  return (
    <div className='flex-center glassmorphism h-screen'>
        <SignIn />
    </div>
  )
}

export default Page;