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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 p-5">
      {ads?.map((ad,index)=>(
        // card 
        <div key={index }  className="flex flex-col items-center md:flex md:flex-row gap-4 border rounded border-neutral-300">
            {/* card image */}
            <div className="relative flex justify-center items-center text-center w-40 h-32 m-2">
              <Image alt={ad.title} src={ad.image?baseURL+ad.image:'/logoC.png'} className="rounded" fill={true}  />
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

