import React from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";
import styles from "./User.module.css";

const ShowPasword = ({ show, setShow }) => {
  const handleShowPassword = () => {
    setShow(!show);
  };
  return (
    <>
      {show && (
        <GoEye
          onClick={handleShowPassword}
          className={styles.eyeIcon}
          size="1.5em"
          color="#42d179"
        ></GoEye>
      )}
      {!show && (
        <GoEyeClosed
          onClick={handleShowPassword}
          className={styles.eyeIcon}
          size="1.5em"
          color="#8888db"
        ></GoEyeClosed>
      )}
    </>
  );
};

export default ShowPasword;
