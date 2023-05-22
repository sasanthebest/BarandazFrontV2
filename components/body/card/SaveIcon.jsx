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
    <div className="cursor-pointer" onClick={()=>setSave(!save)}>
      {
        <FaSkyatlas
          className={save && "text-rose-600"}
          size={24}
        ></FaSkyatlas>
      }
    </div>
  );
};

export default SaveIcon;
