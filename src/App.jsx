// app css files
import "./App.css";

// => components

// router components
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import Header from "@/components/Header";
import GoToTop from "./components/GoToTop";
import WaChat from "./components/WaChat";
import Footer from "./components/Footer";
import Offer from "./components/Offer";
import CareerPage from "./pages/Career";
import ContactPage from "./pages/contact";
import BecomeAPartnerPage from "./pages/become-a-partner";
import JoinTeamPage from "./pages/join-team";
import DigitalMarketingPage from "./pages/digital-marketing";
import ItOutSourcingPage from "./pages/it-outsourcing";
import ServiceDetailsPage from "./pages/services";
import ServicesPage from "./pages/all-services";
import HiringPage from "./pages/hiring";
import ProductDetailsPage from "./pages/product";
import ScheduleDemoPage from "./pages/schedule-a-demo";
import TermsPage from "./pages/terms";
import PrivacyPage from "./pages/privacy";
import ReturnPage from "./pages/return";
import SiteMapPage from "./pages/sitemap";
import DocumentationPage from "./pages/documentation";
import FaqPage from "./pages/faqs";
import ProductsPage from "./pages/products";
import MobileNavbar from "./components/MobileNavbar";
import IndustryListPage from "./pages/IndustrtyListPage";

const App = () => {
  let offer = false;
  return (
    <>
      <MobileNavbar />
      {offer && <Offer />}
      <Header offer={offer} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/become-a-partner" element={<BecomeAPartnerPage />} />
        <Route path="/industry-list" element={<IndustryListPage />} />
        <Route path="/join-team" element={<JoinTeamPage />} />
        <Route path="/digital-marketing" element={<DigitalMarketingPage />} />
        <Route path="/it-outsourcing" element={<ItOutSourcingPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/services/:id" element={<ServiceDetailsPage />} />
        <Route path="/hiring" element={<HiringPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/schedule-a-demo" element={<ScheduleDemoPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/return" element={<ReturnPage />} />
        <Route path="/sitemap" element={<SiteMapPage />} />
        <Route path="/documentation" element={<DocumentationPage />} />
        <Route path="/faqs" element={<FaqPage />} />
      </Routes>
      <GoToTop />
      <WaChat />
      <Footer />
    </>
  );
};

export default App;
