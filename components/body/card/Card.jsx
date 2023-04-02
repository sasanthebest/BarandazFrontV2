import React from "react";
import Link from "next/link";
import Image from "next/image";

//Componenets
import SaveIcon from "./SaveIcon";
import CityBadge from "./CityBadge";
import DesciptionWrapper from "./DesciptionWrapper";
import TimeWraper from "./TimeWraper";
//styles
import styles from "./Card.module.css";
import CategoryBadge from "./Category";

const Card = ({ item }) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.Image}>
          <Link href={`/ads/${item.id}/`}>
            <Image
              className={styles.img}
              src="/i.jpg"
              alt={item.title}
              height={218}
              width={327}
              style={{ objectFit: "contain" }}
            ></Image>
          </Link>

          <SaveIcon item={item}></SaveIcon>
          <CityBadge item={item}></CityBadge>
          <CategoryBadge item={item}></CategoryBadge>
        </div>
        <div className={styles.details}>
          <div className={styles.title_container}>
            <h5 className={styles.title}>
              <Link href={`/ads/${item.id}/`}>{item.title}</Link>
            </h5>
          </div>
          <DesciptionWrapper item={item}></DesciptionWrapper>
          <div className={styles.time_price_container}>
            <TimeWraper item={item}></TimeWraper>
            <span className={styles.price}>
              {item.price} {"تومان"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
