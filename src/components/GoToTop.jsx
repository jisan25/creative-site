// client component is needed for client interctivity
"use client";

// import react hooks
import React, { useEffect, useState } from "react";

// arrow up icon from react font awesome
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  // show top button based on state
  const [isVisible, setIsVisible] = useState(false);

  // click to go to top of the page
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  // when user scroll the page
  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    // show button if scroll
    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      // hide button if user in on the top of the page
      setIsVisible(false);
    }
  };

  // use effect hook for check the page is scroll & listen to it
  useEffect(() => {
    // if scroll the page listen to scroll trigger
    window.addEventListener("scroll", listenToScroll);
    // remove trigger if user is on the top of the page
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      {/* show section & button based on state */}
      {isVisible && (
        <section className="go-to-top-section">
          {/* go to top button */}
          <div className="top-btn" onClick={goToBtn}>
            {/* arrow up react font awesome icon */}
            <FaArrowUp className="top-btn--icon" />
          </div>
        </section>
      )}
    </>
  );
};

export default GoToTop;
