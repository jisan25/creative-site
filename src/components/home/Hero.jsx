import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  function openCustomPopup() {
    document.getElementById("custom-overlay").classList.add("custom-active");
    document.getElementById("custom-popup").classList.add("custom-active");
    const waChat = document.getElementById("wa-chat");
    if (waChat) {
      waChat.style.display = "none";
    }
  }
  return (
    // ====== hero section ======

    <section id="hero" className="hero d-flex align-items-center">
      <div className="container-fluid container-xl">
        <div className="row">
          {/* hero content */}
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h1>We offer modern solutions for growing your business</h1>
            <h2>
              We are Ready Team of talented people for design & Develop
              websites, Software & Apps.
            </h2>
            <div>
              {/* hero call to action buttons */}
              <div className="text-center text-lg-start">
                <a
                  href="#"
                  className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center me-4"
                >
                  <span>Explore The Platform</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
                <a
                  onClick={() => openCustomPopup()}
                  className="fw-bold scrollto d-inline-flex align-items-center justify-content-center align-self-center mobile-display-none"
                  style={{ cursor: "pointer" }}
                >
                  <span>Request A Demo</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
              {/* newsletter */}
              <div className="footer-newsletter col-lg-9 mt-2">
                {/* <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form> */}
                <div className="mt-2 news-letter-benifits">
                  <span>
                    <i className="bi bi-check-lg"></i> Free plan available
                  </span>{" "}
                  <span>
                    <i className="bi bi-check-lg"></i> Easy Setup
                  </span>{" "}
                  <span>
                    <i className="bi bi-check-lg"></i> No credit card required
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* hero image */}
          <div className="col-lg-6 hero-img">
            <img src="/img/hero-img.png" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>

    // end hero
  );
};

export default Hero;
