import { filteredAds } from "./urls";

const filterByCategory = async ({ param, value }) => {
  try {
    const res = await fetch(filteredAds({ param, value }), {
      next: { revalidate: 5 },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default filterByCategory;
