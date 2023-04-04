"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserPageHeader from "@/components/user/UserPageHeader";
import Footer from "@/components/layouts/Footer";
import Modal from "@/components/UTILS/modal/Modal";
import SignIn from "@/components/user/SignIn";
import SignUp from "@/components/user/SignUp-In";
import LogedInUser from "@/components/user/LogedInUser";

const page = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <>
      <ToastContainer
        position="bottom-right"
        rtl="true"
        theme="colored"
        closeOnClick
        pauseOnHover
      ></ToastContainer>
      <UserPageHeader></UserPageHeader>
      {authenticated ? (
        <LogedInUser></LogedInUser>
      ) : (
        <div className="user_Body">
          <h3 className="login_title">
            <span onClick={() => setShowSignIn(true)}>
              {" "}
              ورود به حساب کاربری
            </span>
          </h3>
          <Modal triger={showSignIn} setTriger={setShowSignIn}>
            <SignIn setTriger={setShowSignIn}></SignIn>
          </Modal>
          <h3 className="login_title">
            <span onClick={() => setShowSignUp(true)}>ثبت نام</span>
          </h3>
          <Modal triger={showSignUp} setTriger={setShowSignUp}>
            <SignUp
              setShowSignUp={setShowSignUp}
              setShowSignIn={setShowSignIn}
            ></SignUp>
          </Modal>
        </div>
      )}

      <Footer></Footer>
      <style jsx>
        {`
          .user_Body {
            height: var(--bodyHight);
          }
          .login_title {
            font-weight: lighter;
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
};

export default page;
