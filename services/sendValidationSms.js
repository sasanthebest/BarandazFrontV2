import axios from "axios";
import { sendValidationToken } from "./urls";

const sendValidationSms = async (data) => {
  const res = await axios.post(sendValidationToken, data);
  return res.status;
};

export default sendValidationSms;
