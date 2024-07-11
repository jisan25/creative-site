import { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cookie = () => {
  const [cookieShow, setCookieShow] = useState(false);

  useLayoutEffect(() => {
    const handleCookie = () => {
      if (localStorage.getItem("cookie")) {
        return;
      } else {
        localStorage.setItem("cookie", true);
        setCookieShow(true);
      }
    };

    handleCookie();
  }, []); // Run only on mount

  const handleClose = () => {
    setCookieShow(false);
  };
  return (
    <>
      {cookieShow && (
        <section className="cookie">
          <div className="cookie-wrapper">
            <span onClick={() => handleClose()} className="cookie-close">
              <i className="bi bi-x"></i>
            </span>
            <div className="row gx-5">
              <div className="col-lg-9 col-12">
                <p className="text-white mb-2">
                  This website uses cookies to improve user experience, analyze
                  your use of our site and to support our marketing. For more
                  information, please read our Cookies Policy. &nbsp;&nbsp;
                  <Link
                    to="/privacy"
                    className="text-white show-details"
                    style={{ fontWeight: 500 }}
                  >
                    <i className="bi bi-gear"></i> SHOW DETAILS
                  </Link>
                </p>
              </div>
              <div className="col-lg-3 col-12 col-accept-decline">
                <div className="d-flex">
                  <button
                    onClick={() => handleClose()}
                    className="btn btn-success mb-2 btn-sm me-2"
                  >
                    ACCEPT ALL
                  </button>
                  <button
                    onClick={() => handleClose()}
                    className="btn btn-outline-light btn-sm"
                    style={{ width: "100px", height: "32px" }}
                  >
                    DECLINE ALL
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Cookie;
