'use client'
import React, { useState } from "react";
import Logo from "./util/Logo";
import UserMenu from "./UserMenu";
import Button from "./util/Button";
import HeaderSearch from "./layouts/HeaderSearch";
import { useRouter } from "next/navigation";
import Image from "next/image";


const NavBar =() => {
  const router = useRouter()
  const [theme,setTheme]=useState("theme1")

  return (
    <div className="w-full bg-white shadow-sm top-0 sticky z-200 xl:h-5v 2xl:h-5v">
      <div className="py4 border-b-[1px] m-5">
        <div className="max-w-[2520px] xl:px-20 md:px-10 sm:px-2 px-4">
          <div className="flex flex-row items-centerjustify-between gap-3 md:gap-0 mb-3">
            <Logo />
            <HeaderSearch />
            <div className="flex flex-row items-center gap-5 mobmax:hidden">
              <UserMenu />
              <Button
                onClick={() => router.push("/newAd")}
                label="ثبت آگهی"
                bgColor={theme}
                textColor="#f6f6f6"
              />
            </div>
            <div className={` h-5 w-12`}>
              <Image
                src="./vector.svg"
                height={24}
                width={24}
                alt="alt"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <Category/> */}
    </div>
  );
};

export default NavBar;
