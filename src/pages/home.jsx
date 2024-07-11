import About from "@/components/home/About";
import Blog from "@/components/home/Blog";
import Brands from "@/components/home/Brands";
import Clients from "@/components/home/Clients";
import Contact from "@/components/home/Contact";
import Cookie from "@/components/home/Cookie";
import Counts from "@/components/home/Counts";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import LevelUp from "@/components/home/LevelUp";
import PopUpAd from "@/components/home/PopUpAd";
import Services from "@/components/home/Services";
import Tech from "@/components/home/Tech";
import Testimonials from "@/components/home/Testimonials";
import Values from "@/components/home/Values";

import siteInfo from "@/db/siteInfo";

import React, { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    document.title = siteInfo.site_name + " - " + siteInfo.site_title;
  }, []);

  return (
    <>
      {/* <PopUpAd /> */}
      <Hero />

      {/* <popUpDemo /> */}
      <main id="main">
        {/* <About /> */}
        {/* <Values />
        <Counts /> */}
        <Features />
        <Brands />
        <Services />

        <Tech />
        {/* <Clients />
        <Testimonials />
        <Blog />
         <Contact /> */}
        <LevelUp />
        <Cookie />
      </main>
    </>
  );
};

export default HomePage;
