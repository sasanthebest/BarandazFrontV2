'use client'
import React from "react";
import Image from "next/image";
//Componenets
import SaveIcon from "./SaveIcon";
import TimeWraper from "./TimeWraper";
//styles
import styles from "./Card.module.css";
<<<<<<< HEAD
import CategoryBadge from "./CategoryBadge";
import ExpandableText from "@/components/ExpandeableText";
import { useRouter } from "next/navigation";
=======
import Location from "./Location";
import Link from "next/link";


>>>>>>> 1dacb06ec77dfd25c6b9d506d5dda8c6da514c70

const Card = ({ item }) => {
  const router=useRouter()
  return (
    <>
<<<<<<< HEAD
      <div onClick={()=>router.push(`/ads/${item.code}`)} className={`${styles.card} cursor-pointer absolute border rounded`}>
        <div className={styles.Image}>
            <Image
              className={`${styles.img} rounded`}
              src="/i.jpg"
              alt={item.title}
              height={218}
              width={327}
              style={{ objectFit: "contain" }}
            ></Image>
=======
      <div className={`${styles.card}  rounded`}>
        <div className="block relative z-20 h-30v">
          <Image
            className="rounded"
            src="/i.jpg"
            alt={item.title}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          ></Image>
>>>>>>> 1dacb06ec77dfd25c6b9d506d5dda8c6da514c70
          <SaveIcon item={item}></SaveIcon>
        </div>
        <div className="flex items-start pt-2 h-12v gap-2">
          <div className=" h-full w-full pr-1 ">
            <Link prefetch={false} href={`/ads/${item.id}/`}>
              <h2
                className="p-0 cursor-pointer"
              >
                {item.title}
              </h2>
            </Link>

            <div className="flex place-items-end absolute bottom-0 w-full">
              <div className="flex justify-between w-full">
                <div className="flex">
                  <Location item={item} />
                  <TimeWraper time={item.created_at}></TimeWraper>
                </div>
                <div>
                  <span className="text-xs text-neutral-700 ml-2">
                    {item.price ? `${item.price} تومان` : "توافقی"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
