"use client";
import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import styles from "./CardCarousel.module.css";
const Btnslider = ({ moveSlide, direction, slideIndex, Image_length }) => {
  ///hide and display buttons
  const [display, setDisplay] = useState("");
  const buttonClass = () => {
    if (direction === "next" && slideIndex === Image_length) {
      setDisplay("none");
    } else if (direction === "next" && slideIndex !== Image_length) {
      setDisplay("");
    } else if (direction === "prev" && slideIndex === 1) {
      setDisplay("none");
    } else if (direction === "prev" && slideIndex !== 1) {
      setDisplay("");
    }
  };
  useEffect(() => {
    buttonClass();
  }, [slideIndex,buttonClass]);

  return (
    <button
      onClick={moveSlide}
      className={
        direction === "next"
          ? `${styles.btn_slide} ${styles.next}`
          : `${styles.btn_slide} ${styles.prev}`
      }
      style={{ display: display }}
    >
      {direction === "next" ? (
        <FiChevronRight size="1.5em"></FiChevronRight>
      ) : (
        <FiChevronLeft size="1.5em"></FiChevronLeft>
      )}
    </button>
  );
};

export default Btnslider;
