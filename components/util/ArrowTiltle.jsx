'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const ArrowTiltle = ({title,left,onClick}) => {
  const router=useRouter()
  if (left){
  return (
    <div  className='flex flex-row items-center gap-1 cursor-pointer hover:text-rose-400 text-neutral-500'>
        <div onClick={()=>onClick()} className='text-sm'>{title}</div>
        <FaAngleLeft />
    </div>
  )}
  
  return (
    <div   className='flex flex-row items-center gap-1 cursor-pointer hover:text-rose-400 text-neutral-500'>
        <FaAngleRight />
        <div onClick={()=>onClick()} className='text-sm'>{title}</div>
    </div>

  )

}

export default ArrowTiltle