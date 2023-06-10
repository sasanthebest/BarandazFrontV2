



import React from 'react'

const TextInput = ({id,errors,register}) => {
  return (
    <>
    <textarea {...register(id)} className={`outline-rose-500 text-sm p-3 ${errors[id] &&'border-rose-600'} border rounded w-full`} rows={5} placeholder='توضیحات آگهی'></textarea>
    <p className="text-rose-500 text-xs pr-2">{errors[id]?.message}</p>
    </>
  )
}

export default TextInput