"use client";
import React, { useState } from "react";
import styles from "./CardCarousel.module.css";
import Image from "next/image";
import Btnslider from "./btnslider";
import { useSwipeable } from "react-swipeable";
import { baseURL } from "@/services/urls";

const CardCarousel = ({ images }) => {
  // console.log(advertisment.images);
  const [slideIndex, setSlideIndex] = useState(1);
  // const Image_length = advertisment.images.length;
  const Image_Array = images
    .sort((a, b) => a.is_banner - b.is_banner)
    .reverse();
  //console.log(slideImages);
  ///const

  //move slide functions
  const nextSlide = () => {
    if (slideIndex !== images.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === images.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(images.length);
    }
  };
  const dotNvigate = (index) => {
    setSlideIndex(index);
  };

  //swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => prevSlide(),
    onSwipedRight: () => nextSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div {...handlers} className={styles.container_slider}>
      <div className={styles.inner}>
        {Image_Array &&
          Image_Array.map((item) => (
            <div
              key={item.id}
              style={{ transform: `translateX(${(slideIndex - 1) * 100}%)` }}
              className={styles.slide}
            >
              <Image
                className={styles.img}
                src={baseURL+item.image}
                alt='img'
                width={300}
                height={300}
              ></Image>
            </div>
          ))}
      </div>

      <Btnslider
        moveSlide={nextSlide}
        direction={"next"}
        Image_length={images.length}
        slideIndex={slideIndex}
      ></Btnslider>
      <Btnslider
        moveSlide={prevSlide}
        direction={"prev"}
        Image_length={images.length}
        slideIndex={slideIndex}
      ></Btnslider>

      <div className={styles.container_dots}>
        {Array.from({ length: images.length }).map(
          (item, index) => (
            <div
              onClick={() => dotNvigate(index + 1)}
              key={index}
              className={
                slideIndex === index + 1
                  ? `${styles.dot} ${styles.dot_active}`
                  : `${styles.dot}`
              }
            ></div>
          )
        )}
      </div>
    </div>
  );
};

export default CardCarousel;
