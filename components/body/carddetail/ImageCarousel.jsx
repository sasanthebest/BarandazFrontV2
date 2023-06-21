'use client'


import { baseURL } from '@/services/urls'
import Image from 'next/image'
import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { useSwipeable } from 'react-swipeable'

const ImageCarousel = ({images}) => {
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
  
  return (
    <div {...handlers} className='overflow-hidden relative'>
        <div 
        style={{transform:`translateX(-${currenIndex*100}%)`}}
        className='flex transition-transform ease-out duration-700'>
            {images.map((img,index)=>(
                <Image key={index} src={baseURL+img.image} width={350} height={350}/>


            ))}
        </div>
        <div className='absolute inset-0 flex items-center justify-between p-4'>
                <button onClick={prev} className='p-1 rounded-full shadow bg-white/80 text-gray-700 hover:bg-white'>
                    <BsChevronCompactRight/>
                </button>
                <button onClick={prev} className='p-1 rounded-full shadow bg-white/80 text-gray-700 hover:bg-white'>
                    <BsChevronCompactLeft/>
                </button>
        </div>
    </div>
  )
}

export default ImageCarousel