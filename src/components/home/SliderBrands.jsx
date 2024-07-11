import React, { Component } from "react";
// slider component for react-slick slider
import Slider from "react-slick";

export default class SliderBrands extends Component {
  render() {
    // slider configuration
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          {/* brand */}
          <div className="">
            <img
              width="75%"
              src="/img/brands/1.png"
              className="img-fluid"
              alt=""
            />
          </div>
          {/* brand */}
          <div className="">
            <img
              width="75%"
              src="/img/brands/2.png"
              className="img-fluid"
              alt=""
            />
          </div>
          {/* brand */}
          <div className="">
            <img
              width="75%"
              src="/img/brands/3.png"
              className="img-fluid"
              alt=""
            />
          </div>
          {/* brand */}
          <div className="">
            <img
              width="75%"
              src="/img/brands/4.png"
              className="img-fluid"
              alt=""
            />
          </div>
          {/* brand */}
          <div className="">
            <img
              width="75%"
              src="/img/brands/5.png"
              className="img-fluid"
              alt=""
            />
          </div>
          {/* brand */}
          <div className="">
            <img
              width="75%"
              src="/img/brands/6.png"
              className="img-fluid"
              alt=""
            />
          </div>
          {/* brand */}
          <div className="">
            <img
              width="75%"
              src="/img/brands/7.png"
              className="img-fluid"
              alt=""
            />
          </div>
          {/* brand */}
          <div className="">
            <img
              width="75%"
              src="/img/brands/8.png"
              className="img-fluid"
              alt=""
            />
          </div>
          {/* brand */}
          <div className="">
            <img
              width="75%"
              src="/img/brands/9.png"
              className="img-fluid"
              alt=""
            />
          </div>
          {/* brand */}
          <div className="">
            <img
              width="75%"
              src="/img/brands/10.png"
              className="img-fluid"
              alt=""
            />
          </div>
          {/* brand */}
          <div className="">
            <img
              width="75%"
              src="/img/brands/11.png"
              className="img-fluid"
              alt=""
            />
          </div>
        </Slider>
      </div>
    );
  }
}
