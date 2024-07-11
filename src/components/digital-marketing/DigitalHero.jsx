import { Link } from "react-router-dom";

const ItHero = () => {
  return (
    <>
      <section className="it-hero text-center d-flex flex-column justify-content-center align-items-center pt-0 digital-hero">
        <div className="headline">
          <h4 className="h4">Creative Software</h4>
          <h2 className="h2 font-bold">Hire Digital Marketing Experts</h2>
        </div>
        <div className="top-bottom-border">
          Starting from US $8/ hour - Save 70%
        </div>
        <div className="icons-with-infos d-flex gap-5 text-white">
          <span>
            <i className="bi bi-people-fill"></i> SEO
          </span>
          <span>
            <i className="bi bi-globe-asia-australia"></i> PPC
          </span>
          <span>
            <i className="bi bi-clock-history"></i> CRO
          </span>
        </div>
        <div>
          <Link to={"/hiring"}>
            <button className="btn btn-success btn-lg mt-4">
              Hire a Digital Marketing Expert{" "}
              <i className="bi bi-arrow-right"></i>
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default ItHero;
1;
