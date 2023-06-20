'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "../../util/Button";
import TimeWraper from "../../body/card/TimeWraper";
import { useRouter } from "next/navigation";
import { baseURL } from "@/services/urls";
const MyAds = ({ads}) => {

const router=useRouter()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 m-5">
      {ads?.map((ad,index)=>(
        // card 
        <div key={index }  className="flex flex-col items-center md:grid md:grid-cols-2 border rounded border-neutral-300">
            {/* card image */}
            <div className="m-3">
              <Image alt={ad.title} src={ad.image?baseURL+ad.image:'/logoC.png'} className="rounded" width={100} height={100}  />
            </div>
          {/* card info */}
        <div className="flex flex-col items-center md:items-start gap-3 p-3">
          <p>{ad.title}</p>
          <p className="text-sm text-neutral-400">{ad.price?ad.price:'توافقی'}</p>
          {/* <TimeWraper item={ad}></TimeWraper> */}
        <div className="mt-2 text-center">

        <div>
          <Button onClick={()=>router.push(`/user/myAds/${ad.code}/review`)} small label='ویرایش آگهی'/>
        </div>
        </div>
        </div>
        </div>
      ))}
    </div>
  );
};

export default MyAds;

