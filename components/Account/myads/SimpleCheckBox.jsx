

import React from 'react'

const SimpleCheckBox = ({label,register,id,checked}) => {
  return (
    <div>
    <label className="inline-flex gap-2 items-center">
        <input checked={checked}  id={id} type="checkbox" {...register(id)} className="w-5 h-5" />
        <span className="ml-2 text-sm">{label}</span>
    </label>
  </div>
  )
}

export default SimpleCheckBox