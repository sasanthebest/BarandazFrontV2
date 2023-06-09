"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
//Componenets
import SaveIcon from "./SaveIcon";
import DesciptionWrapper from "./DesciptionWrapper";
import TimeWraper from "./TimeWraper";
//styles
import styles from "./Card.module.css";
import CategoryBadge from "./CategoryBadge";
import ExpandableText from "@/components/ExpandeableText";
import { useRouter } from "next/navigation";
import {MdLocationPin,MdCategory,MdOutlineCategory} from "react-icons/md";
import Location from "./Location";



const Card = ({ item }) => {
  console.log("item", item);
  const router = useRouter();
  const handleNavigationToCardDetails = (id) => {
    router.push(`/ads/${id}/`);
  };
  return (
    <>
      <div className={`${styles.card}  rounded`}>
        <div className="block relative z-20 h-30v">     
            <Image
              className="rounded"
              src="/i.jpg"
              alt={item.title}
              fill={true}
            ></Image>
          <SaveIcon item={item}></SaveIcon>
        </div>
        <div className="flex items-start pt-2 h-15v gap-2">
          <div className=" h-full w-full pr-1 ">
              <h2 className="p-0 cursor-pointer">{item.title}</h2>
              <div className="flex place-items-end absolute bottom-0 ">
                <Location item={item}/>
                <TimeWraper time={item.created_at}></TimeWraper>
                <span className="text-xs text-neutral-400">
                  {item.price ? `${item.price} تومان` : "توافقی"}
                </span>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
