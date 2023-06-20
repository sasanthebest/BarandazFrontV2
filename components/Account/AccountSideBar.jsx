'use client'
import {  useEffect, useState } from 'react'
import { IoLogInOutline, IoLogOutOutline } from "react-icons/io5";
import { HiCalendarDays, HiUser } from "react-icons/hi2";
import { FaSkyatlas } from "react-icons/fa";
import { GiBattleship, GiFoldedPaper, GiNotebook } from "react-icons/gi";
import MenuItem from "../MenuItem";
import { useRouter } from "next/navigation";
import { myAccount, myAdds, myBookmarks, myChambers, myLastSeen, myNotes } from "@/services/urls";
import { signOut, useSession } from "next-auth/react";
import { useBarandazContext } from "@/context/context";
import useLoginModal from "@/hooks/useLoginModal";

const AccountSideBar = () => {
  const {hasLittleSideBar,auth, setAuth, username, setUsername } = useBarandazContext();
  const session = useSession();
  const loginModal = useLoginModal()
  const [items,setItems]=useState([])

  const router=useRouter()


    const unAuthenticatedItems=[
      {
        label:'ورود',
        icon:IoLogInOutline,
        href:() => loginModal.onOpen()
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

    ]


    const authenticatedItems=[
    
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
    const handleMenu = (url) => {
         router.push(url);
     }

    //  useEffect(() => {
    //    setUsername(session?.data?.token?.user?.username);
    //    setAuth(session.status);
    //    console.log(session.status);
    //  }, [session.status]);

  useEffect(() => {
    if (session.status === "authenticated") {
      setItems(authenticatedItems);
    } else {
      setItems(unAuthenticatedItems);
    }
    
  }, [session.status]);
  



  if (!hasLittleSideBar){

  return (    

    <div className="grid grid-cols-1 gap-4">
        { items.map((item,index)=>(
            <div key={index} onClick={item.href} className="hover:bg-slate-100 mb-2 w-full flex justify-center cursor-pointer">   
              <item.icon  size={25} className="text-stone-400 hover:text-stone-500" />
            </div>
          ))}
    </div>)

  }
  return (
    <div>
        { items.map((item,index)=>(
            <div key={index} className="hover:bg-slate-100 flex flex-row gap-2 items-center justify-start mb-2 cursor-pointer">
              <item.icon size={25} className="text-stone-400" />
              <MenuItem  label={item.label} onClick={item.href}/>
              
            </div>
          ))}
    </div>
  )
}

export default AccountSideBar

