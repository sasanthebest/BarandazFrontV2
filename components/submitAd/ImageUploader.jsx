'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BiImageAdd } from 'react-icons/bi'
import Button from '../util/Button'
import axios from 'axios'
import ProgressBar from '../util/ProgressBar'
import { IoMdTrash } from 'react-icons/io'

const ImageUploader = ({errors,register,set}) => {
  // console.log('err:',errors)
  const [images, setImages] = useState([])
  const [uploaded,setUploaded]=useState(null)
  // console.log('uploaded:',uploaded)

  const onRemoveImage=(path)=>{
    setImages(images.filter(item=>item.path!=path))
    setUploaded(images.filter(item=>item.path!=path))
  }

  const onFileChange=(e)=>{
    const files=e.target.files
    
    const image=[...images]
    if (files){
      for (let i = 0; i < files.length; i++) {
        files[i].path=URL.createObjectURL(files[i])
        image.push(files[i])
      } 
      setImages(image)
    }
    
    setUploaded(files)
    
  }

  useEffect(() => {
    set('image',uploaded)
  }, [images])




return (
    
<>
      <label className='w-1/2 h-20'>
        <input  
        className='hidden' 
        type="file" 
        multiple 
        onChange={(e)=>{
          onFileChange(e)
          set('image',[...images,e.target.files])

        }} />
        <div className="flex items-center justify-center w-full h-full border rounded border-dashed cursor-pointer input_field bg-white border-zinc-400 text-neutral-400 hover:text-rose-300 hover:border-zinc-600">
          <BiImageAdd size={24} className='' />
        </div>
      </label> 
      <p className="text-rose-500 text-xs mt-2 pr-2">{errors['images']?.message}</p>

        <div className='w-full grid grid-cols-4 gap-1'> 
      
        {images.map((img,index)=>(
          <div className='relative' key={index}>

          <Image alt='temp-img' className='w-24 h-24 rounded' src={img.path} width={50} height={50} />


          <ProgressBar size={img.size}/>
    
          <IoMdTrash onClick={(e)=>onRemoveImage(img.path)
           }
           className='cursor-pointer text-rose-700 hover:text-slate-700'/>
          </div>
        ))}
          
        </div>
        </>
  )
}

export default ImageUploader