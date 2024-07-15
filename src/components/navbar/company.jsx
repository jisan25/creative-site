// site information from local db siteInfo
import siteInfo from "@/db/siteInfo";
import { Link } from "react-router-dom";

const Company = () => {
  // shorten the paragraph
  const truncateParagraph = (paragraph, maxLength) => {
    if (paragraph.length <= maxLength) {
      return paragraph;
    } else {
      return paragraph.slice(0, maxLength) + "...";
    }
  };
  return (
    // company
    <section className="company_section">
      <div className="d-flex justify-content-between gap-4 align-items-start">
        {/* heading */}
        <h2 className="title">about creative software</h2>

        {/* customer care */}
        <div className="">
          <h4 className="font-bold h2">
            {" "}
            <span
              style={{
                color: "#4154F1",
              }}
            >
              <i style={{ fontSize: "35px" }} className="bi bi-headset"></i>
            </span>{" "}
            +88 9649 866 977
          </h4>
        </div>
      </div>
      <div className="row mb-3">
        {/* company about column */}
        <div className="company-col-1 col-lg-5">
          <p>{siteInfo.site_description}</p>
        </div>
        {/* as column */}
        <div className="company-col-2 col-lg-3 d-flex flex-column align-items-center">
          <li>
            <Link to="/career">
              <i className="bi bi-laptop"></i> Careers
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <i className="bi bi-headset"></i> Contact Us
            </Link>
          </li>

          <li>
            <Link to="/become-a-partner">
              <i className="bi bi-person-fill-add"></i> Become a Partner
            </Link>
          </li>
          <li>
            <Link to="/industry-list">
              <i className="bi bi-building"></i> Working Industry
            </Link>
          </li>
        </div>
        {/* follow us column */}
        <div className="company-col-3 col-lg-4 d-flex flex-column  align-items-center mt-4">
          <div className="navbar-social-links">
            <div className="text-center h4">Follow Us On</div>
            <div className="d-flex gap-2 justify-content-center">
              <a
                href="https://www.youtube.com/@creativesoftwarebd"
                className="youtube ps-3"
              >
                <i className="bi bi-youtube ms-3"></i>
              </a>
              <a href="https://twitter.com/CreativeSoftbd" className="twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/creative-software-bangladesh"
                className="linkedin"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://www.facebook.com/CreativeSoftwareofficial"
                className="facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
