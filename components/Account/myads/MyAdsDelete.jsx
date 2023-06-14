'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import SimpleCheckBox from './SimpleCheckBox'


const MyAdsDelete = () => {
    const {register}=useForm()
    const [checked, setChecked] = useState(-1)
    const items=[
        {title:'در بار انداز به فروش رسید'},
        {title:'از راه دیگری به فروش رسید'},
        {title:'از فروش منصرف شدم'},
        {title:'به دلایل دیگر'},
    ]
  return (
    <div className='flex flex-row justify-center'>
        <div className='border rounded shadow-md shadow-sky-400'>
            <div className='p-10 grid grid-cols-1 gap-5'>
                <p>لطفا علت حذف آگهی را مشخص کنید</p>
                {items.map((item,index)=>(
                    <div onClick={()=>setChecked(index)} key={index}  className=' flex flex-row gap-2 items-center justify-start'>
                        <SimpleCheckBox label={item.title} register={register} id='options' checked={checked===index}  />
                    </div>
                ))}

                
            </div>
        </div>
    </div>
  )
}

export default MyAdsDelete