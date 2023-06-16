import getSingleAd from "@/services/getSingleAd";
import { getMyBookMarks } from "@/services/userServices";
import AdsDetail from "@/components/body/AdsDetail";

export default async function page({ params }) {
  const data = await getSingleAd(params.code);
  const bookmarks = await getMyBookMarks();
  const bookmarkId=bookmarks?.filter(item=>item?.content_type?.id===data.id)[0]?.id
  // console.log('level1',bookmarkId)
  // const Categories=await getAllCategories()
  // const Cities=await getAllCities()
  return (
    <AdsDetail bookmarkId={bookmarkId} singleAd={data}/>
  )
}
