

import React from 'react'
import Heading from '../Heading'
import ArrowTiltle from '../util/ArrowTiltle'
import { useRouter } from 'next/navigation'

const Header = ({title}) => {

  return (
    <>
    <div className="w-full flex flex-row items-center justify-center gap-2 mb-2">
        <Heading title="ثبت آگهی در دسته بندی " />
        <p className="text-md text-rose-600 ">{title}</p>
    </div>
    <div  className="w-96 flex flex-row mb-4">
        <ArrowTiltle url="newAd" title="تغییر دسته بندی"/> 
    </div>
    </>
  )
}

export default Header