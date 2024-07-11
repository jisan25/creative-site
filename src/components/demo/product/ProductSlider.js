// use client is for client components
"use client";

import React, { Component } from "react";

// slider component for slider
import Slider from "react-slick";

export default class ProductSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <div className="product-slider col-lg-8">
        <Slider {...settings}>
          <div>
            <img
              width="90%"
              style={{ borderRadius: "15px" }}
              src="/img/portfolio/portfolio-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              width="90%"
              style={{ borderRadius: "15px" }}
              src="/img/portfolio/portfolio-2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              width="90%"
              style={{ borderRadius: "15px" }}
              src="/img/portfolio/portfolio-3.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              width="90%"
              style={{ borderRadius: "15px" }}
              src="/img/portfolio/portfolio-4.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              width="90%"
              style={{ borderRadius: "15px" }}
              src="/img/portfolio/portfolio-5.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              width="90%"
              style={{ borderRadius: "15px" }}
              src="/img/portfolio/portfolio-6.jpg"
              alt=""
            />
          </div>
        </Slider>
      </div>
    );
  }
}
