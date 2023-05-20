import axios from "axios";

import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth/next"

const session=async ()=>{
  const s=await getServerSession(authOptions)
  console.log('s:',s.user)
  return s
}
// console.log("session::",session())

const apiClient =axios.create({
  
})
export default apiClient;

axios.interceptors.response.use(null, (Error) => {
  const expectedError =
    Error.response &&
    Error.response.status >= 400 &&
    Error.response.status < 500;
  if (!expectedError) {
    alert("خطای غیر منتظره ای رخ داده");
    console.log(Error);
  }
  return Promise.reject(Error);
});
