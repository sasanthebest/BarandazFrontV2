import { allAds, filteredAds } from "./urls";
const getAllAds = async (adsQuery) => {
  try {
    const res = await fetch(`http://127.0.0.1:8000${filteredAds(adsQuery)}`,{ next: { revalidate: 60 } });

    return res.json();
  } catch (error) {
    console.log(error);
  }
};
export default getAllAds;
