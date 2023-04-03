import axios from "axios";
import { signUp } from "./urls";

const signUpUser = async (data) => {
  try {
    const res = await axios.post(signUp, data);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default signUpUser;
