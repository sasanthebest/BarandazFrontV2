import axios from "axios";
import { baseURL } from "./urls";
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth/next';



export default async function getApiclient(url) {
  const session = await getServerSession(authOptions)
  const jwt = session?.user?.access
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
