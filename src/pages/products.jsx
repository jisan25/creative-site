// all products data from local db corporate
import { Link } from "react-router-dom";
import { ProductsData } from "@/db/Corporate";
import { useState } from "react";
const ProductsPage = () => {
  // state
  const [products, setProducts] = useState(ProductsData);
  // shorten the text
  const truncateParagraph = (paragraph, maxLength) => {
    if (paragraph.length <= maxLength) {
      return paragraph;
    } else {
      return paragraph.slice(0, maxLength) + "...";
    }
  };
  const productsData = [
    { title: "Retail Market", icon: "bi bi-shop" },
    { title: "Food Industry", icon: "bi bi-cup-straw" },
    { title: "Garments Industry", icon: "bi bi-snow3" },
    { title: "Health Industry", icon: "bi bi-capsule" },
    { title: "Finance Industry", icon: "bi bi-cash-stack" },
    { title: "Logistic Industry", icon: "bi bi-box-seam" },
    { title: "Education Industry", icon: "bi bi-book" },
    { title: "Corporate Industry", icon: "bi bi-building" },
    { title: "Ecommerce Industry", icon: "bi bi-image" },
  ];
  return (
    // products section
    <section className="container products__wrapper mt-4">
      <div className="">
        <div className="product__col__wrapper row">
          {/* heading */}
          <div className="d-flex titles">
            <h2>Industry We Are Working </h2>
            <h3 style={{ fontSize: "1.4rem", marginLeft: "90px" }}>
              Our Products
            </h3>
          </div>

          <div className="col-lg-3 col-12">
            {/* <h3 style={{ fontSize: "1.4rem" }}>Retails Solution</h3> */}
            {productsData.map((product, index) => (
              <div
                className="d-flex align-items-center retails-solution-wrapper"
                key={index}
              >
                <i className={product.icon}></i>

                <Link
                  className="title-desc"
                  style={{ display: "block", whiteSpace: "normal" }}
                  to={
                    product.title === "Restaurant & Food Court POS"
                      ? "/product/restaurant-management-software"
                      : product.title === "Pharmacy & Medicine Shop POS"
                      ? "/product/pharmacy-management-software"
                      : "/product/point-of-sales-software"
                  }
                >
                  <h4 style={{ fontSize: "1rem" }}>{product.title}</h4>
                </Link>
              </div>
            ))}
          </div>
          <div className="col-lg-9 col-12 d-flex flex-wrap">
            {/* <h3
              className="title_out_products"
              style={{ fontSize: "1.4rem", marginLeft: "90px" }}
            >
              Our Products
            </h3> */}
            {/* product  */}
            {products
              .filter(
                (item) =>
                  // item.slug !== "point-of-sales-software" &&
                  item.slug !== "pharmacy-management-software" &&
                  item.slug !== "restaurant-management-software"
              )
              .map((item) => (
                <div
                  className="col-lg-4 col-12 d-flex full-product-wrapper"
                  key={item.id}
                >
                  <div>
                    <i className={item.icon}></i>
                  </div>

                  <div>
                    <Link
                      className="title-desc"
                      style={{ display: "block", whiteSpace: "normal" }}
                      to={"/product/" + item.slug}
                    >
                      <h4>{item.title}</h4>

                      <p className="mb-2 product-descripton">
                        {truncateParagraph(item.description, 80)}
                      </p>
                    </Link>
                    <Link
                      className="mt-4 font-bold product_learn-more"
                      to={"/product/" + item.slug}
                      style={{ display: "inline", color: "#4154F1" }}
                    >
                      Learn More <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              ))}

            {/* product end */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
