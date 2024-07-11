import { useEffect } from "react";
// component -> search & partner form
import Search from "@/components/faqs/Search";
import FAQS from "@/components/faqs/FAQS";
import siteInfo from "@/db/siteInfo";

// product data from local db

const FaqPage = () => {
  // change title after the page is loaded
  useEffect(() => {
    document.title =
      "FAQS - " + siteInfo.site_name + " - " + siteInfo.site_title;
  }, []);

  return (
    <>
      <main id="main">
        <section className="faqs" style={{ paddingTop: "100px" }}>
          <div className="container-fluid container-xl">
            <Search />
            {/* <FAQS /> */}
          </div>
        </section>
      </main>
    </>
  );
};

export default FaqPage;
