'use client'

import React, { useEffect, useState } from 'react'
import { BsPinAngle, BsPinAngleFill } from 'react-icons/bs'
import Button from '../util/Button'
import axios from 'axios'
import { baseURL,requestToPay } from '@/services/urls'
import { headers } from 'next/dist/client/components/headers'
import { toast } from 'react-hot-toast'
import ButtonB from '../util/ButtonB'
const MyAdsPromotions = () => {
    const [pinnedItem, setPinnedItem] = useState([])
    let [totalPrice, setTotalPrice] = useState(0)
    const items=[
        {
            title:"نردبان",
            descriptions:"با این امکان  آگهی شما به مدت یک ماه در صدر تمامی آگهی های بارانداز قرار میگیرد",
            price:50000,
            disabled:false

        },
        {
            title:"فوری",
            descriptions:'آگهی شما به مدت یک هفته با برچسب فوری نمایش داده شده و علاوه بر آن در فیلتر فوری نیز ظاهر میگردد',
            price:20000,
            disabled:false

        },
        {
            title:"فوری و نردبان",
            descriptions:"این امکان آگهی شمارا همزمان فوری و نردبان میکند",
            price:55000,
            disabled:false

        },
        {
            title:"تمدید",
            descriptions:"با این امکان آگهی شما یک ماه دیگر در لیست آگهی های بارانداز قرار خواهد گرفت",
            price:15000,
            disabled:true

        },
        {
            title:"تمدید،فوری و نردبان",
            descriptions:"با این امکان آگهی شما همزمان فوری و نردبان شده همچنین به مدت 45 روز دیگر در لیست آگهی های بارانداز قرار خواهد گرفت ",
            price:45000,
            disabled:true

        }
    ] 
    const onOrder=()=>{
        const data={
            amount: 20000,
            advertisment: 100,
            description: "بابت فوری ونردبان"

        }
        const config={
            headers:{
            'Authorization':'jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzMjEyNjMzLCJqdGkiOiI1YzU4ODQ2ZjU0NjU0OWViYTVhNTJiZWQ4YWVmOTZiYyIsInVzZXJfaWQiOjF9.BnJouOMEVZ3RxXLCOgVk0OjwTa3Zil5k-6d7uOX7hkI'
        }}
        
        // console.log(`${baseURL+requestToPay}`)
        axios.post(`${baseURL+requestToPay}`,data,config)
        .then(res=>{
            axios.get(res.data)
            .then(res=>{
                toast.success('درحال انقال به درگاه پرداخت')

            })
            .catch(err=>{
                toast.error('ارتباط با درگاه پرداخت برقرار نشد.بعدا تلاش کنید.')
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const icon=(item,index)=>{
        if (item.disabled){
            return (
                <p className='text-neutral-400'>غیر فعال</p>
            )

            
        }
        return (
            
            pinnedItem.filter(item=>item===index)[0]===index
            ? <BsPinAngleFill  onClick={()=>{ 
                if (!item.disabled){
                    setPinnedItem(pinnedItem.filter(item=>item!=index))
                    setTotalPrice(totalPrice-=item.price)
                }
            }} size={25} className={`${!item.disabled && 'cursor-pointer'} text-sky-500`}/>
            :<BsPinAngle onClick={()=>{
                if (!item.disabled){
                    setPinnedItem([...pinnedItem,index])
                    setTotalPrice(totalPrice+=item.price)
                }
            }} size={25} className={`${!item.disabled && 'cursor-pointer'} text-stone-500`}/>

        )


        
    }

  return (
    <div className="w-full mb-3">
        <div className='w-full md:w-2/4 h-28 border  shadow-sky-700 rounded shadow-md mb-4'>
            <div className='grid grid-col-1 gap-3 p-3 h-full items-center'>
                <div className='flex flex-row items-center justify-around'>
                    {totalPrice!=0 
                    ? (
                        <>
                            <p className='text-zinc-500'>مبلغ قابل پرداخت</p>
                            <p className='text-md text-sky-500'>{totalPrice} تومان</p>
                        </>)
                    :(
                        <p className='text-md text-stone-400 text-center'>با انتخاب بسته های فوری و نردبان آگهی شما با بازخورد بیشتری روبه رو خواهد شد</p>
                    )
                    }
                </div>
            <div className='text-center'>

                <ButtonB label='پرداخت'/>
            </div>

            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            {
                items.map((item,index)=>(
                    <div key={index} className={`grid grid-cols-1 `}>
                        <div className={`w-full p-2 border ${item.disabled ? 'shadow-rose-700':'shadow-sky-700'} ${item.disabled && 'opacity-60'} rounded shadow-md`}>
                                <div className='flex flex-col gap-2 md:flex-row w-full justify-between items-center p-2'>
                                    <p className='text-lg text-stone-700'>{item.title}</p>
                                    <p className='text-sky-800 text-md'>{item.price} تومان</p>
                                </div>
                            <p className='text-justify text-md text-stone-500'>{item.descriptions}</p>
                            <div className='w-full flex  justify-center md:justify-end  p-2'>{icon(item,index)}</div>
                        </div>
                </div>
                ))
            }
        </div> 

            

        </div>
  )
}

export default MyAdsPromotions