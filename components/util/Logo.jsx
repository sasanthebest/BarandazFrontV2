"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      onClick={()=>{router.push('/')}}
      alt="Logo"
      className="cursor-pointer"
      height={60}
      width={60}
      src="/ship.jpg"
    />
  );
};

export default Logo;
