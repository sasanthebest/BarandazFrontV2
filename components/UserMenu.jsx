"use client"

import { VscAccount } from "react-icons/vsc";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import useLoginModal from "@/hooks/useLoginModal";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import {HiUser} from 'react-icons/hi2'
const UserMenu = ({currentUser,userInfo}) => {


  const loginModal = useLoginModal()
  const router=useRouter()
  const [isOpen, setIsOpen] = useState(false);

  const onRent=useCallback(()=>{
    if (!currentUser){
      return loginModal.onOpen()
    }
    rentModal.onOpen()
  },[currentUser,loginModal])

  return (
    <div className="relative ">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="
          p-4
          md:py-1
          md:px-2
          boder-[1px]
          border-neutral-200
          flex
          flex-row
          justify-center
          items-center
          gap-1
          rounded-full
          cursor-pointer
          hover:shadow-md
          transition
          
          text-neutral-400
        "
        >
          <VscAccount size={20} />
          <p className="text-xs">بارانداز من</p>
        </div>
      </div>

      {isOpen && (
        <div
          className="
          absolute
          rounded-xl
          shadow-md
          w-full
          bg-white
          overflow-hidden
          left-0
          top-12
          text-sm
          z-30
          "
        >
          <div className="flex flex-col cursor-pointer w-full">
            {currentUser ?(
              <>
          
              <MenuItem label={userInfo?.username} onClick={()=>router.push('/user/myAccount')}/>
              <hr />
              <MenuItem label="آگهی های من" onClick={()=>router.push('/user/myAds')} />
              <hr />
              <MenuItem label="حجره های من" onClick={()=>router.push('/user/myChambers')} />
              <hr />
              <MenuItem label="نشان شده ها" onClick={()=>router.push('/user/myBookmarks')} />
              <hr />
              <MenuItem label="بازدیدهای اخیر" onClick={()=>router.push('/user/myLastSeens')} />
              <hr />
              <MenuItem label="خروج" onClick={()=>signOut()} />
              </>
            ):
            (<>
              <MenuItem label="ورود" onClick={loginModal.onOpen} />
              {/* <MenuItem label="Sign up" onClick={registerModal.onOpen} /> */}
            </>)}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
