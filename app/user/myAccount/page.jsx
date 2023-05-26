import UserInfo from "@/components/myAccount/UserInfo"
import { getCurrentUserInfo } from "@/services/userServices"


export default async function page() {
    const userInfo=await getCurrentUserInfo()

    return (
        <UserInfo userInfo={userInfo}/>
    )
    
}