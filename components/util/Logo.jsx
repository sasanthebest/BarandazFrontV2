"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      onClick={()=>{router.push('/')}}
      alt="Logo"
      className="hidden md:block cursor-pointer"
      height={75}
      width={75}
      src="/logo2.jpg"
    />
  );
};

export default Logo;
