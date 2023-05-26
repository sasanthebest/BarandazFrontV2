import getAllAds from "@/services/getAllAds";
import Card from "@/components/body/card/Card";
import EmptyState from "@/components/EmptyState";
import Categories from "@/components/Categories";
import {getAllCategories} from "@/services/getAllCategories";
import SidebarContainer from "@/components/sidebar/SidebarContainer";
import  SidebarContent from "./../components/sidebar/SideBarContent";
import  SidebarBodyContainer  from "@/components/sidebar/SidebarBodyContainer";

export default async function Page() {
  const allAds = await getAllAds([]);
  const allCategories = await getAllCategories();

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
      
      <SidebarContent>
        <SidebarContainer title="سایدبار" mobile={false}>
          {/* <Categories data={allCategories}> </Categories> */}
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
