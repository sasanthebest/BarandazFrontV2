import { myAds } from "./urls";
import apiClient from "./api-client";

const getMyAds = async () => {
  const data=apiClient.get(myAds)
  .then(res=>{
    return res.data
  })
  .catch(err=>{
    return null
  })
  return data
};

export default getMyAds;
