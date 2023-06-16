import { RxInstagramLogo } from "react-icons/rx";
import { CiLinkedin, CiTwitter, CiYoutube } from "react-icons/ci";
import { BsTelegram } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import React from "react";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  const icons = [
    { icon: CiLinkedin },
    { icon: FaTelegramPlane },
    { icon: CiTwitter },
    { icon: AiOutlineYoutube },
    { icon: RxInstagramLogo },
  ];
  return (
    <>
      <div className="flex flex-row items-center justify-center gap-1">
        <p className="text-stone-300 text-xs border-l  p-1 cursor-pointer hover:text-stone-400">
          پشتیبانی
        </p>
        <p className="text-stone-300 text-xs border-l p-1 cursor-pointer hover:text-stone-400">
          در باره ی بارانداز
        </p>
        <p className="text-stone-300 text-xs  p-1 cursor-pointer hover:text-stone-400">
          بازار محصولات کشاورزی
        </p>
      </div>
      <div className=" flex flex-row items-center justify-center gap-4 ">
        {icons.map((icon, index) => (
          <icon.icon
            key={index}
            size={19}
            className="text-neutral-400 cursor-pointer hover:text-neutral-500"
          />
        ))}
      </div>
    </>
  );
};

export default Footer;
