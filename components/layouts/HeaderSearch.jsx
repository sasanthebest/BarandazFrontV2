import { RiSearch2Line } from 'react-icons/ri';
const HeaderSearch = () => {
  return (
    <div className="
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
    items-center ">
    <div className='border-l-2 pl-1 text-center'>
      <RiSearch2Line className="text-stone-500"/>
    </div>
    <input type="text" className="bg-slate-100 outline-none text-sm text-zinc-500 w-full" placeholder="جستجو در بارانداز"></input>
    </div>

  );
};

export default HeaderSearch;
