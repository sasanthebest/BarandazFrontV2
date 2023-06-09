import Image from "next/image";
import locationpin from "./svg/locationpin.svg";



const Location = ({ item }) => {
  return (
    <div className="flex place-items-end ">
      <Image src={locationpin} width={13} height={13} alt="locatin"></Image>
      <span className="text-xs pr-0.5 pl-2 ">{item.city_name}</span>
    </div>
  );
};

export default Location;
