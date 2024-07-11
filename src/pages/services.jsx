// extenral package
import { useEffect, useState } from "react";
import siteInfo from "@/db/siteInfo";

// components
import ItHero from "@/components/it-outsourcing/ItHero";

// all services data from local db corporate
import ServicesData from "@/db/Corporate";

import About from "@/components/it-outsourcing/About";
import Advantages from "@/components/it-outsourcing/Advantages";
import Hiring from "@/components/it-outsourcing/Hiring";
import GrowBusiness from "@/components/it-outsourcing/GrowBusiness";
import { Link, useParams } from "react-router-dom";

const ServiceDetailsPage = () => {
  const params = useParams();

  // state
  const [loading, setLoading] = useState(true);
  const [service, setService] = useState({});

  // after page is loaded
  useEffect(() => {
    getService();
  }, []);

  // return service matched to route params
  const getService = () => {
    ServicesData.find((item) => {
      if (item.slug === params.id) {
        setService(item);
      }
    });
    setLoading(false);
  };

  useEffect(() => {
    document.title =
      "Service - " + siteInfo.site_name + " - " + siteInfo.site_title;
  }, []);

  // shorten the text
  const truncateParagraph = (paragraph, maxLength) => {
    if (paragraph.length <= maxLength) {
      return paragraph;
    } else {
      return paragraph.slice(0, maxLength) + "...";
    }
  };
  return (
    <main
      id="main"
      className="container-xl container-fluid"
      style={{ overflow: "hidden" }}
    >
      <ItHero />
      <section id="services" className="services">
        {/* show a loader */}
        {loading && <h4 className="h4 text-center">Loading ....</h4>}
        {!loading && (
          <div className="container-fluid container-xl">
            {/* section header */}
            <header className="section-header">
              <p>{service.title} - category</p>
            </header>

            <div className="row gy-4">
              {/* service */}
              {service.id &&
                service.category.map((cat) => (
                  <div className="col-lg-4 col-md-6" key={cat.id}>
                    <div className={`${"service-box green"}`}>
                      <i className="icon bi bi-command"></i>
                      <h3 className={""}>{cat}</h3>

                      <Link to="/hiring" className="read-more">
                        <span>Get Started</span>{" "}
                        <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                ))}

              {/* end service */}
            </div>
          </div>
        )}
      </section>
      <About />
      <Advantages />
      <Hiring />
      <GrowBusiness />
    </main>
  );
};

export default ServiceDetailsPage;
