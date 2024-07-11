import Category from "@/components/sitemap/Category";
import Pages from "@/components/sitemap/Pages";
import { useEffect } from "react";
import siteInfo from "@/db/siteInfo";
const SiteMapPage = () => {
  useEffect(() => {
    document.title =
      "Sitemap - " + siteInfo.site_name + " - " + siteInfo.site_title;
  }, []);

  return (
    <div className="container-xl container-flu mb-5" style={{paddingTop:"100px"}}>
      <div className="row">
        {/* sitemap heading */}
        <h2 className="h2 font-bold mb-4">SITEMAP</h2>
        <Category />
        <Pages />
      </div>
    </div>
  );
};

export default SiteMapPage;
