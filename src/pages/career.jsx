import siteInfo from "@/db/siteInfo";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const CareerPage = () => {
  /*
     => page career
  */
  useEffect(() => {
    document.title =
      "Career - " + siteInfo.site_name + " - " + siteInfo.site_title;
  }, []);
  return (
    <main
      className="d-flex flex-row align-items-center career-page-wrapper"
      style={{ height: "56vh", paddingTop: "100px" }}
    >
      <div className="container-xl container-fluid">
        <div className="row">
          {/* career page header */}
          <h2 className="h4 mb-4 text-center">
            Need some content about joining us in a partner or career adventure
          </h2>
          {/* join our team */}
          <div className="col-lg-6 career-join">
            <div className="card pl-3">
              <div className="card-body">
                <div>
                  <i
                    style={{ color: "#0B5ED7", fontSize: "50px" }}
                    className="bi bi-people-fill"
                  ></i>
                </div>
                <h5 className="h4 font-bold card-title mb-3">Join our team</h5>
                <p className="card-text mb-3">
                  Interesting in applying for a position? View our Careers page
                  for open positions and apply.
                </p>
                <Link to="/join-team" className="card-a">
                  Careative Software careers
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          {/* become a partner */}
          <div className="col-lg-6 career-join">
            <div className="card pl-3">
              <div className="card-body">
                <div className="mb-2">
                  <i
                    style={{ color: "#0B5ED7", fontSize: "50px" }}
                    className="bi bi-slack"
                  ></i>
                </div>
                <h5 className="h4 font-bold card-title mb-3">
                  Become a partner
                </h5>
                <p className="card-text mb-4">
                  For general queries including partnership opportunities.
                </p>
                <Link to="/become-a-partner" className="card-a">
                  Contact Sales
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CareerPage;
