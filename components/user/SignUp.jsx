"use client";
import React, { useState } from "react";
import styles from "./User.module.css";
import ShowPasword from "./ShowPasword";
import { useForm } from "react-hook-form";
import * as y from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = y.object({
  username: y
    .string()
    .required("لطفا شماره تلفن را وارد نمایید")
    .matches(
      "^(\\+98|0)?9\\d{9}$",
      "لطفا شماره تلفن را به صورت صحیح وارد نمایید"
    ),
  password: y.string().required("لطفا پسورد را وارد نمایید"),
  password2: y.string().required("لطفا تکرار پسورد را وارد نمایید"),
});
const SignUp = ({ onSubmit }) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  return (
    <div className={styles.content}>
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
        method="POST"
      >
        <p>ثبت نام</p>
        <div className={styles.form_group}>
          <label htmlFor="username">نام کاربری</label>
          <input
            {...register("username", { required: true, minLength: 4 })}
            autoFocus
            name="username"
            type="text"
            placeholder="شماره موبایل"
            className={styles.input}
            autoComplete="on"
          />
          {errors.username && (
            <p className={styles.formerror}>{errors.username.message}</p>
          )}
        </div>
        <div className={styles.form_group}>
          <label htmlFor="password">پسورد</label>
          <div className={styles.inputgroup}>
            <input
              {...register("password")}
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="پسورد را وارد کنید"
              className={styles.input}
              autoComplete="on"
            />
            <ShowPasword
              show={showPassword}
              setShow={setShowPassword}
            ></ShowPasword>
          </div>
        </div>
        {errors.password && (
          <p className={styles.formerror}>{errors.password.message}</p>
        )}
        <div className={styles.form_group}>
          <label htmlFor="password2">تکرار پسورد</label>
          <div className={styles.inputgroup}>
            <input
              {...register("password2")}
              name="password2"
              type={showPassword2 ? "text" : "password"}
              placeholder="پسورد را وارد کنید"
              className={styles.input}
              autoComplete="on"
            />
            <ShowPasword
              show={showPassword2}
              setShow={setShowPassword2}
            ></ShowPasword>
          </div>
        </div>
        {errors.password2 && (
          <p className={styles.formerror}>{errors.password2.message}</p>
        )}
        <button>ثبت نام</button>
      </form>
    </div>
  );
};

export default SignUp;
