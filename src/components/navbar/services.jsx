//all service data from local db
import { Link } from "react-router-dom";
import ServicesData from "../../db/Corporate";
import { useState } from "react";

const Services = () => {
  // state
  const [services, setServices] = useState(ServicesData);

  // shorten the paragraph
  const truncateParagraph = (paragraph, maxLength) => {
    if (paragraph.length <= maxLength) {
      return paragraph;
    } else {
      return paragraph.slice(0, maxLength) + "...";
    }
  };
  return (
    // service section
    <section className="product__sec">
      <div className="d-flex justify-content-around gap-3">
        <div className="product__col__wrapper services__col__wrapper">
          {/* heading */}
          <h2>Check our Services</h2>
          <div className="row">
            {/* service start */}
            {services.map((item) => (
              <div className="col-md-4" key={item.id}>
                <div className="d-flex justify-content-between mb-3">
                  <div>
                    <i className={item.icon}></i>
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{truncateParagraph(item.description, 125)}</p>
                    {/* cta -> learn more */}
                    {item.slug === "digital-marketing" && (
                      <Link
                        className="mt-2 font-bold"
                        to={"/digital-marketing"}
                        style={{
                          display: "inline",
                          color: "#4154F1",
                          padding: "0px",
                        }}
                      >
                        Learn More <i className="bi bi-arrow-right"></i>
                      </Link>
                    )}
                    {/* cta -> learn more */}
                    {item.slug === "it-outsourcing" && (
                      <Link
                        className="mt-2 font-bold"
                        to={"/it-outsourcing"}
                        style={{
                          display: "inline",
                          color: "#4154F1",
                          padding: "0px",
                        }}
                      >
                        Learn More <i className="bi bi-arrow-right"></i>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* end service */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
