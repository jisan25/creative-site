import { Link } from "react-router-dom";

const BreadCrumbs = ({ heading, logo }) => {
  return (
    <section className="breadcrumbs product-breadrumb-wrapper" style={{ paddingTop: "70px" }}>
      <div className="container-xl container-fluid">
        <div className="card p-4 px-5">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <ol>
                <li>
                  <Link style={{ color: "#012970" }} to="/">
                    Home
                  </Link>
                </li>
                <li>Product Details</li>
              </ol>
              <h2 className="font-bold">{heading}</h2>
            </div>

            {logo && (
              <div>
                <img
                  src={logo}
                  alt=""
                  style={{
                    width: "225px",
                    objectFit: "contain",
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumbs;
