import SidebarContent  from "@/components/sidebar/SideBarContent";
import SidebarContainer  from '@/components/sidebar/SidebarContainer';
import SidebarBodyContainer  from '@/components/sidebar/SidebarBodyContainer';
// import { useBarandazContext } from '@/context/context';
import Login from "@/components/UTILS/Login";


export default async function DashboardLayout({ children }) {
  // const router=useRouter()
  // const { auth, setAuth } = useBarandazContext();

  return (
    <>
      
        <SidebarContent>
          <SidebarContainer title="سایدبار" mobile={false}>
            {/* <Categories data={allCategories}> </Categories> */}
          </SidebarContainer>
          <SidebarBodyContainer>{children}</SidebarBodyContainer>
        </SidebarContent>
     
    </>
  );
}
