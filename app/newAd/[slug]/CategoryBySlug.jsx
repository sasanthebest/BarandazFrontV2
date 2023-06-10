'use client'

import Header from '@/components/submitAd/Header'
import SelectCategory from '@/components/submitAd/SelectCategory'
import SubmitAd from '@/components/submitAd/SubmitAd'
import { useBarandazContext } from '@/context/context'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const CategoryBySlug = ({slug}) => {
    const {allCategories}=useBarandazContext()
    const router=useRouter()
    const currentCategory=allCategories.filter(ca=>ca.slug==slug)[0]
    const currentSubCategory=allCategories.filter(ca=>ca.parent==currentCategory.id)
    const currentParentCategory=allCategories.filter(ca=>ca.id==currentSubCategory[0]?.parent)
 


    useEffect(()=>{

        if (!currentCategory){
            router.push('/newAd')
    
        }
    })
    if (allCategories.length!=0){

        var currentCategoryDropDownArray=[...(allCategories.filter(ca=>ca.slug==slug)[0]?.adspecifics.filter(i=>
            i.field_type=='drop_down'
        ))]
        var currentCategoryInputArray=[...(allCategories.filter(ca=>ca.slug==slug)[0]?.adspecifics.filter(i=>
            i.field_type=='input'
        ))]
        var currentCategoryCheckboxArray=[...(allCategories.filter(ca=>ca.slug==slug)[0]?.adspecifics.filter(i=>
            i.field_type=='checkbox'
        ))]
    }



    if (currentCategory?.parent==null || currentSubCategory.length!=0){
            return (
                <SelectCategory currentParentCategory={currentParentCategory[0]} currentCategory={currentCategory} />
            )
        }
        
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="w-96">
                <Header title={currentCategory.title}/>                
                <hr className="mb-2" />

                <SubmitAd 
                input={currentCategoryInputArray}
                checkBox={currentCategoryCheckboxArray}
                dropDown={currentCategoryDropDownArray} 
                currentCategory={currentCategory} />
            </div>
        </div>
    )
}

export default CategoryBySlug