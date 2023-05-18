import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserPageHeader from "../COMPONENTS/USER/UserPageHeader";
import Footer from "../COMPONENTS/LAYOUT/Footer";
import Modal from "../COMPONENTS/UTILS/MODAL/Modal";
import SignIn from "../COMPONENTS/USER/SignIn";
import SignUp from "./../COMPONENTS/USER/SignUp";
import LogedInUser from "../COMPONENTS/USER/LogedInUser";
import { useSelector } from "react-redux";
import SideBar from "./../COMPONENTS/UTILS/SIDEBAR/SideBar";
const User = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const { authenticated, user } = useSelector((store) => store.authSlice);
  const { activeSideBar } = useSelector((store) => store.sideBarSlice);
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
      {authenticated && user ? (
        // <LogedInUser></LogedInUser>
        <>
          <div className="container_user">
            <SideBar>
              <LogedInUser></LogedInUser>
            </SideBar>
            <div className="SideBarDetails">{}</div>
          </div>
        </>
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
          .container_user {
            display: flex;
            position: relative;
          }
          .user_Body {
            height: var(--bodyHight);
          }
          .login_title {
            font-weight: lighter;
            cursor: pointer;
          }
          .SideBarDetails {
            background: blue;
            height: var(--bodyHight);
            width: 100%;
          }
        `}
      </style>
    </>
  );
};

export default User;
