


import React from 'react'
import { BiRectangle } from 'react-icons/bi'

const MyAdsDelete = () => {
    const items=[
        {title:'در بار انداز به فروش رسید'},
        {title:'از راه دیگری به فروش رسید'},
        {title:'از فروش منصرف شدم'},
        {title:'به دلایل دیگر'},
    ]
  return (
    <div className='flex flex-row justify-center'>
        <div className='border rounded shadow-md'>
            <div className='p-5 grid grid-cols-1'>
                <p>لطفا علت حذف آگهی را مشخص کنید</p>
                {items.map(item=>(
                    <div className='flex flex-row gap-2 items-center justify-start'>
                        <BiRectangle/>
                        <p>{item.title}</p>
                    </div>
                ))}

                
            </div>
        </div>
    </div>
  )
}

export default MyAdsDelete