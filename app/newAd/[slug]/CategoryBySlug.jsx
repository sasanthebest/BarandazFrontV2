'use client'

import Header from '@/components/submitAd/Header'
import SelectCategory from '@/components/submitAd/SelectCategory'
import SubmitAd from '@/components/submitAd/SubmitAd'
import { useBarandazContext } from '@/context/context'
import { useRouter } from 'next/navigation'
import React from 'react'

const CategoryBySlug = ({slug}) => {
    const {allCategories}=useBarandazContext()
    const router=useRouter()
    const currentCategory=allCategories.filter(ca=>ca.slug==slug)[0]
    const currentSubCategory=allCategories.filter(ca=>ca.parent==currentCategory.id)
    
    if (!currentCategory){
        router.push('/newAd')

    }

    if (currentCategory?.parent==null || currentSubCategory.length!=0){
        return (
            <SelectCategory currentCategory={currentCategory} />
        )
    }
    
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="w-96">
                <Header title={currentCategory.title}/>                
                <hr className="mb-2" />
                <SubmitAd categoryId={currentCategory.id} />
            </div>
        </div>
    )
}

export default CategoryBySlug