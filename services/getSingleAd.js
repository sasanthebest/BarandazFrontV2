import { baseURL, singleAd } from "./urls";

const getSingleAd = async (id) => {
  try {
    const res = await fetch(`${baseURL+ singleAd(id)}`,{cache:'no-cache'});
    return res.json();
  } catch (error) {
    console.log(error);
  }
  
};

export default getSingleAd;
