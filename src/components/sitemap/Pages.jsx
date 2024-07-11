import { Link } from "react-router-dom";

const Pages = () => {
  return (
    // sitemap pages
    <div className="tab-content mt-3" id="myTabContent">
      {/* page */}
      <div
        className="tab-pane fade show active"
        id="creative-software"
        role="tabpanel"
      >
        <ul className="sitemap-pages">
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/schedule-demo"}>Schedule A Demo</Link>
          </li>
          <li>
            <Link to={"/data-policy"}>Data Policy</Link>
          </li>
          <li>
            <Link to={"/privacy"}>Privacy Policy</Link>
          </li>
          <li>
            <Link to={"/terms"}>Terms of Use</Link>
          </li>
          <li>
            <Link to={"/return"}>Return and Refund Policy</Link>
          </li>
        </ul>
      </div>
      {/* page */}
      <div className="tab-pane fade" id="services" role="tabpanel">
        <ul className="sitemap-pages">
          <li>
            <Link to={"/services"}>All Services</Link>
          </li>
          <li>
            <Link to={"/services/software-development"}>
              Software Development
            </Link>
          </li>
          <li>
            <Link to={"/services/website-development"}>
              Website Development
            </Link>
          </li>
          <li>
            <Link to={"/services/apps-development"}>Apps Development</Link>
          </li>
          <li>
            <Link to={"/digital-marketing"}>Digital Marketing</Link>
          </li>
          <li>
            <Link to={"/services/ui-ux-design"}>UI/UX Design</Link>
          </li>
          <li>
            <Link to={"/it-outsourcing"}>IT Outsourcing</Link>
          </li>
        </ul>
      </div>
      {/* page */}
      <div
        className="tab-pane fade"
        id="products"
        role="tabpanel"
        aria-labelledby="contact-tab"
      >
        <ul className="sitemap-pages">
          <li>
            <Link to={"/products"}>All Products</Link>
          </li>
          <li>
            <Link to={"/product/point-of-sales-software"}>
              Point of Sales Software
            </Link>
          </li>
          <li>
            <Link to={"/product/restaurant-management-software"}>
              Restaurant Management Software
            </Link>
          </li>
          <li>
            <Link to={"/product/freight-forwarding-software"}>
              Freight Forwarding Software
            </Link>
          </li>
          <li>
            <Link to={"/product/hospital-management-software"}>
              Hospital Management Software
            </Link>
          </li>
          <li>
            <Link to={"/product/pharmacy-management-software"}>
              Pharmacy Management Software
            </Link>
          </li>
          <li>
            <Link to={"/product/parking-management-software"}>
              Parking Management Software
            </Link>
          </li>
          <li>
            <Link to={"/product/courier-management-software"}>
              Courier Management Software
            </Link>
          </li>
          <li>
            <Link to={"/product/prescription-management-system"}>
              Prescription Management Software
            </Link>
          </li>
          <li>
            <Link to={"/product/micro-credit-management-software"}>
              Micro Credit Management Software
            </Link>
          </li>
          <li>
            <Link to={"/product/diagnostic-management-system"}>
              Diagnostic Management System
            </Link>
          </li>
          <li>
            <Link to={"/product/enterprise-resource-planning-erp"}>
              Enterprise Resource Planning
            </Link>
          </li>
          <li>
            <Link to={"/product/customer-relationship-management"}>
              Customer Relationship Management
            </Link>
          </li>
        </ul>
      </div>
      {/* page */}
      <div
        className="tab-pane fade"
        id="career"
        role="tabpanel"
        aria-labelledby="contact-tab"
      >
        <ul className="sitemap-pages">
          <li>
            <Link to={"/career"}>Career</Link>
          </li>
          <li>
            <Link to={"/join-team"}>Join our team</Link>
          </li>
          <li>
            <Link to={"/become-a-partner"}>Become a partner</Link>
          </li>
        </ul>
      </div>
      {/* page */}
      {/* <div
        className="tab-pane fade"
        id="resources"
        role="tabpanel"
        aria-labelledby="contact-tab"
      > */}
      {/* <ul className="sitemap-pages"> */}
      {/* <li>
            <Link to={"#"}>All Resources</Link>
          </li>
          <li>
            <Link to={"/documentation"}>Documentation</Link>
          </li>
          <li>
            <a href={"https://blog.creativesoftware.com.bd/"} target="_blank">
              Blog
            </a>
          </li> */}
      {/* <li>
            <Link to={"#"}>Case Studies</Link>
          </li>
          <li>
            <Link to={"#"}>Events</Link>
          </li> */}
      {/* <li>
            <Link to={"#"}>Webinars</Link>
          </li> */}
      {/* <li>
            <Link to={"/faqs"}>FAQS</Link>
          </li> */}
      {/* <li>
            <Link to={"#"}>AWARDS AND RECOGNITION</Link>
          </li> */}
      {/* </ul> */}
      {/* </div> */}
      <div
        className="tab-pane fade"
        id="support"
        role="tabpanel"
        aria-labelledby="contact-tab"
      >
        <ul className="sitemap-pages">
          <li>
            <Link to={"#"}>Community</Link>
          </li>
          <li>
            <Link to={"#"}>Knowledge Base</Link>
          </li>

          <li>
            <Link to={"/documentation"}>Documentation</Link>
          </li>
          <li>
            <Link to={"/faqs"}>FAQS</Link>
          </li>
          <li>
            <a href={"https://blog.creativesoftware.com.bd/"} target="_blank">
              Blog
            </a>
          </li>
          {/* <li>
            <Link to={"#"}>Services</Link>
          </li>
          <li>
            <Link to={"#"}>Training</Link>
          </li> */}
          <li>
            <Link
              to={
                "https://play.google.com/store/apps/details?id=com.smart.android.crm"
              }
              target="_blank"
            >
              Ticket
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pages;
