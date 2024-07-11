import DigitalHero from "@/components/digital-marketing/DigitalHero";
import BoostSale from "@/components/digital-marketing/BoostSale";
import DMTools from "@/components/digital-marketing/DMTools";
import siteInfo from "@/db/siteInfo";
import { useEffect } from "react";

const DigitalMarketingPage = () => {
  useEffect(() => {
    document.title =
      "Digital Marketing - " + siteInfo.site_name + " - " + siteInfo.site_title;
  }, []);

  return (
    <>
      <div
        className="container-xl container-fluid"
        style={{ paddingTop: "100px" }}
      >
        <DigitalHero />
        <BoostSale />
        <DMTools />
      </div>
    </>
  );
};

export default DigitalMarketingPage;
