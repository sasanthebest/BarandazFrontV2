import axios from "axios";
import { signUp, signIn, createJwtToken } from "./urls";

const localStorageKey = "Authorization";
const jwtHeader = "Bearer";
const headers = {
  Authorization: `${jwtHeader} ${localStorage.getItem(localStorageKey)}`,
};
const createJwt = async (data) => {
  await axios.post(createJwtToken, data).then((res) => {
    localStorage.setItem(localStorageKey, res.data.access);
  });
};

const signUpInUser = async (data) => {
  const res = await axios
    .get(signIn, {
      headers: headers,
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      if (err.response.status === 401) {
        createJwt(data);
      }

      if (err.response.status === 400) {
        console.log("user created");
        axios.post(signUp, data).then((res) => {
          console.log(res.data);
        });
        createJwt(data);
      }
    });
  return res;
};

export default signUpInUser;
