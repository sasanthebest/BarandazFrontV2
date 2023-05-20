import { myAds } from "./urls";
import fetchClient from "./getCurrentUser";
import apiClient from "./api-client";
const getMyAds = async () => {
  apiClient.get(myAds)
  .then(res=>{
    return res.data
  })
  .catch(err=>{
    return null
  })
};

export default getMyAds;
