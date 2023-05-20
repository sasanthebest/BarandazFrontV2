

import React from 'react'
import Heading from './Heading'

const EmptyState = ({title,subtitle}) => {
  return (
    <>
    <div className='text-lg text-neutral-600'>{title}</div>
    {
      subtitle && (<div className='text-sm text-neutral-400'>{subtitle}</div>)

    }
    
    </>
  )
}

export default EmptyState