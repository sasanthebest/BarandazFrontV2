"use client";
import React, { useState } from "react";
import styles from "./User.module.css";
import { useForm } from "react-hook-form";
import * as y from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Timer from "./timer";

const schema = y.object({
  token: y.string().required("لطفا شماره تلفن را وارد نمایید"),
});

const SingIn = ({ phone, onSubmit }) => {
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
          onSubmit(data);
          reset();
        })}
        method="POST"
      >
        <p>ورود به حساب کاربری</p>
        <div className={styles.form_group}>
          <label htmlFor="username">
            را وارد کنید{phone}کد پیامک شده به شماره تلفن
          </label>
          <input
            {...register("token", { required: true, minLength: 4 })}
            autoFocus
            name="token"
            type="text"
            placeholder="کد تایید  4 رقمی"
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
        <button>تایید</button>
      </form>
    </div>
  );
};

export default SingIn;
