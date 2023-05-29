import Image from "next/image";
import React from "react";
import Button from "../Button";
import TimeWraper from "../body/card/TimeWraper";
const MyAds = ({ads}) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 m-5">
      {ads?.map((ad,index)=>(
        // card 
        <div key={index } className="flex flex-col items-center md:grid md:grid-cols-2 border rounded border-neutral-300 cursor-pointer">
            {/* card image */}
            <div className="m-3">
              <Image src='/i.jpg' className="rounded" width={200} height={200}  />
            </div>
          {/* card info */}
        <div className="flex flex-col items-center md:items-start gap-3 p-3">
          <p>{ad.title}</p>
          <p className="text-sm text-neutral-400">{ad.price?ad.price:'توافقی'}</p>
          <TimeWraper item={ad}></TimeWraper>
        <div className="mt-2 text-center">

        <div>
          <Button small label='ویرایش آگهی'/>
        </div>
        </div>
        </div>
        </div>
      ))}
    </div>
  );
};

export default MyAds;

