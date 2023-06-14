'use client'

import React, { useState } from 'react'
import {  AiTwotoneEdit } from 'react-icons/ai'
import {HiViewGridAdd} from 'react-icons/hi'
import {RiSendToBack} from 'react-icons/ri'
import { useRouter} from 'next/navigation'
import { IoMdTrash } from 'react-icons/io'
const MyAdsManages
 = ({data,children,mobile}) => {
const {id,title,category,images,description,price,code,
        is_exchangeable,is_urgent,city_name,category_name,created_at,show_phone,adspecificvalue}=data    
    const router=useRouter()
    const [state,setState]=useState(0)
    const baseUrl=`/user/myAds/${code}`
    const items=[
        {
            label:'پیش نمایش',
            icon:HiViewGridAdd,
            url:`${baseUrl}/review`
        },
        {
            label:'ویرایش',
            icon:AiTwotoneEdit,
            url:`${baseUrl}/edit`
        },
        {
            label:'فوری و نردبان',
            icon:RiSendToBack,
            url:`${baseUrl}/rise`
        },
        {
            label:'حذف آگهی',
            icon:IoMdTrash,
            url:`${baseUrl}/delete`
        }
    ]
    // <div  className='col-span-1 flex flex-row justify-center border-b pb-2  gap-4 mb-7'>
    const content=()=>{
        // if (!mobile){
        //     return (

        //         <div>hello</div>
        //     )
        // }

        return (
            <div className='flex flex-row justify-around  border-b pb-2  mt-5'>
            { 
                items.map((i,index)=>(
                        <div onClick={()=>{setState(index)
                                router.push(i.url)}} 
                        key={index} className='flex flex-row gap-1 items-center cursor-pointer'>
                                <div className='flex flex-row items-center gap-1'>
                                <div className={`rounded-full ${state===index?'bg-stone-700':'bg-stone-400'} p-2`}>
                                    <i.icon className='text-white'/>
                            </div>
                                {/* {index!=items.length-1 && <AiOutlineMinus className='text-stone-400'/>} */}
                                    </div>
                            <p className={`${state===index?'text-stone-700':'text-stone-400'}`}>{i.label}</p>
                        </div>
              
                ))}
            </div>
    
        )




    }


  return (
        <div className="w-full ">
            <div>
                <p className='text-lg text-stone-600 pr-2'>{title}</p>
            </div>
                {content()}
            <div className={` mt-7 ${mobile ? "" : "mobmax:hidden"}`}>{children}</div>
        </div>
    
        
  )
}

export default MyAdsManages
