const ContactSupport = () => {
  return (
    <div className="row support-contact">
      <div className="col-lg-6 support-qrcode">
        <div
          className="bg-primary text-white text-center py-2 m-auto"
          style={{ fontSize: "17px", width: "90%" }}
        >
          Software Support Portal
        </div>
        <img src="/img/QR-Code.png" />
        <p className="scan">Scan The QR code to Download The App</p>
      </div>
      {/* <div className="col-lg-4"></div> */}
      <div className="col-lg-6">
        {/* customer care */}
        <div className="text-center mt-4 mb-4">
          <h4 className="font-bold h2">
            {" "}
            <span
              style={{
                color: "#4154F1",
              }}
            >
              <i style={{ fontSize: "35px" }} className="bi bi-headset"></i>
            </span>{" "}
            +88 9649 866 977
          </h4>
        </div>
        <div className="navbar-social-links">
          <div className="text-center h4">Follow Us On</div>
          <div className="d-flex gap-3 justify-content-center">
            <a
              href="https://www.youtube.com/@creativesoftwarebd"
              className="youtube"
            >
              <i className="bi bi-youtube"></i>
            </a>
            <a href="https://twitter.com/CreativeSoftbd" className="twitter">
              <i className="bi bi-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/creative-software-bangladesh"
              className="linkedin"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://www.facebook.com/CreativeSoftwareofficial"
              className="facebook"
            >
              <i className="bi bi-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
