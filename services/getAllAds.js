import { allAds } from "./urls";
const getAllAds = async () => {
  try {
    const res = await fetch(allAds, { next: { revalidate: 5 } });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default getAllAds;
