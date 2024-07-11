// all products data from local db corporate
import { Link } from "react-router-dom";
import { ProductsData } from "../../db/Corporate";
import { useState } from "react";
const Products = () => {
  const featuredProducts = ProductsData.filter(
    (item) => item.type == "featured"
  );

  const [showFeaturedProducts, setShowFeaturedProducts] =
    useState(featuredProducts);

  // state
  // shorten the text
  const truncateParagraph = (paragraph, maxLength) => {
    if (paragraph.length <= maxLength) {
      return paragraph;
    } else {
      return paragraph.slice(0, maxLength) + "...";
    }
  };
  const productsCategory = [
    { title: "All Products", icon: "bi bi-check-all" },
    { title: "Retail Market", icon: "bi bi-shop" },
    // { title: "Food Industry", icon: "bi bi-cup-straw" },
    { title: "Garments Industry", icon: "bi bi-snow3" },
    { title: "Health Industry", icon: "bi bi-capsule" },
    { title: "Finance Industry", icon: "bi bi-cash-stack" },
    { title: "Logistic Industry", icon: "bi bi-box-seam" },
    { title: "Education Industry", icon: "bi bi-book" },
    { title: "Corporate Industry", icon: "bi bi-building" },
    { title: "Ecommerce Industry", icon: "bi bi-image" },
  ];

  const handleFilter = (productTitle) => {
    if (productTitle == "All Products") {
      setShowFeaturedProducts(featuredProducts);
    }
    if (productTitle == "Retail Market") {
      const newFilterProducts = ProductsData.filter(
        (item) => item.tag == "Retail Market"
      );
      setShowFeaturedProducts(newFilterProducts);
    }
    if (productTitle == "Logistic Industry") {
      const newFilterProducts = ProductsData.filter(
        (item) => item.tag == "Logistic Industry"
      );
      setShowFeaturedProducts(newFilterProducts);
    }
    if (productTitle == "Health Industry") {
      const newFilterProducts = ProductsData.filter(
        (item) => item.tag == "Health Industry"
      );
      setShowFeaturedProducts(newFilterProducts);
    }
    if (productTitle == "Finance Industry") {
      const newFilterProducts = ProductsData.filter(
        (item) => item.tag == "Finance Industry"
      );
      setShowFeaturedProducts(newFilterProducts);
    }
    if (productTitle == "Garments Industry") {
      const newFilterProducts = ProductsData.filter(
        (item) => item.tag == "Garments Industry"
      );
      setShowFeaturedProducts(newFilterProducts);
    }
    if (productTitle == "Education Industry") {
      const newFilterProducts = ProductsData.filter(
        (item) => item.tag == "Education Industry"
      );
      setShowFeaturedProducts(newFilterProducts);
    }
    if (productTitle == "Corporate Industry") {
      const newFilterProducts = ProductsData.filter(
        (item) => item.tag == "Corporate Industry"
      );
      setShowFeaturedProducts(newFilterProducts);
    }
    if (productTitle == "Ecommerce Industry") {
      const newFilterProducts = ProductsData.filter(
        (item) => item.tag == "Ecommerce Industry"
      );
      setShowFeaturedProducts(newFilterProducts);
    }
  };

  return (
    // products section
    <section className="product__sec">
      <div className="">
        <div className="product__col__wrapper row">
          {/* heading */}
          <div className="d-flex titles">
            <h2>Industry We Are Working </h2>
            <h3 className="" style={{ fontSize: "1.4rem", marginLeft: "90px" }}>
              Our Products
            </h3>
          </div>

          <div className="col-lg-3">
            {/* <h3 style={{ fontSize: "1.4rem" }}>Retails Solution</h3> */}
            {productsCategory.map((product, index) => (
              <div className="d-flex align-items-center" key={index}>
                <i className={product.icon}></i>

                <Link
                  className="title-desc"
                  style={{
                    display: "block",
                    whiteSpace: "normal",
                    marginTop: "4px",
                  }}
                >
                  <h4
                    onClick={() => handleFilter(product.title)}
                    style={{ fontSize: "1rem" }}
                  >
                    {product.title}
                  </h4>
                </Link>

                {/* <Link
                  className="title-desc"
                  style={{
                    display: "block",
                    whiteSpace: "normal",
                    marginTop: "4px",
                  }}
                  to={
                    product.title === "Restaurant & Food Court POS"
                      ? "/product/restaurant-management-software"
                      : product.title === "Pharmacy & Medicine Shop POS"
                      ? "/product/pharmacy-management-software"
                      : "/product/point-of-sales-software"
                  }
                >
                  <h4 style={{ fontSize: "1rem" }}>{product.title}</h4>
                </Link> */}
              </div>
            ))}
          </div>

          <div className="col-lg-9 d-flex flex-wrap">
            {/* product  */}
            {showFeaturedProducts.map((item) => (
              <div className="col-lg-4 d-flex" key={item.id}>
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

                    <p className="mb-2">
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

export default Products;
