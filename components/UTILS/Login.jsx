'use client'
import { signIn, useSession } from 'next-auth/react'
import React, { useEffect } from 'react'

import LoginModal from '../modals/LoginModal';
import useLoginModal from '@/hooks/useLoginModal';

const Login = () => {
    const session=useSession()
    const loginModal=useLoginModal()

    useEffect(()=>{
        if (session?.status==='authenticated'){  
            loginModal.onClose()
        }
        else{
            loginModal.onOpen()
        }   
    },[session.status])    
  return (
 <LoginModal/>
  )
}

export default Login