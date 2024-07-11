import React, { Component } from "react";
// slider component for react-slick slider
import Slider from "react-slick";

export default class SliderClient extends Component {
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
          {/* client */}
          <div className="">
            <img
              width="75%"
              src="/img/clients/1.png"
              className="img-fluid"
              alt=""
            />
          </div>
          {/* client */}
          <div className="">
            <img
              width="75%"
              src="/img/clients/2.png"
              className="img-fluid"
              alt=""
            />
          </div>
          {/* client */}
          <div className="">
            <img
              width="75%"
              src="/img/clients/3.png"
              className="img-fluid"
              alt=""
            />
          </div>
          {/* client */}
          <div className="">
            <img
              width="75%"
              src="/img/clients/4.png"
              className="img-fluid"
              alt=""
            />
          </div>
          {/* client */}
          <div className="">
            <img
              width="75%"
              src="/img/clients/5.png"
              className="img-fluid"
              alt=""
            />
          </div>
          {/* client */}
          <div className="">
            <img
              width="75%"
              src="/img/clients/6.png"
              className="img-fluid"
              alt=""
            />
          </div>
          {/* client */}
          <div className="">
            <img
              width="75%"
              src="/img/clients/7.png"
              className="img-fluid"
              alt=""
            />
          </div>
          {/* client */}
          <div className="">
            <img
              width="75%"
              src="/img/clients/8.png"
              className="img-fluid"
              alt=""
            />
          </div>{/* client */}
          <div className="">
            <img
              width="75%"
              src="/img/clients/9.png"
              className="img-fluid"
              alt=""
            />
          </div>{/* client */}
          <div className="">
            <img
              width="75%"
              src="/img/clients/10.png"
              className="img-fluid"
              alt=""
            />
          </div>
          {/* client */}
          <div className="">
            <img
              width="75%"
              src="/img/clients/11.png"
              className="img-fluid"
              alt=""
            />
          </div>
          {/* client */}
          <div className="">
            <img
              width="75%"
              src="/img/clients/12.png"
              className="img-fluid"
              alt=""
            />
          </div>
        </Slider>
      </div>
    );
  }
}
