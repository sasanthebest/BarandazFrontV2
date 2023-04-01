import getSingleAd from "@/services/getSingleAd";

export default async function page({ params }) {
  const data = await getSingleAd(params.id);
  return <div>{data.title}</div>;
}
