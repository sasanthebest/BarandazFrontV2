'use client'
import React from "react";
import Container from "./Container";
import Logo from "./Logo";

import UserMenu from "./UserMenu";

// import Category from "./Category";

const NavBar = ({currentUser}) => {
  return (
    <div className="w-full bg-white shadow-sm ">
      <div className="py4 border-b-[1px] m-5">
      <div
      className="
        max-w-[2520px]
        xl:px-20
        md:px-10
        sm:px-2
        px-4
      "
    >
    <div
      className="
                flex
                flex-row
                items-center
                justify-between
                gap-3
                md:gap-0
              "
            >
          <Logo />
          {/* <Search /> */}
          <UserMenu currentUser={currentUser} />
        </div>
    </div>
      </div>
      {/* <Category/> */}
    </div>
  );
};

export default NavBar;
