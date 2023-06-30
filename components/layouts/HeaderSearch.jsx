import { RiSearch2Line } from "react-icons/ri";
const HeaderSearch = () => {
  return (
    <div
      className="
    border-none
    bg-slate-100 
    rounded 
    h-11 
    mobmax:w-full 
    md:w-72 
    lg:w-96
    px-5 
    flex 
    flex-row 
    gap-3 
    items-center "
    >
      <input
        type="text"
        className="bg-slate-100 outline-none text-sm text-zinc-500 w-full"
        placeholder="جستجو در بارانداز"
      ></input>
      <div className="text-center">
        <RiSearch2Line className="text-stone-500" />
      </div>
    </div>
  );
};

export default HeaderSearch;
