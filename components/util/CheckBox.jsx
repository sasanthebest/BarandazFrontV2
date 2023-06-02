
import React from 'react'

const CheckBox = ({label,register,id}) => {
  return (
    <div>
      <label className="inline-flex gap-2 items-center">
        <input id={id} type="checkbox" {...register(id)} className="w-5 h-5 text-rose-600 bg-rose-500" />
        <span className="ml-2 text-sm">{label}</span>
      </label>
    </div>

  )
}

export default CheckBox
