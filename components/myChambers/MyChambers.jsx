import Image from 'next/image'
import React from 'react'
import Button from '../Button'
import {ImLocation2} from 'react-icons/im'
import ArrowTiltle from '../ArrowTiltle'
import { MdProductionQuantityLimits } from 'react-icons/md'
import {RiShieldStarLine} from 'react-icons/ri'

const MyChambers = ({data}) => {
  return (
    <div className='grid grid-cols-1 gap-5 '>
        <div><Button small label="ثبت حجره ی جدید"/></div>
        {
        data.map((chamber,index)=>(
            <div key={index} className='flex flex-col md:flex-row justify-between gap-6 border-b border-neutral-300 m-10 pb-3'>
                
                    <div className='flex flex-col md:flex-row gap-4'>
    
                    <div>
                        <Image className='rounded-full' width={100} height={100} src='/logoC.png'/>
                    </div>
                    <div className='flex flex-col border-r'>

    
                    <div className='pr-2'>
                        <div className='flex flex-row gap-2 items-center'>
                            <RiShieldStarLine className='text-green-500 ' size={25}/>
                            <p className='cursor-pointer col-span-3 text-lg border-l pl-3 hover:text-neutral-500'>{chamber.chamber_name}</p>
                            <div className='flex flex-row  items-center text-sm text-neutral-400 cursor-pointer'>
                            <MdProductionQuantityLimits size={15}/>
                            <p>{chamber.chamber_product}</p>
                            </div>
                        </div>
                        
                        <p className='col-span-3 text-sm text-neutral-400 pt-3'>{chamber.owner_name}</p>
                        <div className='flex flex-row gap-3 pt-4'>
                        <p className='col-span-3 text-sm text-neutral-400'>{chamber.adss}</p>
                        <p className='text-neutral-400 text-sm'>آگهی</p>
                        
                        </div>
                    </div>

                    </div>
    
                </div>
                <div className='flex items-end cursor-pointer text-neutral-400 hover:text-neutral-500'>
                    <ImLocation2 className='' size={20}/>
                    <div className='text-sm '>{chamber.city_name}</div>
                </div>
                <div className='flex flex-col justify-between items-end'> 
                <ArrowTiltle left title="مدیریت حجره"/>
                <Button small label="افزودن آگهی"/>
                </div>

            </div>
        ))
        }

    </div>
  )
}

export default MyChambers