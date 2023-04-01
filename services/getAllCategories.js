import { categories } from "./urls";
const getAllCategories = async () => {
  try {
    const res = await fetch(categories);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default getAllCategories;
