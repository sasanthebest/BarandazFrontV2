"use client"

import { VscAccount } from "react-icons/vsc";
import { useCallback, useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import useLoginModal from "@/hooks/useLoginModal";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { baseURL, userInfo } from "../services/urls";
import axios  from 'axios';

const UserMenu = ({ currentUser, userInfo1 }) => {
  const [auth, setAuth] = useState("")
     const [username, setUsername] = useState("");

  const session = useSession();

  useEffect(() => {
    async function fetchUser() {
      const jwt=session?.data?.user?.access
        const data = axios
          .get(`${baseURL + userInfo}`, {
            headers: {
              Authorization: `jwt ${jwt}`,
            },
          })
          .then((res) => {
            console.log(res.data)
            setUsername(res.data.username)
            return res.data;
            

          })
          .catch((err) => {
            return null;
          });
        return data;
    }
    fetchUser()
    setAuth(session.status)
    console.log("session:", session);
    // console.log("session:",fetchData);

},[session])
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
          className="p-4 md:py-1 md:px-2 boder-[1px] border-neutral-200 flex flex-row justify-center
          items-center gap-1 rounded-full cursor-pointer hover:shadow-md transition text-neutral-400"
        >
          <VscAccount size={20} />
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
          <div className="absolute rounded-xl shadow-md w-full bg-white overflow-hidden left-0 top-12 text-sm z-30">
            <div className="flex flex-col cursor-pointer w-full">
              {auth === "authenticated" ? (
                <>
                  <MenuItem
                    label={username}
                    onClick={() => router.push("/user/myAccount")}
                  />
                  <hr />
                  <MenuItem
                    label="آگهی های من"
                    onClick={() => router.push("/user/myAds")}
                  />
                  <hr />
                  <MenuItem
                    label="حجره های من"
                    onClick={() => router.push("/user/myChambers")}
                  />
                  <hr />
                  <MenuItem
                    label="نشان شده ها"
                    onClick={() => router.push("/user/myBookmarks")}
                  />
                  <hr />
                  <MenuItem
                    label="بازدیدهای اخیر"
                    onClick={() => router.push("/user/myLastSeens")}
                  />
                  <hr />
                  <MenuItem label="خروج" onClick={() => signOut()} />
                </>
              ) : (
                <>
                  <MenuItem label="ورود" onClick={loginModal.onOpen} />
                  {/* <MenuItem label="Sign up" onClick={registerModal.onOpen} /> */}
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserMenu;
