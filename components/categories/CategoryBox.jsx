'use client'


import { useRouter } from 'next/navigation'
import React from 'react'

const CategoryBox = ({title,icon:Icon,slug}) => {
  const router=useRouter()
  return (
    <div className='flex flex-col gap-1 items-center cursor-pointer'>
        <div onClick={()=>router.push(`/category/${slug}`)} className='hover:text-neutral-400 flex flex-row gap-1 items-center text-sm'>
            <Icon className='text-stone-500' size={20}/>
            {title}
        </div>
    </div>
  )
}

export default CategoryBox