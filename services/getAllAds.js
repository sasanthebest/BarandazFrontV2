import { filteredAds } from "./urls";
const getAllAds = async (adsQuery) => {
  try {
    const res = await fetch(filteredAds(adsQuery), { next: { revalidate: 5 } });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default getAllAds;
