
import getMyBookmarks from "@/services/getMyBookmarks";

export default async function page() {
  const bookmarks = await getMyBookmarks();

  return ''
}
