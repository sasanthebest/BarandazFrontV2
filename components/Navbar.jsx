"use client";
import React, { useEffect, useState } from "react";
import Logo from "./util/Logo";
import UserMenu from "./UserMenu";
import Button from "./util/Button";
import HeaderSearch from "./layouts/HeaderSearch";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import ButtonC from "./util/ButtonC";
import ArrowTiltle from "./util/ArrowTiltle";

const NavBar = () => {
  const router = useRouter();
  const [arrowTitle, setArrowTitle] = useState("صفحه اصلی");
  const path = usePathname();

  if (path != "/") {
    return (
      <div className="w-full bg-white shadow-md shadow-sky-300 top-0 sticky z-200 p-2 ">
        <div className="max-w-[2520px] xl:px-20 md:px-10 sm:px-2 ">
          <div className="grid grid-cols-1 ">
            <div className="p-3 nav:hidden">
              <ArrowTiltle onClick={() => router.back()} title={arrowTitle} />
            </div>
            <div className="grid grid-cols-1 nav:grid-cols-2 mobmax:hidden">
              <div className="flex flex-row items-center justify-start gap-5 w-full">
                <Logo />
                {/* <HeaderSearch/> */}
              </div>
              <div className="flex flex-row items-center justify-end  gap-5 mobmax:hidden">
                <UserMenu />
                <ButtonC
                  onClick={() => router.push("/newAd")}
                  label="ثبت آگهی"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white shadow-md shadow-sky-300 top-0 sticky z-200 p-2 ">
      <div className="">
        <div className="max-w-[2520px] xl:px-20 md:px-10 sm:px-2 ">
          <div className="grid grid-cols-1 nav:grid-cols-2">
            <div className="flex flex-row items-center justify-start gap-3 w-full">
              <Logo />
              <HeaderSearch />
            </div>
            <div className="flex flex-row items-center justify-end  gap-5 mobmax:hidden">
              <UserMenu />
              <ButtonC onClick={() => router.push("/newAd")} label="ثبت آگهی" />
            </div>
          </div>
        </div>
        {/* <Category/> */}
      </div>
    </div>
  );
};

export default NavBar;
