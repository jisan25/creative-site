import { useEffect } from "react";
import { useState } from "react";

const Offer = () => {
  const [showOffer, setShowOffer] = useState(true);

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);

  const deadline = "November, 30, 2023";

  const pathname = window.location.pathname;

  const getTime = (lastDate) => {
    const time = Date.parse(lastDate) - Date.now();
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMins(Math.floor((time / (1000 * 60)) % 60));
    setSecs(Math.floor((time / 1000) % 60));
  };
  const handleClose = () => {
    const offerSection = document.getElementById("specialOffer");
    offerSection.style.display = "none";
    const header = document.getElementById("header");
    header.classList.remove("mt-5");
    header.classList.remove("pb-5");
    header.classList.remove("pt-5");
    offerSection.classList.remove("offer");
    const mobileOfferHeight = document.querySelector(".mobile-offer-height");
    mobileOfferHeight.classList.remove("mobile-offer-height");
    localStorage.setItem("offer", "closeOffer");
    setShowOffer(false);
  };
  const handleOffer = () => {
    const checkOffer = localStorage.getItem("offer");

    if (checkOffer) {
      if (checkOffer === "closeOffer") {
        setShowOffer(false);
        const header = document.getElementById("header");
        header.classList.remove("mt-5");
        header.classList.remove("pb-5");
        header.classList.remove("pt-5");
      }
    } else {
      localStorage.setItem("offer", "showOffer");
    }
  };

  useEffect(() => {
    handleOffer();
    const interval = setInterval(() => getTime(deadline), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {!showOffer && pathname !== "/" && (
        <div style={{ height: "150px" }}></div>
      )}
      {showOffer && (
        <div
          className="container-xl container-fluid offer"
          style={{ height: "180px", padding: "20px 0px" }}
          id="specialOffer"
        >
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-4 col-12 d-flex gap-2 countdown">
              <div className="count">
                <h1>{days < 10 ? "0" + days : days}</h1>
                <span className="text">Days</span>
              </div>
              <div className="count">
                <h1>{hours < 10 ? "0" + hours : hours}</h1>
                <span className="text">Hours</span>
              </div>
              <div className="count">
                <h1>{mins < 10 ? "0" + mins : mins}</h1>
                <span className="text">Mins</span>
              </div>
              <div className="count">
                <h1>{secs < 10 ? "0" + secs : secs}</h1>
                <span className="text">Secs</span>
              </div>
            </div>
            <div className="col-lg-5 offer-text">
              <p>
                We are giving 30% Discount for the National Independence Day.
              </p>
            </div>
            <div className="col-lg-3 offer-claim text-end">
              <button className="btn btn-success me-2">Claim Offer</button>
              <button onClick={() => handleClose()} className="btn btn-danger">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Offer;
