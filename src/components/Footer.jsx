// site information from local db siteinfo
import { Link } from "react-router-dom";
import siteInfo from "../db/siteInfo";

const Footer = () => {
  return (
    // footer section
    <footer id="footer" className="footer">
      {/* footer part */}
      <div className="footer-top">
        <div className="container-xl container-fluid">
          <div className="row gy-4 justify-content-between">
            {/* footer col 1 -> logo, description & social  */}
            <div className="col-lg-5 col-md-12 footer-info">
              <a href="index.html" className="logo d-flex align-items-center">
                <img
                  src="/img/logo.png"
                  alt=""
                  style={{
                    objectFit: "cover",
                    height: "220px",
                    width: "290px",
                  }}
                />
              </a>
              <p>{siteInfo.site_description}</p>
              {/* social */}
              <div className="social-as d-flex align-items-center justify-content-start gap-3 mt-4">
                <div
                  style={{
                    marginTop: "-5px",
                    fontWeight: "600",
                    fontSize: "1.1rem",
                  }}
                >
                  Follow Us on
                </div>
                <div className="d-flex gap-3">
                  <a
                    href="https://www.facebook.com/CreativeSoftwareofficial"
                    className="facebook"
                    style={{ fontSize: "1.3rem" }}
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/@creativesoftwarebd"
                    className="youtube"
                    style={{ fontSize: "1.3rem" }}
                  >
                    <i className="bi bi-youtube"></i>
                  </a>
                  <a
                    href="https://twitter.com/CreativeSoftbd"
                    className="twitter"
                    style={{ fontSize: "1.3rem" }}
                  >
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/creative-software-bangladesh"
                    className="linkedin"
                    style={{ fontSize: "1.3rem" }}
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>

                  <a
                    href="#"
                    className="instagram"
                    style={{ fontSize: "1.3rem" }}
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="row">
                {/* footer col 2 */}
                <div className="col-lg-4 col-6 footer-as">
                  <h4>Useful as</h4>
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <Link to="/terms">Terms of service</Link>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <Link to="/privacy">Privacy policy</Link>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <Link to="/return">Return &amp; Refund policy</Link>
                    </li>
                  </ul>
                </div>
                {/* footer col 3 */}
                <div className="col-lg-4 col-6 footer-as">
                  <h4>Our Services</h4>
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <a href="#">Software Development</a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <a href="#">Websit Development</a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <a href="#">Apps Development</a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <Link to="/digital-marketing">
                        <span className="dm-text"> Digital Marketing </span>
                      </Link>
                    </li>

                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <Link to="#">
                        <span className="dm-text">Ui/Ux Design</span>
                      </Link>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <Link to="/it-outsourcing">
                        <span className="dm-text">IT Outsourcing</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* footer col 4 */}
                <div className="col-lg-4 footer-as">
                  <h4>Support</h4>
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <a href="#">Community</a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <a href="#">Knowledge Base</a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <Link to="/documentation">Documentaion</Link>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <a
                        href={"https://blog.creativesoftware.com.bd/"}
                        target="_blank"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <Link to="/faqs">Faqs</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer credit */}
      <div className="container-fluid container-xl">
        <div className="copyright">
          <div className="row d-flex copyright-wrapper justify-content-between align-items-center">
            {/* credit - col */}
            <div className="copyright-text-cs-wrapper col-lg-4 col-12">
              &copy; 2015-{new Date().getFullYear()}{" "}
              <strong>
                {/* <span>{process.env.SITE_NAME}</span>*/}
                <a
                  href="https://www.creativesoftware.com.bd"
                  speechify-initial-font-family="Roboto, sans-serif"
                  speechify-initial-font-size="16px"
                >
                  Creative Software.&nbsp;
                </a>
              </strong>
              All Rights Reserved.
            </div>
            {/* credit - col */}
            <div className="col-lg-3 col-12 proud-member-basis d-flex align-items-center gap-2 justify-content-center">
              <p className="mb-0">We are proud member of</p>
              <img
                src={"/img/basis-logo.svg"}
                style={{ width: "70px", objectFit: "contain" }}
              />
            </div>
            {/* credit - col */}
            <div className="footer_page col-lg-5 col-12">
              <Link
                to="/privacy"
                speechify-initial-font-family="Roboto, sans-serif"
                speechify-initial-font-size="16px"
              >
                <span className="font-bold">·</span> Privacy Policy
              </Link>
              <Link
                to="/terms"
                speechify-initial-font-family="Roboto, sans-serif"
                speechify-initial-font-size="16px"
              >
                <span className="font-bold">·</span> Terms Of Use
              </Link>

              <Link
                to="/return"
                speechify-initial-font-family="Roboto, sans-serif"
                speechify-initial-font-size="16px"
              >
                <span className="font-bold">·</span> Return and Refund Policy
              </Link>
              <Link
                to="/sitemap"
                speechify-initial-font-family="Roboto, sans-serif"
                speechify-initial-font-size="16px"
              >
                <span className="font-bold">·</span> Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
