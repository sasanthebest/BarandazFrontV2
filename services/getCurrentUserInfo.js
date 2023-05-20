import apiClient from "./api-client";
import { userInfo } from "./urls";
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth/next"


export async function getCurrentUserInfo() {
    const info=await apiClient.get(userInfo)
    .then(res=>{
        return(res.data)
    }).catch(err=>{
        return null
    })
    return info
    
}