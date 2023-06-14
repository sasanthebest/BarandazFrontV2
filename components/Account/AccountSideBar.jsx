'use client'
import { IoLogOutOutline } from "react-icons/io5";
import { HiCalendarDays, HiUser } from "react-icons/hi2";
import { FaSkyatlas } from "react-icons/fa";
import { GiBattleship, GiFoldedPaper, GiNotebook } from "react-icons/gi";
import { AiOutlineCaretLeft } from 'react-icons/ai';
import React from 'react'
import MenuItem from "../MenuItem";

const AccountSideBar = () => {
    const items=[
        {
          label:`09184113688`,
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
          href:() => handleMenu(myBookmarks)
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



// { items.map((item,index)=>(
//     <div key={index} className="hover:bg-slate-100  p-4 text-center">
//       <item.icon size={20} className="text-stone-400" onClick={item.href} />
//     </div>
//   ))}