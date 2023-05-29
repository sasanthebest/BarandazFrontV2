

import React from 'react'
import { IoMdPricetags } from 'react-icons/io'
import { HiOutlineDotsVertical } from 'react-icons/hi'

const PriceSelection = () => {
  return (
    <div className='flex flex-col '>
        <div className='flex flex-row gap-2 items-center mb-2'>
            <IoMdPricetags size={15} className='text-sm text-neutral-400'/>
            <p className='text-sm'>قیمت</p>

        </div>
        <div className='flex flex-row items-center justify-between gap-5'>
            <p className='text-xs text-neutral-400'>از قیمت</p>
            <input type='number' className='outline-rose-500 w-40 border border-neutral-200 rounded'/>
        </div>
        <HiOutlineDotsVertical className='text-stone-400'/>

        <div className='flex flex-row items-center justify-between gap-5'>
            <p className='text-xs text-neutral-400'>تا قیمت</p>
            <input type='number' className='outline-rose-500 w-40 border border-neutral-200 rounded'/>
        </div>

    </div>
  )
}

export default PriceSelection