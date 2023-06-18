
import { baseURL, deleteImages } from '@/services/urls'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'react-hot-toast'

import { IoMdTrash } from 'react-icons/io'

const TinyImages = ({images,title,code}) => {
    const router=useRouter()
    const onDelete=(id)=>{
        
        const config={
            headers:{

            'Authorization':'jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzMjEyNjMzLCJqdGkiOiI1YzU4ODQ2ZjU0NjU0OWViYTVhNTJiZWQ4YWVmOTZiYyIsInVzZXJfaWQiOjF9.BnJouOMEVZ3RxXLCOgVk0OjwTa3Zil5k-6d7uOX7hkI'
        }}
        axios.delete(`${baseURL + deleteImages(code,id)}`,config)
        .then(res=>{
            toast.success('عکس با موفقیت حذف شد')
        })
        .catch(err=>{
            toast.error('خطای سرور')
        })
        .finally(()=>{
            router.refresh()
        })

    }
  return (
    <div className='w-full'>
        <div className='grid grid-cols-4 gap-4'>
            {images.map(img=>(
                <div>
                    <Image
                    className='w-full h-full rounded'
                    width={100}
                    height={100}
                    alt={title}
                    src={baseURL + img.image}
                    key={img.id} />
                    <IoMdTrash onClick={()=>onDelete(img.id)}
                    className='cursor-pointer text-sky-400 hover:text-slate-700'/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TinyImages