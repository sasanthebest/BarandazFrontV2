'use client'

import React, { useEffect, useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { RiSearchLine } from 'react-icons/ri'
import {BsCheck2All} from 'react-icons/bs'

const DropDown = ({cities,id,set}) => {
    const [isOpen,setIsOpen]=useState(false)
    const [selected, setSelected] = useState(cities[0])
    const [searched,setSearched]=useState('')
    const [citiesList,setCitiesList]=useState(cities)
    

    const search=(e) => {   
        setCitiesList(cities.filter(item=>item.title===searched))    
    }

    const handleCity=(index)=>{
        setSelected(cities[index])
    }


    useEffect(() => {
        set(id,selected.id)
    }, [selected])
    

  return (

    <div  className='w-full '>
        <div onClick={()=>setIsOpen(!isOpen)} className='flex flex-row justify-between items-center w-full rounded border p-2 mt-1 cursor-pointer'>
            <p  className='cursor-pointer bg-white w-full outline-none text-xs'>{selected.title}</p>
            <FaAngleDown className={`text-neutral-500 ${isOpen && 'transform rotate-180 duration-500 origin-center'}`}/>
        </div>
        {
            isOpen && (
                <>
                    <div className='flex flex-row gap-1 items-center p-1 border rounded shadow'>
                        <RiSearchLine className='text-stone-400'/>
                        <input  onChange={(e)=>{
                            
                            setSearched(e.target.value)
                            search(e.target.value)
                            }} placeholder='جستجو' className='outline-none w-full flex flex-row gap-1 items-center p-2 text-xs text-stone-400'/>
                    </div >
                <div className='bg-white border rounded shadow w-full overflow-y-scroll mt-1 h-60v'>
                    {citiesList.map((ci,index)=>(
                        <div key={index}  onClick={()=>handleCity(index)}
                        className='flex flex-row justify-between items-center hover:bg-stone-100 cursor-pointer'>
                        
                            <p  className={`cursor-pointer hover:text-neutral-500 p-2 text-sm `}>{ci.title}</p>
                            {selected===ci && (<BsCheck2All  className={`text-rose-400 ml-1`}/>)}
                        </div>
                    ))}
                    </div>
                </>
                )
            }
    </div>


  )
}

export default DropDown