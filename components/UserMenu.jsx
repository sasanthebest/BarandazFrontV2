"use client"
import { useCallback, useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import useLoginModal from "@/hooks/useLoginModal";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useBarandazContext } from "@/context/context";
import { myAccount, myAdds, myBookmarks, myChambers, myLastSeen, myNotes } from "@/services/urls";
import { HiCalendarDays, HiUser } from "react-icons/hi2";
import { GiBattleship, GiFoldedPaper, GiNotebook } from "react-icons/gi";
import { FaSkyatlas } from "react-icons/fa";

import {IoLogOutOutline,IoLogInOutline} from 'react-icons/io5'


const UserMenu = () => {
  
const { auth, setAuth, username, setUsername } = useBarandazContext();
const [isOpen, setIsOpen] = useState(false);
const loginModal = useLoginModal()
const router=useRouter()
  const session = useSession();

  const items=[
    {
      label:`${username}`,
      icon:HiUser,
      href:() => handleMenu(myAccount)
    },
    {
      label:'آگهی های من',
      icon:GiFoldedPaper,
      href:() => handleMenu(myAdds)
    },
    {
      label:'حجره های من',
      icon:GiBattleship,
      href:() =>handleMenu(myChambers)
    },
    {
      label:'نشان شده ها',
      icon:FaSkyatlas,
      href:() => handleMenu(myBookmarks)
    },
    {
      label:'یادداشت های من',
      icon:GiNotebook,
      href:() => handleMenu(myNotes)
    },
    {
      label:'بازدید های اخیر',
      icon:HiCalendarDays,
      href:() => handleMenu(myLastSeen)
    },
    {
      label:'خروج',
      icon:IoLogOutOutline,
      href:() => signOut()
    },
  ]
  // console.log(session)
  

  useEffect(() => {
    // async function fetchUser() {
    //   const jwt=session?.data?.user?.access
    //     const data = axios
    //       .get(`${baseURL + userInfo}`, {
    //         headers: {
    //           Authorization: `jwt ${jwt}`,
    //         },
    //       })
    //       .then((res) => {
 
    //         setUsername(res.data.username)
    //         return res.data;
            

    //       })
    //       .catch((err) => {
    //         return null;
    //       });
    //     return data;
    // }
    // fetchUser()
    setUsername(session?.data?.token?.user?.username)
    setAuth(session.status)

    // console.log("session:",fetchData);

},[session.status])


  const onRent=useCallback(()=>{
    if (auth=="unauthenticated"){
      return loginModal.onOpen()
    }
    rentModal.onOpen()
  }, [auth, loginModal])


  const handleMenu = (url) => {
   setIsOpen(false)
    router.push(url);
}

  return (
    <div className="relative ">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 md:py-1 md:px-2 boder-[1px] border-neutral-200 flex flex-row justify-center
          items-center gap-1 rounded-full cursor-pointer hover:shadow-md transition text-neutral-400"
        >
          <HiUser size={20} />
          <p className="text-xs">بارانداز من</p>
        </div>
      </div>

      {isOpen && (
        <>
            {/* overlay */}
          <div
            onClick={() => setIsOpen(false)}
            className="w-screen h-screen top-0 left-0 right-0 bottom-0 fixed"
          ></div>
          {/* content */}
          <div className="absolute rounded shadow-md shadow-sky-400 w-44 bg-white overflow-hidden left-0 top-12 text-sm z-30">
            <div className="flex flex-col cursor-pointer w-full">
              {auth === "authenticated" ? (
                  items.map((item,index)=>(
                    <div className="hover:bg-slate-100 flex flex-row gap-1 items-center justify-start p-2">
                      <item.icon size={20} className="text-stone-400" />
                      <MenuItem key={index} label={item.label} onClick={item.href}/>
                      
                    </div>
                  ))
               
              ) : (
                <div className="hover:bg-slate-100 flex flex-row gap-1 items-center justify-start p-2">
                  <IoLogInOutline size={20} className="text-stone-400" />

                  <MenuItem label="ورود" onClick={loginModal.onOpen} />
                  
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserMenu;
