'use client'

import AdsDetail from '@/components/body/AdsDetail'
import { useBarandazContext } from '@/context/context'
import { useEffect } from 'react'

const AdDetailProvider = ({bookmarkId,categories,data}) => {
  // console.log('level2',bookmarkId)
  // console.log('category from level2:',categories)
    // const {setAllCategories,setAllCities}=useBarandazContext()

    // useEffect(() => {
    //   setAllCategories(categories)
    //   console.log("first:", categories);
    // }, [])
    

  return (
    // <div>sal</div>
    <AdsDetail bookmarkId={bookmarkId} singleAd={data}/>
  )
}

export default AdDetailProvider