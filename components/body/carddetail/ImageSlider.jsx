
'use client'

import { baseURL } from '@/services/urls'
import Image from 'next/image'
import React, { useState } from 'react'
import { BsChevronCompactLeft,BsChevronCompactRight } from 'react-icons/bs'
import { RxDot, RxDotFilled } from 'react-icons/rx'
import { useSwipeable } from 'react-swipeable'
const ImageSlider = ({images}) => {

    const [currenIndex,setCurrentIndex]=useState(0)
    const prev=()=>{
        setCurrentIndex(currenIndex=>(
            currenIndex===0 ?images.length-1 :currenIndex-1 ))
    }
    const next=()=>{
        setCurrentIndex(currenIndex=>(currenIndex===images.length-1
            ?0
            :currenIndex+1 ))
    }
      //swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => prev(),
    onSwipedRight: () => next(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
//   
  return (
    <div {...handlers}  className='w-full h-72 md:h-96 relative '>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-3 w-full h-full' >
            {/* main image */}
            <div className='col-span-4  p-2 relative group'>
                    <div
                        style={{backgroundImage:`url(${baseURL+images[currenIndex].image})`}}  
                        className='w-full h-full rounded bg-center bg-cover duration-500'>
                    </div>

                    <div className='hidden group-hover:flex absolute inset-0 items-center justify-between p-4'>
                        <div onClick={next} className='-translate-x-0 translat-y-[-50%]  text-2xl rounded-full p-2 bg-black/40 hover:bg-black/50 cursor-pointer text-white'>
                            <BsChevronCompactRight size={20}/>
                        </div>
                        <div onClick={prev} className='-translate-x-0 translat-y-[-50%]  text-2xl rounded-full p-2 bg-black/40 hover:bg-black/50 cursor-pointer text-white'>
                            <BsChevronCompactLeft size={20}/>
                        </div>
                    </div>
         
                    <div className='flex top-4 justify-center py-2 '>
                        {images.map((item,index)=>(
                        <div key={index}>
                            {index===currenIndex?<RxDotFilled/>:<RxDot/>}
                        </div> 
                        ))}
                    </div>
            </div>



            
                <div className='
                hidden 
                md:flex 
                md:flex-col 
                md:gap-2 
                md:items-center 
                md:justify-center 
                md:col-span-1 
                md:overflow-y-auto'>
    
                    {images.map((img,index)=>(
                        <div  key={index} className='relative w-20 h-20 pt-4 md:pt-0'>
                            <Image onMouseOver={()=>setCurrentIndex(index)}  alt='img'  className='rounded hover:opacity-60' src={baseURL + img.image} fill={true}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>

  )
}

export default ImageSlider