import { useEffect } from "react";
import ProductForm from "@/components/demo/ProductForm";
import siteInfo from "@/db/siteInfo";

const ScheduleDemoPage = () => {
  useEffect(() => {
    document.title =
      "Shedule A Demo - " + siteInfo.site_name + " - " + siteInfo.site_title;
  }, []);
  return (
    <>
      <div className="min-vh-100 d-flex flex-row align-items-center schedule_page mobile pt-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 mb-5">
              <div className="card mb-4 mx-4">
                <div className="card-body p-4">
                  <ProductForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleDemoPage;
