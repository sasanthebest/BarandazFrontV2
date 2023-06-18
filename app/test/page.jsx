import React from "react";
import Test from "@/components/Test";
import ProgressBar from "@/components/util/ProgressBar";
import ButtonC from "@/components/util/ButtonC";
import Image from "next/image";


const page = () => {
 
  return (
    <div className="relative flex flex-row justify-center items-center w-52 h-52">

      <Image size className="rounded" src='/j6.jpg' fill={true} />
    </div>
  );
};

export default page;
