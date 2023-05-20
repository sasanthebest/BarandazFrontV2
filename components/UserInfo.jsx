

import React from 'react'
import { FiEdit } from 'react-icons/fi'
import {MdOutlineEditNote} from 'react-icons/md'
const UserInfo = ({userInfo}) => {
  return (
    <div className='grid grid-cols-2 border border-neutral-200 m-5 rounded-lg'>
        <div className='grid grid-cols-2 justify-items-start place-items-center'>
            <div className='m-4'>
                <p className='text-neutral-400 '>نام و نام خانوادگی:</p>
                <p className='flex flex-row gap-1 pt-3'>{userInfo.first_name?userInfo.first_name:"-"} {userInfo?.last_name?userInfo.last_name:"-"}</p>
            </div>
            <div className='pr-20 col-span-1'>
                <MdOutlineEditNote className='cursor-pointer text-neutral-500' size={35}/>
            </div>
        </div>


        <div className='grid grid-cols-2 justify-items-start place-items-center'>
            <div className='m-4'>
                <p className='text-neutral-400 '>شماره موبایل:</p>
                <p className='gap-1 pt-3'>{userInfo.username}</p>
            </div>
            <div className='pr-20 col-span-1'>
                <MdOutlineEditNote className='cursor-pointer text-neutral-500' size={35}/>
            </div>
        </div>

        <div className='grid grid-cols-2 justify-items-start place-items-center'>
            <div className='m-4'>
                <p className='text-neutral-400 '>سطح کاربری:</p>
                <p className='gap-1 pt-3'>{userInfo.level}</p>
            </div>
            <div className='pr-20 col-span-1'>
                <MdOutlineEditNote className='cursor-pointer text-neutral-500' size={35}/>
            </div>
        </div>
    
</div>
  )
}

export default UserInfo