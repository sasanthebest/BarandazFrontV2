'use client'

import { useBarandazContext } from '@/context/context'
import React, { useEffect } from 'react'
import MyAdsUpdate from './MyAdsUpdate'

const MyAdsprovider = ({singleAd}) => {
    // console.log(cities)
    // console.log(categories)
    // const {setAllCategories,setAllCities,allCities}=useBarandazContext()

    // useEffect(() => {
    //   setAllCategories(categories)
    //   setAllCities(cities)
    // }, [])
    // console.log(allCities)
    

  return (
    <MyAdsUpdate  data={singleAd} />
  )
}

export default MyAdsprovider