'use client'

import React, { useEffect, useState } from 'react'


const Fields = ({info,label,set,type,errors,register,onChange}) => {
  const {id,title,help_text}=info
  const [value,setValue]=useState(null)

  useEffect(() => {
    const data={
      adspecification: id,
      value: value
      }
      set(title,data)
  }, [value])
  


  return (
    <div className='w-full'>
        <p>{title}</p>
        {help_text && <p className='text-xs text-stone-400 pt-1'>{help_text}</p>}
        <div className="w-full relative">
      {/* {formatPrice && (
        <BiDollar
          size={24}
          className="text-neutral-700 absolute topp-5 lsef-2"
        />
      )} */}

      <input
        id={id}
        onChange={(e)=>setValue(e.target.value)} 
        placeholder=""
        type={type}
        className={`
            peer 
            w-full
            
            pt-3
            mt-4
            font-light
            bg-white
            border
            rounded
            outline-rose-500
            transition
            disabled:opacity-70
            disabled:cursor-not-allowed

            ${errors[id] ? "border-rose-500" : "border-neutral-300"}
            ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}
        `}
      />
      <label
        className={`
            absolute
            text-sm
            duration-150
            transform
            -translate-y-3
            top-5
            z-10
            origin-[0]

            peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0
            peer-focus:scale-75
            peer-focus:-translate-y-4
            ${errors[id] ? "text-rose-500" : "text-zinc-400"}
      `}
      >
        {label}
      </label>
      <p className="text-rose-500">{errors[id]?.message}</p>

    </div>


    </div>
  )
}

export default Fields