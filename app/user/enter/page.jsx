

import sendValidationSms from "@/services/sendValidationSms";
import signUpInUser from "@/services/singUpInUser";
import validateSms from "@/services/validateSms";

import { toast } from "react-toastify";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/services/getCurrentUser";
import LoginModal from "@/components/modals/LoginModal";
import { signIn } from "next-auth/react";
import Login from "@/components/UTILS/Login";



export default async function page() {
  const currentUser=await getCurrentUser()


  // const sendValidationsms = async () => {
  //   const res = await sendValidationSms({ phone: username });
  //   setToLogin(true);
  // };

  return (<Login/>)
}
