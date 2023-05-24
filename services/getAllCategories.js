import getApiclient from "./api-client";
import { categories } from "./urls";
const getAllCategories = async () => {
  const res = await getApiclient(categories);
  return res
   
};

export default getAllCategories;
