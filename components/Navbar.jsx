'use client'
import React from "react";
import Logo from "./util/Logo";
import UserMenu from "./UserMenu";
import Button from "./util/Button";
import HeaderSearch from "./layouts/HeaderSearch";
import { useRouter } from "next/navigation";


const NavBar =() => {
    const router=useRouter()

  return (
    <div className="w-full bg-white shadow-md top-0 sticky z-200 xl:h-5v 2xl:h-5v">
      <div className="py4  m-5">
      <div className="max-w-[2520px] xl:px-20 md:px-10 sm:px-2 px-4">
    <div className="flex flex-row items-centerjustify-between gap-3 md:gap-0 mb-3">
          <Logo />
          <HeaderSearch/>
          <div className="flex flex-row items-center gap-5 mobmax:hidden">
          <UserMenu />
          <Button onClick={()=>router.push('/newAd')} small label="ثبت آگهی"/>
          </div>


        </div>
    </div>
      </div>
      {/* <Category/> */}
    </div>
  );
};

export default NavBar;
