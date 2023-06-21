

import Image from 'next/image'
import React from 'react'

const NotFound = () => {
  return (
    <div className='relative w-full h-screen'>
        <Image alt='404' fill={true} src='/404.jpg'/>
    </div>
  )
}

export default NotFound