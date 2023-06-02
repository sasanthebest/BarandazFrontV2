

import React from 'react'
import Toggle from '../util/Toggle'
import PriceSelection from '../PriceSelection'
import {RxDrawingPinFilled} from 'react-icons/rx'

const CommonCategoryDetails = () => {
  return (
    <div className='mt-5 flex flex-col gap-x-0.5'>
        <PriceSelection/>
        <hr />
        <div>
            <div className='flex flex-row gap-2 items-center mb-2'>
                <RxDrawingPinFilled size={15} className='text-sm text-neutral-400'/>
                <p className='text-sm'>نوع آگهی</p>
            </div>
            <Toggle label="آگهی های عکس دار"/>
            <Toggle label="آگهی های فوری"/>
        </div>
    </div>
  )
}

export default CommonCategoryDetails