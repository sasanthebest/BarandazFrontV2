
import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import {GiFarmer} from'react-icons/gi'
const Categories = ({data}) => {
    const allParents=data.filter(item=>item.parent===null)
    const text=()=>{
        console.log('rest')
    }
  return (
    <div className='overflow-x-auto overflow-hidden'>
        <div className='flex flex-row gap-4 pl-4 pr-4'>
            {
                allParents.map((ca)=>(
                <div className='flex flex-col gap-1 items-center p-2 cursor-pointer'>
                    <GiFarmer size={25}/>
                    <div>{ca.title}</div>
                    
                    {   
                        data.filter(items=>items.parent===ca.id).map((kid)=>(
                            <p className='text-sm text-neutral-500'>{kid.title}</p>
                        ))
                        }
                </div>


                ))
            }

        </div>
    </div>
  )
}

export default Categories
