import {CiSearch} from 'react-icons/ci'
const HeaderSearch = () => {
  return (
    <div className="">
    <CiSearch className=""/>
    <input type="text" className="
    text-xs
     text-neutral-500 
    border-none
    outline-none 
    bg-slate-100 
    rounded 
    w-96 
    h-9 
    flex 
    flex-row " placeholder="جستجو"></input>
    </div>

  );
};

export default HeaderSearch;
