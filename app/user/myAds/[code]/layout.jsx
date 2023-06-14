import MyAdsMange from '@/components/myads/MyAdsManage'
import { getSingleMyAds } from '@/services/userServices'
import React from 'react'

export default async function layout({params,children}) {

    const singleAd=await getSingleMyAds(params.code)

    return (
        <div>
            <MyAdsMange data={singleAd}>
                {children}
            </MyAdsMange>
          
        </div>

    )
    
}