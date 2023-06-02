"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as y from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modals from "./Modal";
import useLoginModal from "@/hooks/useLoginModal";
import Inpute from "../Inpute";
import Heading from "../Heading";
import Button from "../Button";
import getValidationToken from "@/services/getValidationToken";

const Phoneschema = y.object({
  phone: y
    .string()
    .required("لطفا شماره تلفن را وارد نمایید")
    .length(11, "شماره تلفن باید 11 رقم باشد "),
  // code:y.string().required("لطفا کد تایید را وارد کنید").length(4,'کد تایید باید 4 رقم باشد')
});
const Codeschema = y.object({
  code: y
    .string()
    .required("لطفا کد تایید را وارد کنید")
    .length(4, "کد تایید باید 4 رقم باشد"),
});

const LoginModal = () => {
  const [time, setTime] = useState(0);
  const [step, setStep] = useState("phone");
  const [phone, setPhone] = useState("");
  const router = useRouter();
  const loginModal = useLoginModal();
  const {
    watch: phoneWath,
    register: phoneRegister,
    handleSubmit: phoneSubmit,
    formState: { errors: phoneError },
  } = useForm({
    defaultValues: {
      phone: "",
    },
    resolver: yupResolver(Phoneschema),
  });
  const {
    register: codeRegister,
    handleSubmit: codeHandleSubmit,
    formState: { errors: codeError },
  } = useForm({
    defaultValues: {
      code: "",
    },
    resolver: yupResolver(Codeschema),
  });

  // useCallback(()=>{

  //   onPhoneSubmit()
  // },[data])

  const onPhoneSubmit = (data) => {
    setPhone(data?.phone);
    // axios.post(`http://127.0.0.1:8000/${sendValidationToken}`, data)
    getValidationToken(data)
      .then((res) => {
        toast.success("کد تایید ارسال شد");
        setStep("code");
      })
      .catch((err) => {
        console.log(err);
        toast.error("خطایی رخ داده است");
      });
  };

  const onCodeSubmit = (data) => {
    signIn("credentials", { ...data, phone: phone, redirect: false })
      .then(
      (res) => {
        // console.log("signinres",res)
        if (res.status == 200) {
          toast.success("ورود با موفقیت انجام شد");
          loginModal.onClose();
        }
        if (res === null) {
          toast.error("ارتباط شما با سرور های بارانداز برقرار شد");
        }
        if (res.status == 401) {
          toast.error("کد تایید نا معتبر است");
        }
      }
    );
    // .catch(err=>{
    //   console.log(err)
    //   toast.error("کد تایید نا معتبر است")
    // })
  };

  let bodyContent = (
    <div className="flex flex-col transition">
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
        type="number"
        
      />

      <div className="pt-5 flex justify-center items-center w-full">
        <Button label="ارسال کد تایید" onClick={phoneSubmit(onPhoneSubmit)} />
      </div>
    </div>
  );
  if (step === "code") {
    bodyContent = (
      <div className="flex flex-col transition">
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
          onChange={onCodeSubmit}
          required
        />

        <div className="pt-5 flex justify-center items-center w-full">
          <Button label="ورود" onClick={codeHandleSubmit(onCodeSubmit)} />
        </div>
      </div>
    );
  }
  const footerContent = (
    <div className=" text-neutral-500 text-center font-light p-2">
      <h2>شرایط استفاده از خدمات و حریم خصوصی بارانداز را میپذیرم</h2>
    </div>
  );

  return (
    <>
      <ToastContainer />
      <Modals
        title="ورود به حساب کاربری"
        isOpen={loginModal.isOpen}
        onClose={loginModal.onClose}
        disabled={false}
        body={bodyContent}
        footer={footerContent}
      />
    </>
  );
};

export default LoginModal;
