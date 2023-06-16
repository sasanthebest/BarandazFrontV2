import Image from "next/image";
import locationpin from "./svg/locationpin.svg";



const Location = ({ city_name }) => {
  return (
    <div className="flex place-items-end ">
      <Image src={locationpin} width={13} height={13} alt="locatin"></Image>
      <span className="text-xs text-slate-700 pr-0.5 pl-2 ">{city_name}</span>
    </div>
  );
};

export default Location;
