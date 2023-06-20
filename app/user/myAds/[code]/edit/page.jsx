import MyAdsprovider from "@/components/Account/myads/MyAdsProvider"
import { getAllCategories } from "@/services/getAllCategories"
import getAllCities from "@/services/getAllCities"
import { getSingleMyAds } from "@/services/userServices"


export default async function page({params}) {
    const singleAd=await getSingleMyAds(params.code)


    // const Categories=await getAllCategories()
    // const Cities=await getAllCities()
    return (
        // <MyAdsprovider  cities={Cities} categories={Categories} data={singleAd} />   
        <MyAdsprovider singleAd={singleAd} />   
    )
    
}