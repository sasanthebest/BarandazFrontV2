'use client'


import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import {MdFileCopy} from 'react-icons/md'
import Chart from './Chart';
import moment from 'jalali-moment';

const MyAdsReview = ({data}) => {
    const [isCopied,setIsCopied]=useState(false)
    const {title,price,category_name,city_name,adspecificvalue,description,code,views}=data
    const [chartData,setChartData]=useState([])
    
    const getTotalViews=()=>{
        let total=0
        views.forEach(element => {
            total+=element.views
            
        });
        return total
    }


    const copy=()=>{
        navigator.clipboard.writeText(`ads/${code}`)
        setIsCopied(true)
    }


    useEffect(() => {

        if (views.length<7){
            const fakeData=[...views]
            for (let i = 1; i < 8-views.length; i++) {
                const jalali=moment(views.slice(-1)['date_viewed']).add(i,'day').format('jMM-jDD')
                fakeData.push({date_viewed:jalali,views:0})
            }
            console.log('this:',fakeData)
            setChartData(fakeData)
            

        }

        if (views.length===0){
            const fakeData=[]
            for (let i = 0; i < 7; i++) {
                const jalali=moment().add(i,'day').format('jMM/jDD')
               fakeData.push({date_viewed:jalali,views:0})
            }
            setChartData(fakeData)
        }
        else{
            setChartData([...views.slice(0,7)])
        }

    }, [])
    console.log(chartData)
  return (
    <div className='w-full'>
        <div className='grid grid-cols-1 md:grid-cols-2 h-full w-full'>
            <div className=''>

     
                <div className='flex flex-row justify-between items-center m-1'>
                    <p className='text-xl text-neutral-800 '>{title}</p>
                    {/* <p className='p-2 pr-4 pl-4 text-stone-500 cursor-pointer border border-stone-400 rounded hover:bg-stone-100 hover:text-stone-600'>{category_name}</p>
                     */}
                     <div>
                        <a href="#_" class="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-stone-500 active:shadow-none shadow-lg bg-gradient-to-tr from-stone-500 to-stone-400 border-stone-500 text-white">
                            <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                            <span class="relative">{category_name}</span>
                        </a>
                     </div>
                </div>
                    <div className='relative flex flex-col gap-2 p-2'>
                        <p className='text-md text-neutral-500'>سه روز پیش در {city_name}</p>
                        <p className='text-md text-neutral-500'>{price!=null?`قیمت: ${price}`:"توافقی"}</p>
                        <div className='flex flex-row items-center gap-1'>
                            <span className='text-md text-neutral-500'>لینک آگهی:</span>
                            <Link className='text-md text-stone-400 hover:text-stone-600' href={`ads/${code}`} prefetch={false}>{`ads/${code}`}</Link>
                            {isCopied && <div className='bg-stone-800 text-white p-2 text-sm shadow-sm rounded absolute left-28 bottom-9'>کپی شد</div>}
                            <MdFileCopy onClick={copy} size={23} className='text-md text-stone-400 cursor-pointer hover:text-stone-500'/>

                        </div>
                    </div> 
       
                <div className='grid grid-cols-1  gap-2 mt-5 mb-5'>
                {adspecificvalue.map((item,index)=>(
                    <div key={index}>
                        <div className='flex flex-row items-center border-b justify-between mr-10 ml-10 mt-4'>
                            <p className='text-stone-500'>{item.adspecification.title}</p>
                            <p>{item.value}</p>
                        </div>
                    </div>))}
            </div>
            <div className='mt-6'>
                <p>توضیحات</p>
                <div className='text-stone-500 pr-5 mt-2 text-justify p-3'>{description}</div>
            </div>
            </div>
          
                <div className='grid grid-cols-1 gap-3 items-center justify-center w-full h-96  p-3 text-center  border rounded bg-white shadow-md'>
                    <div className='flex flex-row items-center justify-between'>
                        <p className='text-start text-zinc-600 text-xl'>آمار بازدید روزانه</p>
                        <div className='flex flex-row gap-2 items-center '>
                            <p className='text-sm text-stone-600'>مجموع بازدید:</p>
                            <p>{getTotalViews()}</p>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <Chart data={chartData} lineKey="views" XAxisKey="date_viewed"/>
                    </div>
                </div>
   
        </div>

    </div>
  )
}

export default MyAdsReview