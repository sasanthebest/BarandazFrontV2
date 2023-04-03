import React from "react";
import AdsBody from "@/components/body/AdsBody";
import getAllAds from "@/services/getAllAds";
export default async function page({ params }) {
  const data = getAllAds([{ param: "category", value: params.id }]);
  return <AdsBody promise={data} />;
}