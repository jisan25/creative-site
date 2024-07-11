import Link from "next/link";
import ProductSlider from "./ProductSlider";

const Info = ({ social }) => {
  return (
    <>
      <div className="col-lg-4">
        <div className="portfolio-info">
          <div className="flex justify-content-between align-items-start">
            <h3>Project information</h3>
            <div className="d-flex product-social gap-2">
              {social && (
                <Link href={"#"}>
                  <i
                    style={{ color: "#0866FF" }}
                    className="bi bi-facebook"
                  ></i>
                </Link>
              )}
              {social && (
                <Link href={social.twitter}>
                  <i style={{ color: "#00acee" }} className="bi bi-twitter"></i>
                </Link>
              )}
              {social && (
                <Link href={social.linkedin}>
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
              <strong>Category</strong>: Web design
            </li>
            <li>
              <strong>Client</strong>: ASU Company
            </li>
            <li>
              <strong>Project date</strong>: 01 March, 2020
            </li>
            <li>
              <strong>Project URL</strong>: <a href="#">www.example.com</a>
            </li>
          </ul>
          <Link href="#" className="mr-5">
            <button className="btn btn-success mt-3">
              Visit Documentation
            </button>
          </Link>
          <Link href="#">
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
          </Link>
        </div>
      </div>
      <ProductSlider />
    </>
  );
};

export default Info;
