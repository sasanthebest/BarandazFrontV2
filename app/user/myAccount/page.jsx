import UserInfo from "@/components/UserInfo"
import { getCurrentUserInfo } from "@/services/getCurrentUserInfo"


export default async function page() {
    const userInfo=await getCurrentUserInfo()

    return (
        <UserInfo userInfo={userInfo}/>
    )
    
}