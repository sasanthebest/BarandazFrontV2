import getMyAds from "@/services/getMyAds";



export default async function page() {
  const myAds = await getMyAds();
  return ''
}
