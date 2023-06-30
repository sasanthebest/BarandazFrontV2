'use client'

import { useBarandazContext } from '@/context/context'
import useCityModal from '@/hooks/useCityModal'

import React from 'react'
import { MdLocationOn } from 'react-icons/md'
import {TiFilter} from 'react-icons/ti'

const FilterBar = () => {
    const cityModal=useCityModal()
    const {filteredCities}=useBarandazContext()
    const items=[
        {
            label:'سایر فیلتر ها',
            onClick:()=>console.log('filter modal'),
            Icon:TiFilter
        },
        {
            label:filteredCities>0? `${filteredCities} شهر` : 'شهرها' ,
            onClick:()=>cityModal.onOpen(),
            Icon:MdLocationOn
        },
    ]
  return (
    <div className='
    w-full 
    fixed 
    bg-white 
    shadow-md 
    z-50 
    shadow-sky-300 
    p-2
    flex 
    flex-row 
    gap-2 
    items-center 
    nav:hidden
    overflow-x-auto
    '>
        {items.map((item,index)=>(
            <div key={index} onClick={item.onClick} className='flex items-center gap-1 border-none outline-none rounded bg-zinc-100 p-1 py-2'>
                <item.Icon className='text-stone-500' /> 
                <p className='text-stone-600 text-sm'>{item.label}</p>
            </div>

        ))}
 

    </div>
  )
}

export default FilterBar