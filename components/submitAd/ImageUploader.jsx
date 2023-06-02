'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BiImageAdd } from 'react-icons/bi'
import { CiTrash } from 'react-icons/ci'

const ImageUploader = ({register,set}) => {
  const [images, setImages] = useState([])

  const onRemoveImage=(path)=>{
    setImages(images.filter(item=>item.path!=path))
    
  }

  useEffect(() => {
    set('imgs',images)
  }, [images])
  

  const onUploadImage=(e)=>{
    const files=e.target.files
    const image=[...images]
    if (files){
      for (let i = 0; i < files.length; i++) {
        files[i].path=URL.createObjectURL(files[i])
        image.push(files[i])
      }
      
    }
    
    setImages(image)
  }
  return (
   
    
<>
      <label className='w-1/2 h-20'>
        <input  
        className='hidden' 
        type="file" 
        multiple 
        onChange={(e)=>{
          onUploadImage(e)
          set('imgs',[...images,...e.target.files])
          }} />
        <div className="flex items-center justify-center w-full h-full border rounded border-dashed cursor-pointer input_field bg-white border-zinc-400 text-neutral-400 hover:text-rose-300 hover:border-zinc-600">
          <BiImageAdd size={24} className='' />
        </div>
      </label>
        <div className='w-full grid grid-cols-4 gap-1'> 

        {images.map((img,index)=>(
          <div key={index}>

          <Image alt='temp-img' className='w-24 h-24 rounded' src={img.path} width={50} height={50} />
          <CiTrash onClick={(e)=>onRemoveImage(img.path)
           }
           className='cursor-pointer text-stone-400 hover:text-slate-700'/>
          </div>
          ))}
        </div>
        </>
  )
}

export default ImageUploader