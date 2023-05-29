'use client'
import React, { useState } from 'react'
import { CgToggleOff, CgToggleOn } from 'react-icons/cg'

const Toggle = ({label}) => {
    const [isOn, setIsOn] = useState(false)
  return (
    <div className='flex flex-row justify-between'>
        <p onClick={()=>setIsOn(!isOn)} className='text-neutral-500 cursor-pointer text-sm'>{label}</p>
        {isOn
        ? <CgToggleOn onClick={()=>setIsOn(!isOn)} className='text-stone-400 cursor-pointer text-rose-400' size={25} />
        : <CgToggleOff onClick={()=>setIsOn(!isOn)} className='text-stone-400 cursor-pointer' size={25} />}
        
    </div>
  )
}

export default Toggle