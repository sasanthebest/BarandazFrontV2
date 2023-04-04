import axios from "axios";
import { signUpIn } from "./urls";

const signUpInUser = async (data) => {
  try {
    console.log("posted");
    const res = await axios.post(signUpIn, data);
    console.log(res.status);

    if (res.status === 400) {
      const ge = axios.get(signUpIn);
      console.log(ge.data);
    }
  } catch (error) {
    console.log(error);
  }
};

export default signUpInUser;
