"use client";
import React, { useState } from "react";
import styles from "./Card.module.css";
import { FaSkyatlas } from "react-icons/fa";

const SaveIcon = ({ item }) => {
  const [save, setSave] = useState(false);
  const [id, setId] = useState("");
  const handleSave = () => {
    setSave((value) => !value);
    setId(item._id);
  };
  // console.log(save);
  // console.log(id);

  return (
    <div
      className={save ? styles.saveIcon2 : styles.saveIcon}
      onClick={handleSave}
    >
      {
        <FaSkyatlas
          className={save ? styles.Icon2 : styles.Icon}
          size="1.3em"
        ></FaSkyatlas>
      }
    </div>
  );
};

export default SaveIcon;
