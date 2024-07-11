import Image from "next/image";
import Link from "next/link";

const BreadCrumbs = ({ heading, logo }) => {
  return (
    <section className="breadcrumbs" style={{ paddingTop: "0px" }}>
      <div className="container-xl container-fluid">
        <div className="card p-4 px-5">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <ol>
                <li>
                  <Link style={{ color: "#012970" }} href="/">
                    Home
                  </Link>
                </li>
                <li>Product Details</li>
              </ol>
              <h2 className="font-bold">{heading}</h2>
            </div>

            {logo && (
              <div>
                <Image src={logo} alt="" width={225} height={225} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumbs;
