'use client'
import { useBarandazContext } from '@/context/context'
import useContactInfoModal from '@/hooks/useInfoModal'
import Image from 'next/image'
import React, { useState } from 'react'

import { FaLocationArrow, FaSkyatlas } from 'react-icons/fa'
import { HiOutlineShare } from 'react-icons/hi2'
import ArrowTiltle from '../../../frontend/components/util/ArrowTiltle'

import TextInput from '../../../frontend/components/util/TextInput'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { baseURL, deleteBookmark, newBookmark } from '@/services/urls'
import { toast } from "react-hot-toast"
import { useRouter } from 'next/navigation'
import { RWebShare } from 'react-web-share'

// :{adspecification:{title},value}
const AdsDetail = ({singleAd,bookmarkId}) => {
    // console.log('level3',bookmarkId)
    const {register,formState:{errors}}=useForm()
    const router=useRouter()
    
    const {id,title,category,images,description,price,code,
        is_exchangeable,is_urgent,city_name,category_name,created_at,show_phone,adspecificvalue}=singleAd

    const {allCategories}=useBarandazContext()
    const parenCategory=allCategories.filter((ca)=>ca.id===category.parent)[0]
    const grandPaCategory=allCategories.filter((ca)=>ca.id===parenCategory.parent)[0]
    const [mainImgSrc,setMainImgSrc]=useState(images[0]?.image)


    const info=useContactInfoModal()

    const onBookmark=()=>{
        const data={
            'content_type':id
        }
        const config={
            headers:{

                'Authorization':'jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzMjEyNjMzLCJqdGkiOiI1YzU4ODQ2ZjU0NjU0OWViYTVhNTJiZWQ4YWVmOTZiYyIsInVzZXJfaWQiOjF9.BnJouOMEVZ3RxXLCOgVk0OjwTa3Zil5k-6d7uOX7hkI'
            }

        }

        axios.post(`${baseURL+newBookmark}`,data,config)
        .then((res)=>{
            toast.success('نشان شد')
        })
        .catch(err=>{
            axios.delete(`${baseURL+deleteBookmark(bookmarkId)}`,config)
            .then((res)=>{
                toast.success('آگهی از لیست نشان شده ها خارج شد')
            })
            .catch((err)=>{
                console.log(err)
                
                toast.error('خطای سرور')})
            .finally(()=>router.refresh())

        })
        .finally(()=>router.refresh()
        )
    }

  return (
    <>

      <div className='grid grid-cols-1 md:grid-cols-2 w-full h-screen mt-6'>
        
        {/* images sections */} 

        { images.length!=0 &&  
            (<div className='
            flex 
            flex-col 
            gap-4 
            p-2 
            lg:grid 
            lg:grid-cols-5'>
                <div className='relative w-full h-72 lg:col-span-4'>
                    <div className=''>
                        <Image alt={title} className='rounded' src={baseURL+mainImgSrc} fill={true}/>
                    </div>
                </div>

                <div  className='
                    flex 
                    flex-row 
                    items-center
                    justify-center
                    gap-1
                    lg:flex-col
                    lg:col-span-1
                    lg:justify-start
                    lg:overflow-y-auto


    
                    '>
                        {images.map((img,index)=>(
                            <div className='relative w-20 h-20 '>
                            <Image onMouseOver={()=>setMainImgSrc(img.image)}  alt={title}  key={index} className='rounded hover:opacity-60' src={baseURL + img.image} fill={true}/>
                        </div>
                        ))}
                    </div>
                </div>

        )}

 
        {/* details */}
        <div className='p-2 bg-white w-full'>
            <div className='flex flex-row items-center justify-between'>
                <div className='flex flex-row items-center gap-1'>
                    {grandPaCategory && <ArrowTiltle left title={grandPaCategory.title}/>}
                    {parenCategory && <ArrowTiltle left title={parenCategory.title}/>}
                    {category_name}

                    
                </div>
            </div>
                    <div className='flex flex-row gap-4 items-center justify-end mt-2'>
                        <FaSkyatlas 
                        onClick={onBookmark} 
                        className={`${bookmarkId===undefined?'text-stone-500': 'text-rose-500'} hover:text-stone-700 cursor-pointer`} 
                        size={20}/>
                        <RWebShare
                            data={{
                            text: "barandaz",
                            url: `http://localhost:3000/ads/${code}`,
                            title: "barandaz",
                            }}
                            onClick={() => console.log("shared successfully!")}
                        >
                            <HiOutlineShare className='text-stone-500 hover:text-stone-700 cursor-pointer' size={20}/>
                        </RWebShare>
                    </div>
            <div className='mt-4'>
                <p className='text-xl'>{title}</p>
            </div>
            <div className='flex flex-row justify-between'>
                <div className='relative mt-2 flex flex-row gap-2 items-center justify-start'>
                    
                    <FaLocationArrow className='text-sm text-neutral-500'/>
                    <p className='text-md text-neutral-600 '>ده دقیقه پیش در {city_name}</p>
                    <span className='text-rose-500 pr-2'>{is_urgent && 'فوری'}</span>
                </div>
            </div >
            <p className='text-md text-stone-600 mt-3'>{price!=null?`قیمت: ${price}`:"توافقی"}</p>
            {/* specifics */}
 
                
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-5 mb-5'>
                {adspecificvalue.map((item,index)=>(
                    <div key={index}>
                        <div className='flex flex-row items-center border-b justify-between mr-10 ml-10 mt-4'>
                            <p className='text-stone-500'>{item.adspecification.title}</p>
                            <p>{item.value}</p>
                        </div>
                    </div>))}
            </div>


            <div>

            </div>

            <div className='mt-6'>
                <p>توضیحات</p>
                <div className='text-stone-500 pr-5 mt-2 text-justify'>{description}</div>
            </div>
            <div className='mt-6'>

            <TextInput id='note' register={register} errors={errors} placeholder="میتوانید برروی آگهی یادداشت بگذارید..." />
            </div>
        </div>

        {/* footer */}
 

            {/* 
        <div className='fixed bottom-0 bg-white shadow-inner p-2 flex justify-center border w-full'>
        <div onClick={()=>info.onOpen("09184113688")}
            className='  border rounded bg-slate-200 p-2 hover:bg-slate-300 cursor-pointer'>اطلاعات آگهی دهنده
            </div>
        </div>  */}
    </div>
   
    </>
  )
}

export default AdsDetail