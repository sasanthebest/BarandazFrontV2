import { userInfo } from "./urls";
import getApiclient from '@/services/api-client';


export async function getCurrentUserInfo() {
    const data = await getApiclient(userInfo)
    return data
}