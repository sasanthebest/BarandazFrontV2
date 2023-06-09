'use client'
import React, { useEffect, useState } from 'react'

const CheckBox = ({label,register,id,sId,set,specifc,helpText}) => {
  const [value, setValue] = useState(false)
  useEffect(() => {
    if (specifc){

      const data={
      adspecification: sId,
      value: value
      }
      set(id,data)
  }
  else{

      set(id,value)
  }
  }, [value])
  
  return (
    <div>
      <label className="inline-flex gap-2 items-center">
       { specifc 
        ?<input id={id} type="checkbox" onChange={()=>setValue(!value)} className="w-5 h-5 text-rose-600 bg-rose-500" />
        :<input id={id} type="checkbox" {...register(id)} className="w-5 h-5 text-rose-600 bg-rose-500" />}
        <span className="ml-2 text-sm">{label}</span>
      </label>
      {helpText && <p className='text-xs text-stone-500 pb-2'>{helpText}</p>}
    </div>

  )
}

export default CheckBox
