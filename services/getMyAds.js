import { myAds } from "./urls";
import fetchClient from "./getCurrentUser";
const getMyAds = async () => {
  const res = await fetchClient(myAds);
  if (!res.ok) {
    return [];
  }
  return res.json();
};

export default getMyAds;
