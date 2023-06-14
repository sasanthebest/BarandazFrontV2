import MyNotes from "@/components/Account/myNotes/MyNotes";
import EmptyState from "@/components/EmptyState"


export default async function page() {


    return (
      <div className="flex flex-col items-center gap-3">
        <EmptyState
          title="تا کنون یادداشتی ثبت نکرده اید"
          subtitle="در صفحه ی آگهی میتوانید یادداشت بگذارید"
        />
      </div>
    );

//   return <MyNotes  />;
}
