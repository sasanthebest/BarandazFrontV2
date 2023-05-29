import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"
import { myAdsUrl, myBookmarksUrl, myChambersUrl, userInfo ,baseURL} from "./urls";
import axios from "axios";

export async function getApiclient(url) {
    const session = await getServerSession(authOptions)
    const jwt = session?.token?.access
    const data = axios.get(`${baseURL + url}`, {
        headers: {
            Authorization: `jwt ${jwt}`
        }
    }).then(res => {
        return (res.data)
    }).catch(err => {
        return null
    })
    return data

}

export async function getCurrentUser() {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
        return null
    }
    return session.user
}

export async function getCurrentUserInfo() {
    const data = await getApiclient(userInfo)
    return data
}
export async function getMyAds() {
    const data = await getApiclient(myAdsUrl)
    return data
};
export async function getMyBookMarks() {
    const data = await getApiclient(myBookmarksUrl)
    return data
}
export async function getMyChambers() {
    const data = await getApiclient(myChambersUrl)
    return data

}