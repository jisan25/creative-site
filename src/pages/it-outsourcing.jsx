import ItHero from "@/components/it-outsourcing/ItHero";
import About from "@/components/it-outsourcing/About";
import StaffingService from "@/components/it-outsourcing/StaffingService";
import Advantages from "@/components/it-outsourcing/Advantages";
import Hiring from "@/components/it-outsourcing/Hiring";
import GrowBusiness from "@/components/it-outsourcing/GrowBusiness";
import { useEffect } from "react";
import siteInfo from "@/db/siteInfo";

const ItOutSourcingPage = () => {
  useEffect(() => {
    document.title =
      "IT Outsourcing - " + siteInfo.site_name + " - " + siteInfo.site_title;
  }, []);
  return (
    <>
      <div
        className="container-xl container-fluid"
        style={{ paddingTop: "85px" }}
      >
        <ItHero />
        <About />
        <StaffingService />
        <Advantages />
        <Hiring />
        <GrowBusiness />
      </div>
    </>
  );
};

export default ItOutSourcingPage;
