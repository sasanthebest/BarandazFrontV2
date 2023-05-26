// 'use client'
import SidebarContent  from "@/components/sidebar/SideBarContent";
import SidebarContainer  from '@/components/sidebar/SidebarContainer';
import SidebarBodyContainer  from '@/components/sidebar/SidebarBodyContainer';
// import { useRouter } from "next/navigation";
import Provider from './../../components/Provider';

export default async function DashboardLayout({ children }) {
  // const router=useRouter()
  return (
    <>
    <SidebarContent>
      
         <SidebarContainer title="سایدبار" mobile={false}>
          {/* <Categories data={allCategories}> </Categories> */}
       </SidebarContainer>
        <SidebarBodyContainer>  
          {children}
        </SidebarBodyContainer>
      </SidebarContent>
      
    </>
  );
}
