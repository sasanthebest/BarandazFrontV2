'use client'

import { useState } from "react"
import ArrowTiltle from "../ArrowTiltle"
import { useRouter } from "next/navigation"
import { useBarandazContext } from "@/context/context"

const SubCategories = ({category,parent,kids}) => {

  const {isClickedIndex,setClickedIndex}=useBarandazContext(-1)
  const router=useRouter()

  if (parent){
    return (
      <div className="pr-10 mt-3"> 
      <div className="mb-4">
        <ArrowTiltle url={'/'}  title="صفحه ی اصلی" />
      </div>
      <div onClick={()=>router.push(`category/${parent.id}`)} className="flex flex-row gap-1 items-center cursor-pointer">
        {parent.title}

        </div>
      <div onClick={()=>router.push(`category/${category.id}`)} className="pr-6 mt-4 cursor-pointer">{category.title}</div>
      <div  className={`flex flex-col mr-16 mt-4`}>
        {   
          kids.map((kid,index)=>(
            
            <p onClick={()=>{
              router.push(`category/${kid.id}`)
              setClickedIndex(index)}} key={index} className={`text-sm ${isClickedIndex==index?'text-rose-500':"text-neutral-500"} cursor-pointer pr-1 pt-2 pb-2 border-r-2 ${isClickedIndex==index?'border-rose-500':"border-neutral-300"} `}>{kid.title}</p>
            ))
          }
      </div>
      </div>
  )}

  return (
        <div className="pr-10 mt-3"> 
        <div className="mb-4">
          <ArrowTiltle onClick={()=>router.push('/')} title="صفحه ی اصلی" />
        </div>
        <div className="flex flex-row gap-1 items-center">
          {category.title}

        </div>
        <div  className={`flex flex-col mr-16 mt-4  `}>
          {   
            kids.map((kid,index)=>(
              
              <p onClick={()=>{
                router.push(`category/${kid.id}`)
                setClickedIndex(index)}} key={index} className={`text-sm ${isClickedIndex==index?'text-rose-500':"text-neutral-500"} cursor-pointer pr-1 pt-2 pb-2 border-r-2 ${isClickedIndex==index?'border-rose-500':"border-neutral-300"} `}>{kid.title}</p>
              ))
            }
        </div>
  
        </div>
    )
  }

export default SubCategories