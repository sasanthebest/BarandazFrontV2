'use client'
import { useEffect } from "react";
import { useBarandazContext } from '@/context/context';
import { AiOutlineCaretRight, AiOutlineYoutube } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import Footer from "../Footer";
import Image from "next/image";



const SidebarContainer = ({ title, children, mobile,littleSideBar }) => {
  const { activeSidebar, setActiveSidebar,hasLittleSideBar,sethasLittleSideBar } = useBarandazContext();
  const router = useRouter();
  useEffect(() => {
    setActiveSidebar(activeSidebar);
  }, [router.asPath]);



  return (
    <div className={`${mobile ? "" : "mobmax:hidden"} sticky top-0 `}>
      <div className="flex justify-end h-5v">
        <div>
            <div
              onClick={() => {
                setActiveSidebar(!activeSidebar)
                sethasLittleSideBar(!hasLittleSideBar)
              }}
              className="flex justify-end h-6 w-6  bg-white rounded-r-2xl">
              <AiOutlineCaretRight size={22} className={`bg-white cursor-pointer ${activeSidebar ? 'transform rotate-135 duration-700 ':'transform -rotate-180 duration-700 '}`} />
            </div>
        </div>
      </div>
      {activeSidebar ? (
        <div className="w-72 ease-out">
          <div className="pl-3 pr-4">{children}</div>
        </div>
      ):
       littleSideBar && (
        <div className="w-16">
          <div className="pl-3 pr-4">{children}</div>
        </div>
      )}
    {activeSidebar && (
        <div>
          <div className="flex flex-row gap-4 items-center justify-center pb-6">
            <Image className="cursor-pointer" src='/1.png' width={80} height={80}/>
            <Image className="cursor-pointer" src='/2.png' width={80} height={80}/>
          </div>
          <div className="grid grid-cols-1 gap-3">

          <Footer/>
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarContainer;


