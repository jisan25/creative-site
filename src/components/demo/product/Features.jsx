// all products data from local db
import { ProductsData } from "../../db/Corporate";
// google font configuration
import { Nunito } from "next/font/google";
const nunito = Nunito({ subsets: ["cyrillic"] });

const Features = ({ title, slug }) => {
  return (
    // point of sales software category
    <section id="services" className="services">
      <div className="container-fluid container-xl">
        {/* heading */}
        <header className="section-header">
          <p className="text-uppercase">{title}</p>
        </header>

        <div className="row gy-4">
          {/* service */}

          {ProductsData.map(
            (item) =>
              item.slug === slug &&
              item.features.map((feature, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <div className={`${"service-box"} ${"blue"}`}>
                    <i className="bi bi-check-circle icon"></i>
                    <h3 className={nunito.className}>{feature}</h3>
                  </div>
                </div>
              ))
          )}

          {/* end service */}
        </div>
      </div>
    </section>
  );
};

export default Features;
