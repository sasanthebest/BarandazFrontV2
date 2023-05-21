import apiClient from "./api-client";
import { myBookmarks } from "./urls";


export default async function getMyBookMarks(){
  const data=await apiClient.get(myBookmarks)
  .then((res)=>{
    return res.data
  })
  .catch((err)=>{
    console.log(err)
  })
  return data
}