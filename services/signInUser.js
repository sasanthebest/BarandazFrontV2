import { signIn } from "./urls";
import apiClient from "./api-client";

const signInUser = async () => {
  const res = await apiClient
    .get(signIn)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });

  return res;
};

export default signInUser;
