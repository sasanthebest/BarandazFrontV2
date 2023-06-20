import SidebarContent  from "@/components/sidebar/SideBarContent";
import SidebarContainer  from '@/components/sidebar/SidebarContainer';
import SidebarBodyContainer  from '@/components/sidebar/SidebarBodyContainer';
import Login from "@/components/UTILS/Login";
import AccountSideBar from "@/components/Account/AccountSideBar";


export default async function DashboardLayout({ children }) {

  return (
    <>
      {/* {auth == "authenticated" ? ( */}
        <SidebarContent>
          <SidebarContainer title="حساب کاربری" mobile={false} littleSideBar>
            <AccountSideBar/>
          </SidebarContainer>
          <SidebarBodyContainer>{children}</SidebarBodyContainer>
        </SidebarContent>
      {/* ) : (
        <Login />
      )} */}
    </>
  );
}
