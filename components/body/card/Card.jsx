'use client'
import React from "react";
import Image from "next/image";
//Componenets
import SaveIcon from "./SaveIcon";
import TimeWraper from "./TimeWraper";
//styles
import styles from "./Card.module.css";
import CategoryBadge from "./CategoryBadge";
import ExpandableText from "@/components/ExpandeableText";
import { useRouter } from "next/navigation";
import Location from "./Location";
import Link from "next/link";



const Card = ({ item }) => {
  const router=useRouter()
  return (
    <>
      <div
        onClick={() => router.push(`/ads/${item.code}`)}
        className={`${styles.card}  rounded`}
      >
        <div className="block relative z-20 h-30v">
          <Image
            className="rounded"
            src="/i.jpg"
            alt={item.title}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          ></Image>
          <SaveIcon item={item}></SaveIcon>
        </div>
        <div className="flex items-start pt-2 h-12v gap-2">
          <div className=" h-full w-full pr-1 ">
            <Link href={`/ads/${item.code}`}>
              <h2 className="p-0 cursor-pointer">{item.title}</h2>
            </Link>

            <div className="flex place-items-end absolute bottom-0 w-full">
              <div className="flex justify-between w-full">
                <div className="flex">
                  <Location city_name={item.city_name} />
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
