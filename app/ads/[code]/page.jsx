import getSingleAd from "@/services/getSingleAd";
import AdDetailProvider from "./adDetailProvider";
import { getAllCategories } from "@/services/getAllCategories";
import { getMyBookMarks } from "@/services/userServices";

export default async function page({ params }) {
  const data = await getSingleAd(params.code);
  // const Categories=await getAllCategories()
  const bookmarks = await getMyBookMarks();
  const bookmarkId=bookmarks?.filter(item=>item?.content_type?.id===data.id)[0]?.id
  console.log('level1',bookmarkId)

  // const Cities=await getAllCities()
  return (
    <AdDetailProvider bookmarkId={bookmarkId}  data={data}/>
  )
}
