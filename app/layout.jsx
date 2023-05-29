import Footer from "@/components/layouts/Footer";
import "./globals.css";
import LoginModal from "@/components/modals/LoginModal";
import { getCurrentUser,getCurrentUserInfo } from "@/services/userServices";
import NavBar from "@/components/Navbar";
import Provider from "@/components/Provider";


export const metadata = {
  title: "بارانداز - تجارت خانه ای به وسعت ایران",
  description: "created by love ",
};

export default async function RootLayout({ children }) {
  // const currentUser=await getCurrentUser()
  // const userInfo=await getCurrentUserInfo()
 

  return (
    <html lang="fa" dir="rtl" charSet="utf-8">
      <body>
        <Provider>
<<<<<<< HEAD
        <NavBar/> 
=======
        <NavBar userInfo={userInfo} currentUser={currentUser}/> 
        <div className="text-center  text-stone-500 mt-5 mb-5">بارانداز،تجارت خانه ای به وسعت ایران</div>
>>>>>>> f6abf3ad9c26b1d37bb1e43ac03b01c8b9ea514d
         <LoginModal/>
          {children}
          <Footer/>
        </Provider>
      </body>
    </html>
  );
}
