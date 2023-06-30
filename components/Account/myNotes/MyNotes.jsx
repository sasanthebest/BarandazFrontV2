

import React from 'react'
import { IoMdTrash } from 'react-icons/io'
const MyNotes = () => {
  return (
    <div className='grid grid-cols-1 nav:grid-cols-2 md:grid-cols-3'>
      <div className='border rounded border-zinc-400 cursor-pointer p-2 grid grid-cols-1 gap-2'>
        <p className='text-md text-stone-500'>عنوان</p>
        <p className='text-sm text-stone-400'>تاریخ</p>
        <p className='grid text-md text-stone-600'>fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</p>
        <div className='flex justify-end'>
          <IoMdTrash className='cursor-pointer'/>
        </div>
      </div>
    </div>
  )
}

export default MyNotes