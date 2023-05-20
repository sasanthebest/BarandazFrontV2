import axios from "axios";

import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth/next"

// let jwt=''
// const session=async ()=>{
//   const s=await getServerSession(authOptions)
//   return s
// }
// const see=session()
// jwt=see?.user?.access
// console.log("j:",jwt)

const apiClient =axios.create({
  baseURL:"http://127.0.0.1:8000/",
  headers:{
    Authorization:'jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzMjEyNjMzLCJqdGkiOiI1YzU4ODQ2ZjU0NjU0OWViYTVhNTJiZWQ4YWVmOTZiYyIsInVzZXJfaWQiOjF9.BnJouOMEVZ3RxXLCOgVk0OjwTa3Zil5k-6d7uOX7hkI'
  }
  
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
