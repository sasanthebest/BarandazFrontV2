"use client";
import SignUp from "@/components/user/SignUp";
import signUpUser from "@/services/singUpUser";
import { toast } from "react-toastify";
export default function page() {
  const registerUser = async (data) => {
    try {
      await signUpUser(data);
      toast.success("ثبت نام شما با موفقیت انجام شد");
      // setTimeout(() => {
      //   setShowSignUp(false);
      // }, 200);
      // setShowSignIn(true);
    } catch (ex) {
      if (ex.response && ex.response.status == 400) {
        if (ex.response.data.username) toast.error("نام کاربری وجود دارد");
        if (ex.response.data.password) toast.error("پسورد سخت تری انتخاب کنید");
      }
    }
  };
  return <SignUp onSubmit={(data) => registerUser(data)} />;
}
