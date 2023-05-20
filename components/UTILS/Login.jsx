
'use client'
import { signIn, useSession } from 'next-auth/react'
import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import LoginModal from '../modals/LoginModal';
import useLoginModal from '@/hooks/useLoginModal';
import { useRouter } from 'next/navigation';

const Login = () => {
    const session=useSession()
    const loginModal=useLoginModal()
    const router=useRouter()

    useEffect(()=>{
        if (session?.status==='authenticated'){
            
            loginModal.onClose()
            
     
        }
        else{

            loginModal.onOpen()
        }
  
        
    },[session.status])
    
  return (
    <>
   
    <LoginModal/>
    </> 
  )
}

export default Login