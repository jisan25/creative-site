// components
import ProductForm from "@/components/demo/ProductForm";
import BreadCrumbs from "@/components/product/BreadCrumbs";
import Description from "@/components/product/Description";
import Category from "@/components/product/Category";
import Features from "@/components/product/Features";
import Info from "@/components/product/Info";
import YoutubeVideo from "@/components/product/YoutubeVideo";
import siteInfo from "@/db/siteInfo";

// all products data from local db corporate
import { ProductsData } from "@/db/Corporate";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { id } = useParams();

  // state
  const [products, setProducts] = useState(ProductsData);
  const [product, setProduct] = useState({});

  useEffect(() => {
    // set page title with product title & company name dynamically
    if (id) {
      products.find((item) => {
        if (item.slug === id) {
          setProduct(item);
          document.title = item.title + " - creative software ";
        }
      });
    }
  }, [id]);

  return (
    <>
      <main id="main">
        <BreadCrumbs heading={product.title} logo={product.logo} />
        <section id="portfolio-details" className="portfolio-details">
          <div className="container-fluid container-xl">
            <div className="row gy-4">
              {/* slider */}
              <YoutubeVideo product={product} />
              <div className="col-lg-5 schedule_page">
                <div className="card mb-4">
                  <div className="card-body">
                    <ProductForm products={products} productData={product} />
                  </div>
                </div>
              </div>

              {/* <Info /> */}
            </div>
            <div className="row gy-4 align-items-center">
              <Info
                social={product.social}
                projectName={product.projectName}
                projectUrl={product.projectUrl}
                watchUrl={product.watchUrl}
                images={product.images}
              />
              <Description title={product.title} desc={product.description} />
              {id === "point-of-sales-software" && (
                <Category title="POINT OF SALE FEATURES" />
              )}
              {id !== "point-of-sales-software" && (
                <Features title={`${product.title} - features`} slug={id} />
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductDetailsPage;
