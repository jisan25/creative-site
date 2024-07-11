import React, { useEffect, useState } from "react";
// get site info from loacl db
import siteInfo from "../db/siteInfo";
// navbar components
import Products from "./navbar/products";
import Outsourcing from "./navbar/outsourcing";
import Services from "./navbar/services";
import Company from "./navbar/company";
import Support from "./navbar/support";
import { Link } from "react-router-dom";
import PopUpDemo from "@/components/popUpDemo";
// import Resources from "./navbar/resources";

const Header = ({ offer }) => {
  // show nvabar background based on state
  const [isVisible, setIsVisible] = useState(false);

  // when user scroll the page
  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    // show button if scroll
    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      const offer = document.getElementById("specialOffer");
      if (offer) {
        const isOffer = offer.classList.contains("offer");
        if (!isOffer) {
          const header = document.getElementById("header");
          header.classList.remove("mt-5");
          header.classList.remove("pb-5");
          header.classList.remove("pt-5");
        }
      } else {
        const header = document.getElementById("header");
        header.classList.remove("mt-5");
        header.classList.remove("pb-5");
        header.classList.remove("pt-5");
      }

      // hide button if user in on the top of the page
      setIsVisible(false);
    }
  };

  function openCustomPopup() {
    document.getElementById("custom-overlay").classList.add("custom-active");
    document.getElementById("custom-popup").classList.add("custom-active");
    const waChat = document.getElementById("wa-chat");
    if (waChat) {
      waChat.style.display = "none";
    }
  }

  // use effect hook for check the page is scroll & listen to it
  useEffect(() => {
    // if scroll the page listen to scroll trigger
    window.addEventListener("scroll", listenToScroll);
    // remove trigger if user is on the top of the page
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  // Check if the device is a mobile screen
  const isMobileScreen = window.matchMedia("(max-width: 600px)").matches;

  if (isMobileScreen) {
    const checkOffer = localStorage.getItem("offer");
    if (checkOffer === "showOffer") {
      const header = document.getElementById("header");
      if (header) {
        header.classList.add("mobile-offer-height");
        // header.classList.add("mt-5");
        // header.classList.add("pb-5");
        // header.classList.add("pt-5");
      }
    }
  } else {
    const header = document.getElementById("header");
    if (header) {
      header.classList.remove("mobile-offer-height");
      // header.classList.remove("mt-5");
      // header.classList.remove("pb-5");
      // header.classList.remove("pt-5");
    }
  }

  return (
    // index header section
    <header
      id="header"
      className={`${"header fixed-top"} ${
        !isVisible && offer && "mt-5 pt-5 pb-5"
      } ${isVisible && "header-scrolled"}`}
    >
      {/* navbar container */}
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        {/* logo */}
        <Link to="/" className="logo d-flex align-items-center">
          <img
            src="/img/logo.png"
            alt=""
            style={{ width: "290px", height: "220px", objectFit: "cover" }}
          />
        </Link>

        {/* menu */}
        <nav id="navbar" className="navbar">
          <ul>
            {/* company */}
            <li className="dropdown company_menu">
              <a href="#">
                <span>Company</span> <i className="bi bi-chevron-down"></i>
              </a>
              <ul>
                <Company />
              </ul>
            </li>
            {/* services */}
            <li className="dropdown services_menu">
              <Link to="/services">
                <span>Services</span> <i className="bi bi-chevron-down"></i>
              </Link>
              <ul>
                <Services />
              </ul>
            </li>
            {/* product */}
            <li className="dropdown products_menu">
              <Link to="/products">
                <span>Products</span> <i className="bi bi-chevron-down"></i>
              </Link>
              <ul>
                {/* product section */}

                <Products />
              </ul>
            </li>
            {/* IT Outsourcing */}
            <li className="dropdown outsourcing_menu">
              <Link to="/it-outsourcing">
                <span>Outsourcing</span> <i className="bi bi-chevron-down"></i>
              </Link>
              <ul>
                <Outsourcing />
              </ul>
            </li>

            {/* resources */}
            {/* <li className="dropdown resources_menu">
              <a href="#">
                <span>Resources</span> <i className="bi bi-chevron-down"></i>
              </a>
              <ul>
                <Resources />
              </ul>
            </li> */}

            {/* support */}

            <li className="dropdown support_menu">
              <a href="#">
                <span>Support</span> <i className="bi bi-chevron-down"></i>
              </a>
              <ul>
                <Support />
              </ul>
            </li>

            <li>
              <a
                className="btn btn-light login_btn icon_style"
                href="https://crm.creativesoftware.com.bd/login"
                target="_blank"
              >
                <i className="bi bi-box-arrow-in-right"></i> Login
              </a>
            </li>
            <li>
              <button
                onClick={() => openCustomPopup()}
                className="btn btn-primary shedule_btn icon_style"
              >
                <i className="bi bi-calendar3"></i> Shedule A Demo
              </button>
            </li>
          </ul>
          {/* <i className="bi bi-list mobile-nav-toggle"></i> */}
        </nav>
      </div>
      <PopUpDemo />
    </header>
  );
};

export default Header;
