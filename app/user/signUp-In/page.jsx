"use client";
import SingIn from "@/components/user/SignIn";
import SignUp from "@/components/user/SignUp";
import sendValidationSms from "@/services/sendValidationSms";
import signUpInUser from "@/services/singUpInUser";
import validateSms from "@/services/validateSms";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function page() {
  const [toLogin, setToLogin] = useState(false);
  const [username, setUsername] = useState(null);
  const [token, setToken] = useState(null);

  const sendValidationsms = async () => {
    const res = await sendValidationSms({ phone: username });
    setToLogin(true);
  };

  const getUser = async (data) => {
    const validateRes = await validateSms({
      token: data.token,
      username: username,
    });
    if (validateRes === 200) {
      const res = await signUpInUser({ username: username });
    }
  };
  const handleSignUpSubmit = (data) => {
    console.log(data);
    setUsername(data.username);
  };

  useEffect(() => {
    sendValidationsms(data.username);
  }, [username]);

  if (!toLogin) return <SignUp onSubmit={handleSignUpSubmit(data)} />;
  console.log("console2:", username);
  return (
    <SingIn
      onSubmit={(data) => {
        setToken(data.token);
        getUser(data);
      }}
      phone={username}
    />
  );
}
