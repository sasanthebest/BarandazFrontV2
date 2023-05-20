import Image from "next/image";
import React from "react";
import Button from "../Button";
import TimeWraper from "../body/card/TimeWraper";
const MyAds = ({ads}) => {

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 m-5">
      {ads.map((ad)=>(
        // card 
        <div className="grid grid-cols-2 border rounded-lg border-neutral-300 ">
          {/* card info */}
        <div className="grid grid-cols-1 gap-3 p-3 ">
          <p>{ad.title}</p>
          <p className="text-sm text-neutral-400">{ad.price}</p>
          <TimeWraper item={ad}></TimeWraper>
        <div className="mt-2 text-center">

        {/* card image */}
        <div>
          <Button small label='ویرایش آگهی'/>
        </div>
        </div>
      
        </div>
        <div className="w-full h-full">

        <Image src='/i.jpg' width={500} height={600} />
           </div>
        </div>
      ))}
    </div>
  );
};

export default MyAds;

