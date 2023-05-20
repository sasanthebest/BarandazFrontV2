import apiClient from "./api-client";
import { myChambers } from "./urls";



export default async function getMyChambers() {

    const data=await apiClient.get(myChambers)
    .then(res=>{
        return res.data
    })
    .catch(err=>{
        console.log(log)
    })
    return data
    
}