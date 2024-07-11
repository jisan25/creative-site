import services from "@/db/DigitalMarketing";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// google nuito font config
const BoostSale = () => {
  const [dmServices, setDmServices] = useState();

  useEffect(() => {
    setDmServices(services);
  }, []);
  // to shorten the paragraph
  const truncateParagraph = (paragraph, maxLength) => {
    if (paragraph.length <= maxLength) {
      return paragraph;
    } else {
      return paragraph.slice(0, maxLength) + "...";
    }
  };
  return (
    <>
      <section className="boost-sale">
        <div className="boost-sale-text text-center">
          <h6 className="h5 font-bold text-dark">10X Your Sales with Our</h6>
          <h2 className="h1 text-dark mb-4">
            Comprehensive Digital Marketing Services
          </h2>
          <p className="lead px-5">
            An internet user spends 6 hours per day consuming digital media. How
            do you turn these online consumers into paying customers? Hire
            digital marketing employee from one of the best online marketing
            outsourcing companies in India. Turn your website into your most
            important marketing asset to serve you as a 24/7 online sales
            representative.
          </p>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container-fluid container-xl">
          <div className="row gy-4">
            {/* service */}
            {!dmServices && <p>Loading...</p>}
            {dmServices &&
              dmServices.map((item) => (
                <div className="col-lg-4 col-md-6" key={item.id}>
                  <div className={`${"service-box blue"}`}>
                    <i className={`${item.icon} ${"icon"}`}></i>
                    <h3 className={""}>{item.title}</h3>
                    <p>{truncateParagraph(item.description, 300)}</p>
                    <a href="#" className="read-more">
                      <span>Read More</span>{" "}
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              ))}

            {/* end service */}

            {/* button */}
            <div className="text-center">
              <Link to={"/hiring"}>
                <button className="btn btn-primary btn-lg mt-4">
                  Book a Digital Marketing Expert{" "}
                  <i className="bi bi-arrow-right"></i>
                </button>
              </Link>
            </div>
            {/* button */}
          </div>
        </div>
      </section>
    </>
  );
};

export default BoostSale;
