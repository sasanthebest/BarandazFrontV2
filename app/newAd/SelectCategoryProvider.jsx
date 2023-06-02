'use client'


import SelectCategory from '@/components/submitAd/SelectCategory'
import { useBarandazContext } from '@/context/context'
import React, { useEffect } from 'react'

const SelectCategoryProvider = ({cities,categories}) => {
    const {setAllCategories,setAllCities}=useBarandazContext()

    useEffect(() => {
      setAllCategories(categories)
      setAllCities(cities)
    }, [])
    

  return (
    <SelectCategory  data={categories}/>    
  )
}

export default SelectCategoryProvider