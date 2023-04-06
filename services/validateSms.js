import { validateToken } from "./urls";
import axios from "axios";

const validateSms = async (data) => {
  const res = await axios.post(validateToken, data);
  return res.status;
};

export default validateSms;
