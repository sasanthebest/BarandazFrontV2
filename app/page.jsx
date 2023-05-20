import getAllAds from "@/services/getAllAds";
import Container from "@/components/Container";
import Card from "@/components/body/card/Card";
import { getCurrentUserInfo } from "@/services/getCurrentUserInfo";
export default async function page() {


  const allAds = await getAllAds([]);
  return (
    <Container>
      <div className="text-center text-neutral-500 mt-5">بارانداز، تجارت خانه ای به وسعت ایران</div>
      <div className="
          pt-10
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        "
      >
        {allAds.results?.map((ad) => (
          <Card key={ad.id} item={ad} />
          ))}
      </div>

    </Container>
  );
}
