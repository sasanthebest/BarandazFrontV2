"use client";

import React, { useState ,useCallback, useRef} from "react";
import { useForm } from "react-hook-form";
import * as y from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { sendValidationToken, validateToken } from "@/services/urls";
import {signIn, useSession} from 'next-auth/react'
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Modals from "./Modal";
import useLoginModal from "@/hooks/useLoginModal";
import Inpute from "../Inpute";
import Heading from "../Heading";
import Button from "../Button";
import axios from "axios";

const Phoneschema = y.object({
  phone: y.string().required("لطفا شماره تلفن را وارد نمایید").length(11,'شماره تلفن باید 11 رقم باشد '),
  // code:y.string().required("لطفا کد تایید را وارد کنید").length(4,'کد تایید باید 4 رقم باشد')
});
const Codeschema = y.object({
  code:y.string().required("لطفا کد تایید را وارد کنید").length(4,'کد تایید باید 4 رقم باشد')
});


const LoginModal = () => {
  const [time, setTime] = useState(0);
  const [step,setStep]=useState('phone')
  const [phone,setPhone]=useState('')
  
  const router=useRouter()
  const loginModal=useLoginModal()
  const {
    watch:phoneWath,
    register:phoneRegister,
    handleSubmit:phoneSubmit,
    formState: { errors:phoneError },
  } = useForm({
    defaultValues:{
      phone:'',
    },
    resolver: yupResolver(Phoneschema),
  });
  const {
    register:codeRegister,
    handleSubmit:codeHandleSubmit,
    formState: { errors :codeError},
  } = useForm({
    defaultValues:{
      code:''
    },
    resolver: yupResolver(Codeschema),
  });


  // useCallback(()=>{

   
  //   onSubmit()
  // },[data])

  const onSubmit=(data)=>{
    setPhone(data?.phone)
    axios.post(sendValidationToken,data)

    .then((res)=>{
        toast.success("کد تایید ارسال شد")  
        setStep('code')   
    })
    .catch((err)=>{
      toast.error('خطایی رخ داده است')
    })
  
    
  }
  

  const onSubmit2=(data)=>{
    
    signIn('credentials',{...data,phone:phone,redirect:true,callbackUrl:'/'})
    .then((res)=>{
      if (res.ok){
        toast.success("ورود با موفقیت انجام شد")
        loginModal.onClose()
      }
      if (res===null){

        toast.error("ارتباط شما با سرور های بارانداز برقرار نشد")
      }
    })
    .catch(err=>{
      console.log(err)
      toast.error("کد تایید نا معتبر است")
    })
  }
  

  let bodyContent = (
      <div className="flex flex-col gap- transition">
        <Heading
          title="شماره موبایل خود را وارد کنید "
          subtitle="کد تایید به این شماره تلفن ارسال خواهد شد"
          center
        />
        <Inpute
          id="phone"
          label="شماره موبایل"
          disabled={false}
          register={phoneRegister}
          errors={phoneError}
          required
          type='number'
        />
        
        <div className="pt-5">
        <Button
        label="ارسال کد تایید"
        onClick={phoneSubmit(onSubmit)}
        />
        </div>
      </div>
      
    );
    if (step==='code'){
      bodyContent=(
        <div className="flex flex-col gap- transition">
        <Heading
          title="کد تایید را وارد کنید"
          subtitle="کد تایید ارسال شده به تلفن همراه را وارد کنید"
          center
        />
        <Inpute
          id="code"
          label="کد تایید"
          disabled={false}
          register={codeRegister}
          errors={codeError}
          onChange={onSubmit2}
          required
        />
        
        <div className="pt-5">

        <Button
        label="ورود"
        onClick={codeHandleSubmit(onSubmit2)}
        />
        </div>
      </div>
      )
    }
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
        
            <div>شرایط استفاده از خدمات و حریم خصوصی بارانداز را میپذیرم</div>
          </div>
        </div>
    
    );


  return (
    <>
    <ToastContainer/>
   <Modals 
    title='ورود به حساب کاربری'
    isOpen={loginModal.isOpen}
    onClose={loginModal.onClose}
    disabled={false}
    body={bodyContent}
    footer={footerContent}
    />
    </>
  );
};

export default LoginModal
