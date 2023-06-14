import MyAdsReview from "@/components/myads/MyAdsReview";
import { getSingleMyAds } from "@/services/userServices";

export default async function page({params}) {
    const singleAd=await getSingleMyAds(params.code)
    
    return (
        <MyAdsReview data={singleAd}/>
    )
    
}