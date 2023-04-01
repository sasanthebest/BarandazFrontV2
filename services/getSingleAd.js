import { singleAd } from "./urls";

const getSingleAd = async (id) => {
  try {
    const res = await fetch(singleAd(id));
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default getSingleAd;
