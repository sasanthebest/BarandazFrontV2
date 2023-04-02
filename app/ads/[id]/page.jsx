import CardDetial from "@/components/body/carddetail/CardDetial";
import getSingleAd from "@/services/getSingleAd";

export default async function page({ params }) {
  const data = await getSingleAd(params.id);
  return <CardDetial advertisment={data} />;
}
