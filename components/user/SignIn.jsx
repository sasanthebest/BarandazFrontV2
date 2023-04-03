import React, { useState, useEffect } from "react";
import styles from "./User.module.css";
import { toast } from "react-toastify";
import ShowPasword from "./ShowPasword";
import SignInService from "./../../SERVICES/SignInService";
import {
  setAuthenticated,
  setCredentials,
} from "../../REDUX/SLICES/auth/authSlice";
import { useDispatch } from "react-redux";

const SignIn = ({ setTriger }) => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [validationError, setValidationError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const formValues = { userName, passWord };
  const dispatch = useDispatch();

  /////////////////////////////////////////////////////////////////////////////////////////////////
  const Validate = (value) => {
    const errors = {};
    const userNameRegex = /^[A-Za-z][A-Za-z0-9]*$/;

    if (!value.userName.trim()) {
      errors.userName = "نام کاربری وارد نشده است";
    } else if (value.userName.length < 4) {
      errors.userName = "نام کاربری باید بیشتر از 4 کاراکتر باشد";
    } else if (value.userName.length >= 50) {
      errors.userName = "نام کاربری شما بسیار طولانی است";
    } else if (!userNameRegex.test(value.userName)) {
      errors.userName = "فقط کاراکتر انگلیسی وارد کنید ";
    }
    if (!value.passWord.trim()) {
      errors.passWord = "پسورد وارد نشده است";
    } else if (value.passWord.length < 4) {
      errors.passWord = "پسورد باید بیشتر از 4 کاراکتر باشد";
    } else if (value.passWord.length >= 50) {
      errors.passWord = " پسورد شما بسیار طولانی است ";
    }
    return errors;
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////
  const handleSubmit = (e) => {
    e.preventDefault();
    setValidationError(Validate(formValues)); //seting errors on state
    setIsSubmit(true);

    // console.log("object");
  };
  //////////////////////////////////////////////////////////////
  const DoSignIn = async () => {
    try {
      const { data } = await SignInService(formValues);
      const accessToken = data.access;
      const refreshToken = data.refresh;

      window.localStorage.setItem("access", JSON.stringify(accessToken));
      window.localStorage.setItem("refresh", JSON.stringify(refreshToken));
      dispatch(setCredentials({ username: userName, token: { access: accessToken, refresh: refreshToken } }));
      dispatch(setAuthenticated(true));
      toast.success("ورود شما شما با موفقیت انجام شد");
      setTimeout(() => {
        setTriger(false);
      }, 2000);
    } catch (ex) {
      if (ex.response && ex.response.status == 401) {
        toast.error("اطلاعات وارد شده درست نمی باشد");
      }
    }
  };
  //////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////
  useEffect(() => {
    // console.log(validationError);
    if (Object.keys(validationError).length === 0 && isSubmit) {
      DoSignIn();
    }
  }, [validationError]);
  /////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <div className={styles.content}>
      <form onSubmit={handleSubmit}>
        <div className={styles.form_group}>
          <p>ورود</p>
          <label htmlFor="username">نام کاربری</label>
          <input
            onChange={(e) => setUserName(e.currentTarget.value)}
            placeholder="نام کاربری را وارد کنید"
            value={userName}
            autoFocus
            name="username"
            type="text"
            className={styles.input}
          />
        </div>
        {validationError && <p>{validationError.userName}</p>}
        <div className={styles.form_group}>
          <label htmlFor="password">پسورد </label>
          <div className={styles.inputgroup}>
            <input
              onChange={(e) => setPassWord(e.currentTarget.value)}
              placeholder="پسورد را وارد کنید"
              value={passWord}
              name="password"
              type={showPassword ? "text" : "password"}
              className={styles.input}
            />
            <ShowPasword
              show={showPassword}
              setShow={setShowPassword}
            ></ShowPasword>
          </div>
        </div>
        {validationError && <p>{validationError.passWord}</p>}
        <button> ورود</button>
      </form>
    </div>
  );
};

export default SignIn;
