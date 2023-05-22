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
import CategoryBadge from "./CategoryBadge";
import ExpandableText from "@/components/ExpandeableText";

const Card = ({ item }) => {
  return (
    <>
      <div className={`${styles.card} cursor-pointer absolute border rounded`}>
        <div className={styles.Image}>
          <Link href={`/ads/${item.id}/`}>
            <Image
              className={`${styles.img} rounded`}
              src="/i.jpg"
              alt={item.title}
              height={218}
              width={327}
              style={{ objectFit: "contain" }}
            ></Image>
          </Link>
          <SaveIcon item={item}></SaveIcon>
          <div className="bottom-20 flex flex-col">
            <CityBadge item={item}></CityBadge>
            <CategoryBadge item={item}></CategoryBadge>
          </div>
        </div>

        <div className="flex flex-col items-start pr-2 ga-3">
          <div className={styles.title_container}>
            <h5 className={styles.title}>
              <Link href={`/ads/${item.id}/`}>
                <ExpandableText>{item.title}</ExpandableText>
                </Link>
            </h5>
          </div>
          <ExpandableText>{item.description}</ExpandableText>
          <div className={styles.time_price_container}>
            <TimeWraper time={item.created_at}></TimeWraper>
            <span className={`${styles.price} text-sm text-neutral-400`}>
              {item.price? `${item.price} تومان`:"توافقی"}
            </span>
          </div>
        </div>

      </div>
    </>
  );
};

export default Card;
