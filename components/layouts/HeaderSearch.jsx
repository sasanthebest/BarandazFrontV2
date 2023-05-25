import {CiSearch} from 'react-icons/ci'
const HeaderSearch = () => {
  return (
    <div className="lg:w-96 md:w-72 mobmax:w-full px-5">
    <CiSearch className=""/>
    <input type="text" className="
    text-xs
     text-neutral-500 
    border-none
    outline-none 
    bg-slate-100 
    rounded 
    h-9 
    flex 
    flex-row " placeholder="جستجو"></input>
    </div>

  );
};

export default HeaderSearch;
