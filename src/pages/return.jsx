import { useEffect } from "react";
import siteInfo from "@/db/siteInfo";
const ReturnPage = () => {
  useEffect(() => {
    document.title =
      "Return - " + siteInfo.site_name + " - " + siteInfo.site_title;
  }, []);

  return (
    <main id="main" style={{ paddingTop: "100px" }}>
      <section className="inner-page pt-0">
        <div className="container-xl container-fluid">
          <h2 className="h2 font-bold mb-4 text-dark">
            Return and Refund Policy
          </h2>
          <p>
            Creative Software is working as software as a service provider. So
            Creative Software doesn’t have anything to return or refund, It is a
            non-return & non-refundable product and service.
          </p>
        </div>
      </section>
    </main>
  );
};

export default ReturnPage;
