"use client";
import React, { useState } from "react";
import styles from "./Card.module.css";
import { FaSkyatlas } from "react-icons/fa";

const SaveIcon = ({ item }) => {
  const [save, setSave] = useState(false);
  const [id, setId] = useState("");
  // const handleSave = () => {
  //   setSave((value) => !value);
  //   setId(item._id);
  // };
  // console.log(save);
  // console.log(id);

  return (
    <div className="cursor-pointer z-200 absolute top-0" onClick={()=>setSave(!save)}>
      {
        <FaSkyatlas
          className={save && "bg-white rounded bg-opacity-75"}
          size={24}
        ></FaSkyatlas>
      }
    </div>
  );
};

export default SaveIcon;
