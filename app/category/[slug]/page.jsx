import ArrowTiltle from "@/components/util/ArrowTiltle";
import EmptyState from "@/components/EmptyState";
import Card from "@/components/body/card/Card";
import CategoryInfo from "@/components/categories/CategoryInfo";
import SubCategories from "@/components/categories/SubCategories";
import SidebarContent from "@/components/sidebar/SideBarContent";
import SidebarBodyContainer from "@/components/sidebar/SidebarBodyContainer";
import SidebarContainer from "@/components/sidebar/SidebarContainer";
import { categories } from "@/services/categories";
import getAllAds from "@/services/getAllAds";
import { getAllCategories } from "@/services/getAllCategories";
import { getCategoryById } from "@/services/getCategoryById";


export default async function page({ params }) {
  const allCategories = await getAllCategories();


  const currentCategory=allCategories?.filter((ca)=>ca.slug==params.slug)[0]
  const parent=allCategories?.filter((ca)=>ca.slug==currentCategory?.parent)[0]
  const kids=allCategories?.filter((ca)=>ca.parent==currentCategory?.id)


  const query=[{ param: "category", value: currentCategory?.id }]

  
  const data =await getAllAds(query);
  if (allCategories?.filter(item=>item.slug==params.slug).length===0){
    return (
      <div className="flex flex-col gap-4 items-center">
      <EmptyState  title="متاسفانه دسته بندی مورد نظر یافت نشد " subtitle="میتوانید برای افزودن دسته بندی مورد نظر با پشتیبانی بارانداز تماس بگیرید"/>
      <ArrowTiltle url='/' title="صفحه ی اصلی" />
      </div>
    )
  }
  const side=(
    <SidebarContainer title="دسته بندی" mobile={false}>
    <SubCategories 
      category={currentCategory}
      kids={kids}
      parent={parent}
    />
    <hr className="mt-5 mb-5" />
    <CategoryInfo category={currentCategory}/>
  </SidebarContainer>)

  if (data.results?.length===0){
    return (
      <>
      <SidebarContent>
        {side}

        <SidebarBodyContainer>
        <div className="flex flex-col gap-4 items-center">
          <EmptyState  title="متاسفانه برای دسته بندی مورد نظر آگهی ثبت نشده است" subtitle=""/>
          <ArrowTiltle url='/'  title="صفحه ی اصلی" />
          </div>
        </SidebarBodyContainer>
      </SidebarContent>
    </>
     

    )
  }
  return (
    <>
      <SidebarContent>
       {side}
        <SidebarBodyContainer>
          <div className="grid grid-cols-babak gap-4">
            {data?.results?.map((ad) => (
              <Card key={ad.id} item={ad} />
            ))}
          </div>
        </SidebarBodyContainer>
      </SidebarContent>
    </>



    
  )
}
