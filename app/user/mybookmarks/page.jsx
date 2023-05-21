import EmptyState from "@/components/EmptyState"
import SaveIcon from "@/components/body/card/SaveIcon"
import MyBookmarks from "@/components/myBookmarks/MyBookmarks"
import getMyBookmarks from "@/services/getMyBookmarks"

export default async function page() {
  const bookmarks = await getMyBookmarks()
  if (bookmarks.length===0){
    return (
      <div className="flex flex-col items-center gap-3">
      <EmptyState title="آگهی نشان شده ای وجود ندارد" 
      subtitle="برای نشان کردن آگهی میتوانید از دکمه ی ابر در آگهی استفاده کنید"/>
      </div>
    )
  }

  return (
    <MyBookmarks data={bookmarks}/>
  )
}
