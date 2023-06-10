"use client"

import React, { useCallback, useEffect } from 'react'
import Heading from '../Heading'
import { FaAngleLeft } from 'react-icons/fa'
import { CgTrack } from 'react-icons/cg'
import { useRouter } from 'next/navigation'
import ArrowTiltle from '../util/ArrowTiltle'
import { useBarandazContext } from '@/context/context'

const SelectCategory = ({currentParentCategory,currentCategory}) => {
  // console.log(currentParentCategory.slug)
  const router=useRouter()
  const {allCategories}=useBarandazContext()

  return (
      <div className='flex flex-col w-full items-center p-2'>
        <div>
        <Heading title="انتخاب دسته بندی" subtitle="دسته بندی مورد نظر خود را انتخاب کنید." center/>
        {/* {currentCategory?.parent!=null && <ArrowTiltle url={`/newAd/${currentParentCategory.slug}`}  title={`${currentParentCategory?.title}`}/>} */}
        </div>
        {allCategories?.filter(ca=>currentCategory? ca.parent==currentCategory.id:ca.parent==null).map((ca,index)=>(

        <div key={index} onClick={()=>router.push(`newAd/${ca.slug}`)} className='cursor-pointer text-slate-500 hover:text-neutral-600 gap-60 mt-6 flex flex-row  items-center justify-between '>
          <div className='flex flex-row  gap-1 items-center'>
              <CgTrack/>
              <p>{ca.title}</p>
          </div>
          <FaAngleLeft/>
        </div>
          ))}
        </div>  

  )
}

export default SelectCategory