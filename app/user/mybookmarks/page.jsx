import EmptyState from "@/components/EmptyState"
import MyBookmarks from "@/components/Account/myBookmarks/MyBookmarks"
import {getMyBookMarks} from "@/services/userServices"

export default async function page() {
  const bookmarks = await getMyBookMarks();
  if (bookmarks.length === 0) {
    return (
      <div className="flex flex-col items-center gap-3">
        <EmptyState
          title="آگهی نشان شده ای وجود ندارد"
          subtitle="برای نشان کردن آگهی میتوانید از دکمه ی ابر در آگهی استفاده کنید"
        />
      </div>
    );
  }
  return <MyBookmarks data={bookmarks} />;
}
