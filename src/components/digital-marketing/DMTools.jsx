import { Link } from "react-router-dom";

const DMTools = () => {
  return (
    <section className="text-center dm-tools-wrapper">
      <h6 className="h5 mb-2">All the Digital Marketing Tools to</h6>
      <h2 className="h1 mb-4">Track, Test, Tweak, Repeat</h2>

      <div className="row dm-tools mt-5">
        {/* row */}
        <div className="col-lg-3">
          <div
            className="card d-grid place-items-center"
            style={{ placeItems: "center" }}
          >
            <img src="/img/dm-tools/61fa8896eec4c40004bacd39.png" alt="" />
          </div>
        </div>
        <div className="col-lg-3">
          <div
            className="card d-grid place-items-center"
            style={{ placeItems: "center" }}
          >
            <img src="/img/dm-tools/lin.png" alt="" />
          </div>
        </div>
        <div className="col-lg-3">
          <div
            className="card d-grid place-items-center"
            style={{ placeItems: "center" }}
          >
            <img src="/img/dm-tools/en_badge_web_generic.png" alt="" />
          </div>
        </div>
        <div className="col-lg-3">
          <div
            className="card d-grid place-items-center"
            style={{ placeItems: "center" }}
          >
            <img src="/img/dm-tools/Facebook_New_Logo_(2015).svg.png" alt="" />
          </div>
        </div>
        {/* row */}
        <div className="col-lg-3">
          <div
            className="card d-grid place-items-center"
            style={{ placeItems: "center" }}
          >
            <img src="/img/dm-tools/Google-Search-Console-Logo.jpg" alt="" />
          </div>
        </div>
        <div className="col-lg-3">
          <div
            className="card d-grid place-items-center"
            style={{ placeItems: "center" }}
          >
            <img src="/img/dm-tools/Logo_Google_Analytics.svg.png" alt="" />
          </div>
        </div>
        <div className="col-lg-3">
          <div
            className="card d-grid place-items-center"
            style={{ placeItems: "center" }}
          >
            <img
              src="/img/dm-tools/8f4940ab2b110be46a20fe7efd88e9826c801ce7-3840x2160.png"
              alt=""
            />
          </div>
        </div>
        <div className="col-lg-3">
          <div
            className="card d-grid place-items-center"
            style={{ placeItems: "center" }}
          >
            <img src="/img/dm-tools/logo.png" alt="" />
          </div>
        </div>

        {/* row */}
        <div className="col-lg-3">
          <div
            className="card d-grid place-items-center"
            style={{ placeItems: "center" }}
          >
            <img
              src="/img/dm-tools/mailchimp-logo-black-png-transparent-860x239.png"
              alt=""
            />
          </div>
        </div>
        <div className="col-lg-3">
          <div
            className="card d-grid place-items-center"
            style={{ placeItems: "center" }}
          >
            <img src="/img/dm-tools/YouTube_Logo_2017.svg.png" alt="" />
          </div>
        </div>

        {/* button */}
        <div className="text-center">
          <Link to={"/hiring"}>
            <button className="btn btn-primary btn-lg mt-4">
              Hire Now <i className="bi bi-arrow-right"></i>
            </button>
          </Link>
        </div>
        {/* button */}
      </div>
    </section>
  );
};

export default DMTools;
