"use client"

import { AiOutlineMenu } from "react-icons/ai";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import useLoginModal from "@/hooks/useLoginModal";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const UserMenu = ({currentUser}) => {
  console.log("currentUser:",currentUser)

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
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={onRent}
          className="
            hidden
            md:block
            text-sm
            font-normal
            py-3
            px-4
            rounded-full
            bg-rose-400
            text-white
            hover:bg-neutral-100
            hover:text-neutral-600
            transition
            cursor-pointer
          "
        >
          ثبت آگهی
        </div>
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
          gap-3
          rounded-full
          cursor-pointer
          hover:shadow-md
          transition
        "
        >
          <AiOutlineMenu />
        </div>
      </div>

      {isOpen && (
        <div
          className="
          absolute
          rounded-xl
          shadow-md
          w-[60vw]
          md:w-3/4
          bg-white
          overflow-hidden
          left-0
          top-12
          text-sm
          "
        >
          <div className="flex flex-col cursor-pointer">
            {currentUser ?(
              <>
              <p>{currentUser.username}</p>
              <MenuItem label="آگهی های من" onClick={()=>router.push('/trips')} />
              <MenuItem label="حجره های من" onClick={()=>router.push('/myListings')} />
              <MenuItem label="نشان شده ها" onClick={()=>router.push('/myreserves')} />
              <MenuItem label="بازدیدهای اخیر" onClick={()=>router.push('/favorites')} />
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