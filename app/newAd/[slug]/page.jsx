
import getAllCities from "@/services/getAllCities";
import CategoryBySlug from "./CategoryBySlug";

export default async function page({params}) {
    // const cities=await getAllCities()

    return (
        <CategoryBySlug slug={params.slug}/>
    )
}