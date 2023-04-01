import { allAds } from "./urls";
const getAllAds = async () => {
  try {
    const res = await fetch(allAds);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default getAllAds;
