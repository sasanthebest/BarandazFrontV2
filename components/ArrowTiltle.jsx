

import React from 'react'
import { FaAngleLeft } from 'react-icons/fa'

const ArrowTiltle = ({onClick,title}) => {
  return (
    <div className='flex flex-row items-center gap-3 cursor-pointer hover:text-rose-400 text-neutral-500'>
        <div className='text-sm'>{title}</div>
        <FaAngleLeft className=''/> 
    </div>
  )
}

export default ArrowTiltle