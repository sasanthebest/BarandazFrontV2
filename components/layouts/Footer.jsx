'use client'
import Link from "next/link";

import styles from "./Layout.module.css";
import { AiOutlineUser } from "react-icons/ai";
import { GiBattleship } from "react-icons/gi";

import Image from "next/image";
import { MdAdd } from "react-icons/md";

import { useRouter } from "next/navigation";
import { BiCategoryAlt } from "react-icons/bi";
import { BsChatDots } from "react-icons/bs";
import { toast } from "react-hot-toast";


const Footer = () => {
  const router=useRouter()


  const rightItems=[

    {
      icon:BsChatDots,
      label:'چت',
      ref:'/'
    },
    {
      icon:BiCategoryAlt,
      label:'دسته بندی ها',
      ref:'/'
    },
  ]


    const leftItems=[
      {
        icon:AiOutlineUser,
        label:'بارانداز من',
        ref:'/'
      },
      {
        icon:MdAdd,
        label:'ثبت آگهی',
        ref:'/'
      },

  ]

  const vibrate=()=>{
      if(!("vibrate" in navigator)){
      toast.error("Vibrate not supported!");
      return;
     }
    navigator.vibrate(100);
   }
  
  return (
      <div className='grid grid-cols-1 fixed bottom-0 w-full h-8vh z-200 bg-white border nav:hidden' >
        <div className="fixed bottom-5 w-full  grid grid-cols-1 justify-items-center  z-200">
        <div className="w-20 h-20 border-b  rounded-full  flex items-center justify-center">
          <div onClick={()=>{
            vibrate()
            router.push('/')}}  className="border rounded-full  w-16 h-16 bg-white flex items-center justify-center shadow-md">

            <div className="relative w-16 h-16 rounded-full flex items justify-center "> 
            <Image alt="barandaz" src='/ship.jpg' className="rounded-full" fill={true}/>
            </div>
          </div>
          </div>
        </div>
   

      

            <div className="flex flex-row items-center justify-between border-t  p-3">

                  <div className="flex flex-row items-center justify-start gap-4 w-1/2">
                    {leftItems.map((item,index)=>(
                      <div onClick={()=>toast.success('items')}  key={index} >
                        <div className="flex flex-col gap-1 items-center"  >
                          <item.icon className="text-stone-500" size={21}/>
                          <p className="text-xs">{item.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>


                




                  <div className="flex flex-row items-center justify-end gap-4 w-1/2">
                      {rightItems.map((item,index)=>(
                        <div onClick={()=>toast.success('items')}  key={index} >
                          <div className="flex flex-col gap-1 items-center">
                            <item.icon className="text-stone-500" size={21}/>
                            <p className="text-xs">{item.label}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

        </div>


  );
};

export default Footer;
