
'use client'
import { signIn, useSession } from 'next-auth/react'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const session=useSession()
    console.log('session2',session)

    const onLogin=()=>{
        signIn('credentials',{username:"09184113688",token:"7693"})
        .then((res)=>{
            if (res.ok){

                toast.success('ورود با موفقیت انجام شد')
            }
     
          
        
        }).catch(err=>{
            toast.error('مشکلی هست')
        })

    }
  return (
    <>
    <ToastContainer/>
    
    <div className='cursor-pointer' onClick={()=>onLogin()}>
        login
    </div>
    </>
  )
}

export default Login