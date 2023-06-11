import SidebarContent  from "@/components/sidebar/SideBarContent";
import SidebarContainer  from '@/components/sidebar/SidebarContainer';
import SidebarBodyContainer  from '@/components/sidebar/SidebarBodyContainer';
import Login from "@/components/UTILS/Login";


export default async function DashboardLayout({ children }) {

  return (
    <>
      {/* {auth == "authenticated" ? ( */}
        <SidebarContent>
          <SidebarContainer title="سایدبار" mobile={false}>
          </SidebarContainer>
          <SidebarBodyContainer>{children}</SidebarBodyContainer>
        </SidebarContent>
      {/* ) : (
        <Login />
      )} */}
    </>
  );
}
