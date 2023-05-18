import fetchClient from "./getCurrentUser";
import { myBookmarks } from "./urls";

const getMyBookmarks = async () => {
  const res = await fetchClient(myBookmarks);
  if (!res.ok) {
    return [];
  }
  return res.json();
};

export default getMyBookmarks;
