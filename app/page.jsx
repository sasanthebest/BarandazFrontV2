import getAllAds from "@/services/getAllAds";
import Card from "@/components/body/card/Card";
import EmptyState from "@/components/EmptyState";
import Categories from "@/components/categories/Categories";
import {getAllCategories} from "@/services/getAllCategories";
import SidebarContainer from "@/components/sidebar/SidebarContainer";
import  SidebarContent from "./../components/sidebar/SideBarContent";
import  SidebarBodyContainer  from "@/components/sidebar/SidebarBodyContainer";
import { categories } from "@/services/categories";
import CommonCategoryDetails from "@/components/categories/CommonCategoryDetails";

export default async function Page() {

  const allAds = await getAllAds([]);

  if (allAds?.results.length === 0) {
    return (
      <>
        <div className="text-center text-neutral-500 mt-5">
          بارانداز، بازاری به وسعت ایران
        </div>
        <EmptyState title="آگهی یافت نشد" />
      </>
    );
  }
  return (
    <>
    <div className="text-center  text-stone-500 mt-5 mb-5">بارانداز،تجارت خانه ای به وسعت ایران</div>
      <SidebarContent>
        <SidebarContainer title="دسته بندی" mobile={false}>
          <Categories/>
          

        </SidebarContainer>
        <SidebarBodyContainer>
          <div className="grid grid-cols-babak gap-4">
            {allAds?.results?.map((ad) => (
              <Card key={ad.id} item={ad} />
            ))}
          </div>
        </SidebarBodyContainer>
      </SidebarContent>
    </>
  );
}
