import Card from "@/components/body/card/Card";
import EmptyState from "@/components/EmptyState";
import Categories from "@/components/categories/Categories";
import {getAllCategories} from "@/services/getAllCategories";
import SidebarContainer from "@/components/sidebar/SidebarContainer";
import  SidebarContent from "@/components/sidebar/SideBarContent";
import  SidebarBodyContainer  from "@/components/sidebar/SidebarBodyContainer";
import Button from "../util/Button";


export default function MainPage({allAds}) {

  if (allAds?.results.length === 0) {
    return (
      <div className="h-96">
        <div className="text-center text-neutral-500 pt-2">
          بارانداز، تجارت خانه ای به وسعت ایران
        </div>
        <div className="flex flex-col justify-center items-center h-full ">
          <EmptyState 
          title="آگهی یافت نشد"
          subtitle="متاسفانه در سرورهای بارانداز آگهی یافت نشد"/>
        </div>
      </div>
    );
  }
  return (
    <>
    <div className="text-center  text-stone-500 pt-2" >بارانداز،تجارت خانه ای به وسعت ایران</div>
      <SidebarContent>
        <SidebarContainer  title="دسته بندی ها" mobile={false}>
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
