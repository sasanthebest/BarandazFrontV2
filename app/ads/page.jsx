import getAllAds from "@/services/getAllAds";
import React from "react";

export default async function page() {
  const data = await getAllAds();
  return (
    <div>
      {data.results.map((ad) => (
        <li>{ad.title}</li>
      ))}
      <li></li>
    </div>
  );
}
