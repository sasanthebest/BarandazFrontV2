'use client'
import React, { useEffect, useState} from 'react'
const ProgressBar = ({size}) => {
    const fill=size/1000000
    // console.log(typeof size)
    const [filled,setFilled]=useState(0)

    useEffect(()=>{
        if (filled<100){
            setTimeout(()=>setFilled(prev=>prev+2),50)
        }
    },[filled])
  return (
//     <>
//   <div class="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-5">

//             <svg class="w-32 h-32 transform translate-x-1 translate-y-1" x-cloak aria-hidden="true">
    
//               <circle
//                 class="text-rose-300"
//                 stroke-width="3"
//                 stroke-dasharray={circumference}
//                 stroke-dashoffset={circumference - filled / 100 * circumference}
//                 stroke-linecap="round"
//                 stroke="currentColor"
//                 fill="transparent"
//                 r="20"
//                 cx="50"
//                 cy="50"
//                 />
//             </svg>
//           </div>



// </>
        <div>

       {filled<100 && <div>
            <div className='relative h-1 w-16 border rounded overflow-hidden bg-white'>
                <div 
                style={{
                    height:"100%",
                    width:`${filled}%`,
                    backgroundColor:'#d60f23',
                    transition:"width 0.5s"
                    
                }}
                ></div>
            </div>
        </div>}

    </div>
  )
}

export default ProgressBar