import axios from "axios";
import { singleCategory,baseURL } from "./urls";


export async function getCategoryById(params) {

    const category =await fetch(`${baseURL + singleCategory(params)}`)
    .then(res=>{
        return res.data
    })
    return category
    
}


import { allAds, filteredAds } from "./urls";
const getAllAds = async (adsQuery) => {
  try {
    const res = await fetch(`http://127.0.0.1:8000${filteredAds(adsQuery)}`,{ next: { revalidate: 120 } });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
export default getAllAds;
