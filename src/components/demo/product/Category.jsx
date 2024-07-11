// all products data from local db
import { ProductsData } from "../../db/Corporate";
// google font config
import { Nunito } from "next/font/google";
const nunito = Nunito({ subsets: ["cyrillic"] });

const Category = ({ title }) => {
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
              item.slug === "point-of-sales-software" &&
              item.category.map((cat) => (
                <div className="col-lg-4 col-md-6" key={cat.id}>
                  <div className={`${"service-box"} ${"blue"}`}>
                    <i className={`${cat.icon} ${"icon"}`}></i>
                    <h3 className={nunito.className}>{cat.name}</h3>

                    <a href="#" className="read-more">
                      <span>Read More</span>{" "}
                      <i className="bi bi-arrow-right"></i>
                    </a>
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

export default Category;
