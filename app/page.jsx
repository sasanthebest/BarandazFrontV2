import getAllAds from "@/services/getAllAds";
import Container from "@/components/Container";
import Card from "@/components/body/card/Card";
import { getCurrentUserInfo } from "@/services/getCurrentUserInfo";
import EmptyState from "@/components/EmptyState";


export default async function page() {

  const allAds = await getAllAds([]);
  if (allAds?.results.length===0){
    return (<EmptyState  title="آگهی یافت نشد" />)
  }
  return (
    
    <>
      <div className="text-center text-neutral-500 mt-5">بارانداز، تجارت خانه ای به وسعت ایران</div>
      <div className="grid grid-cols-4">
        <div className="col-span-1 bg-rose-400">side</div>
        <div className="col-span-3 m-3">
        <div className="
          pt-10
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          2xl:grid-cols-5
          gap-4
        "
      >
        {allAds?.results?.map((ad) => (
          <Card key={ad.id} item={ad} />
          ))}
      </div>

        </div>

      </div>
    </>
  );
}
