import SelectCategory from "@/components/submitAd/SelectCategory";
import { getAllCategories } from "@/services/getAllCategories";
import SelectCategoryProvider from "./SelectCategoryProvider";
import getAllCities from "@/services/getAllCities";


export default async function page({params}) {
    const Categories=await getAllCategories()
    const Cities=await getAllCities()

    return (
        <SelectCategoryProvider cities={Cities} categories={Categories}/>    
    )
    
}