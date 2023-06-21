import React from "react";
import getSingleAd from "@/services/getSingleAd";
import ImageSlider from "@/components/body/carddetail/ImageSlider";
import ImageCarousel from "@/components/body/carddetail/ImageCarousel";


export default async function page () {
  const data = await getSingleAd('j1KQBOmJaMwycwF8zc');

 
  return (
    <div className=''>
      {/* <ImageSlider images={data.images}/> */}
      <div className="max-w-lg">
        <ImageCarousel images={data.images}/>
      </div>

      </div>


  );
};


