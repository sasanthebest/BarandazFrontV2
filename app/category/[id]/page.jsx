import Card from "@/components/body/card/Card";
import filterByCategory from "@/services/filterByCategory";
import React from "react";
import AdsBody from "@/components/body/AdsBody";
export default async function page({ params }) {
  const data = filterByCategory({ param: "category", value: params.id });
  return <AdsBody promise={data} />;
}
