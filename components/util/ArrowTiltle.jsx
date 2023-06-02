'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const ArrowTiltle = ({url,title,left}) => {
  const router=useRouter()
  if (left){
  return (
    <div onClick={()=>url && router.push(url)} className='flex flex-row items-center gap-1 cursor-pointer hover:text-rose-400 text-neutral-500'>
        <div className='text-sm'>{title}</div>
        <FaAngleLeft className=''/>
    </div>
  )}
  
  return (
    <div  onClick={()=>url && router.push(url)} className='flex flex-row items-center gap-1 cursor-pointer hover:text-rose-400 text-neutral-500'>
        <FaAngleRight className=''/>
        <div className='text-sm'>{title}</div>
    </div>

  )

}

export default ArrowTiltle