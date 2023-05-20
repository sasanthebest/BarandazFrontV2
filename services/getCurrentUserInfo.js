import apiClient from "./api-client";
import { userInfo } from "./urls";
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth/next"


export async function getSession() {
    return await getServerSession(authOptions)}

export async function getCurrentUserInfo() {
    const session=await getSession()
    const info=await apiClient.get(userInfo,{
        headers:{
            Authorization:`jwt ${session?.user?.access}`
        }
    })
    .then(res=>{
        return(res.data)
    }).catch(err=>{
        return null
    })
    return info
    
}