"use client";
import React, { useState ,useCallback} from "react";
import { useForm } from "react-hook-form";
import * as y from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import {signIn} from 'next-auth/react'
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Modals from "./Modal";
import useLoginModal from "@/hooks/useLoginModal";
import Inpute from "../Inpute";
import Heading from "../Heading";



const schema = y.object({
  token: y.string().required("لطفا شماره تلفن را وارد نمایید"),
});

const LoginModal = ({phone}) => {
  const [time, setTime] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const router=useRouter()
  const loginModal=useLoginModal()
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit=(data)=>{

    setIsLoading(true)
    signIn('credentials',{...data,redirect:false})
    .then((res)=>{
      if (res.ok){
        toast.success('با موفقیت وارد شدید')        
      }
    })
    .catch((err)=>{
      toast.error('خطایی رخ داده است')
    })
    .finally(()=>{
      setIsLoading(false)
      router.refresh()
    })
    
  }

  const toggle=useCallback(
    () => {
      loginModal.onClose()
 
    },
    [loginModal],
  )
  

  const bodyContent = (
      <div className="flex flex-col gap-">
        <Heading
          title="welcom back"
          subtitle=".به حساب کاربری خود وارد شوید"
          center
        />
        <Inpute
          id="email"
          label="Email"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Inpute
          id="password"
          label="Password"
          type="password"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    );
    const footerContent = (
      <div
        className="
          flex flex-col gap-4 mt-3
       "
      >
        <hr />
        
        <div
          className="
          text-neutral-500
          text-center
          mt-4
          font-light
        "
        >
          <div className="justify-center flex flex-row item-center gap-2">
            <div
              onClick={toggle}
              className="text-neutral-800 cursor-pointer hover:underline"
            >
              ثبت نام کنید
            </div>
            <div>حساب کاربری ندارید؟</div>
          </div>
        </div>
      </div>
    );


  return (
   <Modals 
    title='ورود به حساب کاربری'
    isOpen={loginModal.isOpen}
    onClose={loginModal.onClose()}
    onSubmit={handleSubmit(()=>console.log('log'))}
    actionLabel='ورود'
    disabled={isLoading}
    body={bodyContent}
    footer={footerContent}
   />
  );
};

export default LoginModal
