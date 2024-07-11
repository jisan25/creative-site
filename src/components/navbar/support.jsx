import { Link } from "react-router-dom";

const Support = () => {
  return (
    // support section
    <section className="company_section">
      {/* section heading */}
      <h2 className="title">need any help ?</h2>
      <div className="row mb-3">
        {/* column */}
        <div className="company-col-2 col-lg-4">
          <li>
            <a href="#">
              <i className="bi bi-buildings-fill"></i> Community
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-laptop"></i> Knowledge Base
            </a>
          </li>
          <li>
            <Link to={"/documentation"}>
              <i className="bi bi-asterisk"></i> Documentation
            </Link>
          </li>

          <li>
            <a href={"https://blog.creativesoftware.com.bd/"} target="_blank">
              <i className="bi bi-pen-fill"></i> Blog
            </a>
          </li>

          <li>
            <Link to={"/faqs"}>
              <i className="bi bi-patch-question-fill"></i> FAQS
            </Link>
          </li>
          <li>
            <a
              href="https://play.google.com/store/apps/details?id=com.smart.android.crm"
              target="_blank"
            >
              <i className="bi bi-pass-fill"></i> Ticket
            </a>
          </li>

          {/* <li>
            <a href="#">
              <i className="bi bi-newspaper"></i> Training
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-pass-fill"></i> Ticket
            </a>
          </li> */}
        </div>
        {/* column */}
        <div
          className="company-col-middle col-lg-4"
          style={{
            background: "#4154F1",
            color: "white",
            padding: "20px 25px",
          }}
        >
          <div className="mb-1">
            <div
              className="row text-center place-content-center place-items-center mb-1 mt-3 support-col-2"
              style={{ height: "100%" }}
            >
              <div className="mb-3">
                <span
                  style={{
                    background: "#fff",
                    color: "#4154F1",
                    // width: "50px",
                    borderRadius: "50%",
                    padding: "15px",
                    paddingTop: "20px",
                  }}
                >
                  <i style={{ fontSize: "25px" }} className="bi bi-headset"></i>
                </span>
              </div>
              <h4 className="mt-1 font-bold h5">+88 9649 866 977</h4>
            </div>

            <h4
              className="mb-1 mt-4 text-center"
              style={{ fontSize: "1.2rem" }}
            >
              24/7 support from Createive Software internal experts
            </h4>
            <a
              className="company-a text-center"
              href="#"
              style={{
                color: "ghostwhite",
                display: "block",
                marginLeft: "0px",
                paddingLeft: "0px",
                width: "300px",
              }}
            >
              Let's talk <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
        {/* column */}
        <div className="col-lg-4 support-qrcode">
          <div
            className="bg-primary text-white text-center py-2 m-auto"
            style={{ fontSize: "17px", width: "90%" }}
          >
            Software Support Portal
          </div>
          <img src="/img/QR-Code.png" />
          <p className="scan-support">Scan The QR code to Download The App</p>
        </div>
      </div>
    </section>
  );
};

export default Support;
