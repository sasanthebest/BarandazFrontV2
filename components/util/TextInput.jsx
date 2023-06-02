



import React from 'react'

const TextInput = ({register}) => {
  return (
    <textarea {...register('descriptions')} className='outline-rose-500 text-sm p-3 border rounded w-full' rows={5} placeholder='توضیحات آگهی'></textarea>
  )
}

export default TextInput