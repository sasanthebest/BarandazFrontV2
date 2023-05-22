import { myAds } from "./urls";
import  getApiclient  from '@/services/api-client';

export default async function getMyAds() {
  const data = await getApiclient(myAds)
   return data
};

