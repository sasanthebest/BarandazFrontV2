"use client";
import SignUp from "@/components/user/SignUp-In";
import signUpInUser from "@/services/singUpInUser";
import { toast } from "react-toastify";
export default function page() {
  const registerUser = async (data) => {
    try {
      const res = await signUpInUser(data);
      // console.log(res.json());
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
