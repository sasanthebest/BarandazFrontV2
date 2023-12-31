import Footer from "@/components/layouts/Footer";
import "./globals.css";
import LoginModal from "@/components/modals/LoginModal";
import { getCurrentUser, getCurrentUserInfo } from "@/services/userServices";
import NavBar from "@/components/Navbar";
import Provider from "@/components/Provider";
import ContactInfoModal from "@/components/modals/ContactInfoModal";
import ToasterProvider from "./providers/ToastProvider";
import CityModal from "@/components/modals/CityModal";
import getAllCities from "@/services/getAllCities";
import FilterBar from "@/components/FilterBar";

export const metadata = {
  title: "بارانداز - تجارت خانه ای به وسعت ایران",
  description: "created by love ",
};

export default async function RootLayout({ children }) {
  // const currentUser=await getCurrentUser()
  // const userInfo=await getCurrentUserInfo()
  const allCities = await getAllCities();

  return (
    <html lang="fa" dir="rtl" charSet="utf-8">
      <body>
        <Provider>
          <ToasterProvider />
          <NavBar />
          <FilterBar />
          <CityModal allCities={allCities} />
          <LoginModal />
          <ContactInfoModal />

          {children}

          <Footer />
        </Provider>
      </body>
    </html>
  );
}
