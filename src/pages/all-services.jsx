// get service data from local db Corportae
import ServicesData from "@/db/Corporate";
import { useState } from "react";
import { Link } from "react-router-dom";
const ServicesPage = () => {
  // get services data in service state varible
  const [services, setServices] = useState(ServicesData);

  // to shorten the paragraph
  const truncateParagraph = (paragraph, maxLength) => {
    if (paragraph.length <= maxLength) {
      return paragraph;
    } else {
      return paragraph.slice(0, maxLength) + "...";
    }
  };
  return (
    // services section
    <section id="services" className="services mt-0" style={{paddingTop:"100px"}}>
      <div className="container-fluid container-xl">
        {/* service heading */}
        <header className="section-header">
          <h2>Services</h2>
          <p>
            The benefits of such a service are held to be demonstrated by the
            buyer's willingness to make the exchange.
          </p>
        </header>

        <div className="row gy-4">
          {/* service */}
          {services.map((item) => (
            <div className="col-lg-4 col-md-6" key={item.id}>
              <div className={`${"service-box"} ${item.color}`}>
                <i className={`${item.icon} ${"icon"}`}></i>
                <h3 className={""}>{item.title}</h3>
                <p>{truncateParagraph(item.description, 300)}</p>
                {item.slug === "digital-marketing" && (
                  <Link to="/digital-marketing" className="read-more">
                    <span>Read More</span> <i className="bi bi-arrow-right"></i>
                  </Link>
                )}
                {item.slug === "it-outsourcing" && (
                  <Link to="/it-outsourcing" className="read-more">
                    <span>Read More</span> <i className="bi bi-arrow-right"></i>
                  </Link>
                )}
              </div>
            </div>
          ))}

          {/* end service */}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
