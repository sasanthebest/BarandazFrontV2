import React, { useRef, useEffect, useState } from "react";
import styles from "./User.module.css";

import { useDispatch } from "react-redux";
import { setCredentials } from "../../REDUX/SLICES/auth/authSlice";
import { useLoginMutation } from "../../REDUX/SLICES/auth/authApiSlice";
import { useRouter } from "next/router";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [username, setUser] = useState("");
  const [password, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await login({ username, password }).unwrap();
      dispatch(
        setCredentials({
          ...userData,
          username,
        })
      );
      setUser("");
      setPwd("");
      router.push("./");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("no server response");
      } else if (err.response?.status === 400) {
        setErrMsg("missing username or password");
      } else if (err.response?.status === 401) {
        setErrMsg("unauthorized");
      } else {
        setErrMsg("login failed");
      }
      errRef.current.focus();
    }
  };

  const handleUserInput = (e) => {
    setUser(e.target.value);
  };
  const handlePwdInput = (e) => {
    setPwd(e.target.value);
  };
  const content = isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className={styles.login}>
      <p
        ref={errRef}
        // className={errMsg ? "errmsg" : "offscreen"}
        // aria-live="assertive"
      >
        {errMsg}
      </p>

      <h1>Employee Login</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          ref={userRef}
          value={username}
          onChange={handleUserInput}
          autoComplete="off"
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={handlePwdInput}
          value={password}
          required
        />
        <button>Sign In</button>
      </form>
    </section>
  );

  return content;
};

export default Login;
