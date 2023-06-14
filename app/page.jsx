import getAllAds from "@/services/getAllAds";
import MainPage from "@/components/mainPage/MainPage";

export default async function Page() {
  const allAds = await getAllAds([]);
  return (
    <MainPage allAds={allAds}/>
  )
}
