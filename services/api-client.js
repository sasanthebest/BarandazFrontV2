import axios from "axios";

const localStorageKey = "Authorization";
const jwtHeader = "Bearer";
export default axios.create({
  headers: {
    Authorization: `${jwtHeader} ${localStorage.getItem(localStorageKey)}`,
  },
});
