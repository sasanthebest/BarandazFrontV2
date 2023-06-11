'use client'

import MyAdsDetail from '@/components/myads/MyAdsDetail'
import { useBarandazContext } from '@/context/context'
import React, { useEffect } from 'react'

const AdDetailProvider = ({bookmarkId,categories,data}) => {
  // console.log('level2',bookmarkId)
  // console.log('category from level2:',categories)
    const {setAllCategories,setAllCities}=useBarandazContext()

    useEffect(() => {
      setAllCategories(categories)
    //   setAllCities(cities)
    }, [])
    

  return (
    <MyAdsDetail bookmarkId={bookmarkId} singleAd={data}/>
  )
}

export default AdDetailProvider