import Button from "@/components/Button";
import Container from "@/components/Container";
import EmptyState from "@/components/EmptyState";
import MyAds from "@/components/myads/MyAds";
import getMyAds from "@/services/getMyAds";



export default async function page() {
  const myAds = await getMyAds();

  if (myAds.length===0){
    return (
      <div className="flex flex-col items-center gap-5">
      <EmptyState title="تا کنون آگهی ثبت نکرده اید"/>
      <Button label="ثبت آگهی"/>
      </div>
    )

  }
  return (


    <MyAds ads={myAds} />

  )
  
}
