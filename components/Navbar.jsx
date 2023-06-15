'use client'
import React, { useEffect, useState } from "react";
import Logo from "./util/Logo";
import UserMenu from "./UserMenu";
import Button from "./util/Button";
import HeaderSearch from "./layouts/HeaderSearch";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ButtonC from "./util/ButtonC";
import { useBarandazContext } from "@/context/context";


const NavBar =({categories}) => {
  const router = useRouter()
  // const [theme, setTheme] = useState("theme1")
  const { setAllCategories, setAllCities } = useBarandazContext();

    useEffect(() => {
      setAllCategories(categories);
      console.log("first:", categories);
    }, []);
    

  return (
    <div className="w-full h-16 bg-white shadow-md shadow-sky-300 top-0 sticky z-200 ">
      <div className="">
      <div className="max-w-[2520px] xl:px-20 md:px-10 sm:px-2 px-4">
        <div className="flex flex-row items-center justify-between gap-3 md:gap-0 ">
            <div className="flex flex-row items-center gap-5 mobmax:hidden">
              <Logo />
              <HeaderSearch/>
            </div>
          <div className="flex flex-row items-center gap-5 mobmax:hidden">
              <UserMenu />
              <ButtonC onClick={()=>router.push('/newAd')} label="ثبت آگهی"/>
          </div>
        </div>
      </div>
      {/* <Category/> */}
    </div>
    </div>
  );
};

export default NavBar;
