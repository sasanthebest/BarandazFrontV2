import axios from "axios";
import { signUp, signIn, createJwtToken } from "./urls";
import apiClient from "./api-client";

const createJwt = async (data) => {
  await axios.post(createJwtToken, data).then((res) => {
    localStorage.setItem(localStorageKey, res.data.access);
  });
};

const signUpInUser = async (data) => {
  const res = await apiClient
    .get(signIn)
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
