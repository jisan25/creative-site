import { Link } from "react-router-dom";
import ProductSlider from "./ProductSlider";

const Info = ({ social, projectName, projectUrl, watchUrl, images }) => {
  return (
    <>
      <div className="col-lg-4">
        <div className="portfolio-info">
          <div className="flex justify-content-between align-items-start">
            <h3>Project information</h3>
            <div className="d-flex product-social gap-2">
              {social && (
                <Link to={"#"}>
                  <i
                    style={{ color: "#0866FF" }}
                    className="bi bi-facebook"
                  ></i>
                </Link>
              )}
              {social && (
                <Link to={social.twitter}>
                  <i style={{ color: "#00acee" }} className="bi bi-twitter"></i>
                </Link>
              )}
              {social && (
                <Link to={social.linkedin}>
                  <i
                    style={{ color: "#0072b1 " }}
                    className="bi bi-linkedin"
                  ></i>
                </Link>
              )}
            </div>
          </div>

          <ul>
            <li>
              <strong>Project Name</strong>: {projectName}
            </li>
            <li>
              <strong>Project Launch Date</strong>: 01 March, 2020
            </li>
            <li>
              <strong>Project URL</strong>:{" "}
              <a
                target={projectUrl ? "_blank" : "_self"}
                href={projectUrl ? projectUrl : "#"}
              >
                {projectUrl ? projectUrl : "www.example.com"}
              </a>
            </li>
          </ul>
          <Link to="/documentation" className="mr-5">
            <button className="btn btn-success mt-3 me-2">
              Visit Documentation
            </button>
          </Link>
          <a
            href={
              watchUrl
                ? watchUrl
                : "https://www.youtube.com/@creativesoftwarebd"
            }
            target="_blank"
          >
            <button
              style={{
                background: "rgb(11 127 185)",
                border: "1px solid rgb(11 127 185)",
                color: "white",
              }}
              className="btn btn-warning mt-3 watch-demo"
            >
              Watch A Demo
            </button>
          </a>
        </div>
      </div>
      <ProductSlider images={images} />
    </>
  );
};

export default Info;
