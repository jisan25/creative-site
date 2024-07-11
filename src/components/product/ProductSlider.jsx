import React from "react";
import Slider from "react-slick";

const ProductSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  console.log(images);

  return (
    <div className="product-slider col-lg-8">
      <Slider {...settings}>
        {images &&
          images.map((image, index) => (
            <div key={index}>
              <img
                width="90%"
                style={{ borderRadius: "15px" }}
                src={image}
                alt="Product Image"
              />
            </div>
          ))}

        {/* <div>
          <img
            width="90%"
            style={{ borderRadius: "15px" }}
            src="/img/portfolio/portfolio-2.jpg"
            alt="Portfolio 2"
          />
        </div>
        <div>
          <img
            width="90%"
            style={{ borderRadius: "15px" }}
            src="/img/portfolio/portfolio-3.jpg"
            alt="Portfolio 3"
          />
        </div>
        <div>
          <img
            width="90%"
            style={{ borderRadius: "15px" }}
            src="/img/portfolio/portfolio-4.jpg"
            alt="Portfolio 4"
          />
        </div>
        <div>
          <img
            width="90%"
            style={{ borderRadius: "15px" }}
            src="/img/portfolio/portfolio-5.jpg"
            alt="Portfolio 5"
          />
        </div>
        <div>
          <img
            width="90%"
            style={{ borderRadius: "15px" }}
            src="/img/portfolio/portfolio-6.jpg"
            alt="Portfolio 6"
          />
        </div> */}
      </Slider>
    </div>
  );
};

export default ProductSlider;
