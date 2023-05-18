import axios from "axios";
const localStorageKey = "Authorization";
const item =
  typeof window !== "undefined" ? localStorage.getItem(localStorageKey) : null;
const apiClient = axios.create({
  headers: {
    Authorization: `${item}`,
  },
});
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
