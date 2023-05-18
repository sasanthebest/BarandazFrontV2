"use client";
import React, { useState } from "react";
import styles from './User.module.css'
import ShowPasword from "./ShowPasword";
import { set, useForm } from "react-hook-form";
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
});

const SignUp = ({ onSubmit }) => {
  const [time, setTime] = useState(0);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className={styles.content}>
      <form
        onSubmit={handleSubmit((data) => {
          
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
        {/* {time > 0 ? (
          <Timer time={time} setTime={() => setTime(0)} />
        ) : (
          <button onClick={() => setTime(15)}>تایید</button>
        )} */}
        <button onClick={() => setTime(15)}>تایید</button>
      </form>
    </div>
  );
};

export default SignUp;
