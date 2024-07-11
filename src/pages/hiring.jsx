import HireForm from "@/components/hiring/HireForm";
import GetFree from "@/components/hiring/GetFree";
import GoodCompany from "@/components/hiring/GoodCompany";
import { useEffect } from "react";
import siteInfo from "@/db/siteInfo";
const HiringPage = () => {
  useEffect(() => {
    document.title =
      "Hiring - " + siteInfo.site_name + " - " + siteInfo.site_title;
  }, []);
  return (
    <div
      className="container-xl container-fluid"
      style={{ paddingTop: "70px" }}
    >
      <h2 className="h2 font-bold text-center my-5">
        Reduce your expenses by upto 72%
      </h2>
      <div className="row gap-3 mb-5">
        <div className="col-lg-7" style={{ padding: "0px" }}>
          <div className="min-vh-100 d-flex flex-row align-items-center schedule_page">
            <div className="container">
              <div className="row justify-content-center">
                <div className="mb-5">
                  <div className="card mb-4 mx-4">
                    <div className="card-body p-4">
                      <HireForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <GetFree />
          <GoodCompany />
        </div>
      </div>
    </div>
  );
};

export default HiringPage;
