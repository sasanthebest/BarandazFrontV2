'use client'
import ButtonC from '@/components/util/ButtonC'
import React, { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'

const Transition = () => {
    const [isOpen,setIsOpen]=useState(false)
  return (
    <div>
        <div className=" w-full h-96 flex flex-col gap-5 justify-center items-center">


          {/* CONTENT */}

          <div
            className={`translate duration-700 h-full
            ${isOpen ? "transalte-y-0" : "translate-y-full"}
            `}
          >
                <div className="text-lg">title</div>
          </div>
        </div>


        
        

        
        <ButtonC onClick={()=>setIsOpen(!isOpen)} label="click me"/>
    </div>
  )
}

export default Transition