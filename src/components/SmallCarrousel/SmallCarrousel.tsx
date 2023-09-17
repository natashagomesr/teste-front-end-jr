import React from "react";
import Slider from "react-slick";
import "./SmallCarrousel.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SmallCarrousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  const slider = React.useRef<Slider>(null);

  return (
    <div className="container-small-carrousel">
      <div
        className="carousel-button right-arrow"
        onClick={() => slider?.current?.slickNext()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="34"
          viewBox="0 0 20 34"
          fill="none"
        >
          <path
            d="M0 30.9606L3.03342 34L20 17L3.03342 0L0 3.03939L13.9332 17L0 30.9606Z"
            fill="#3F3F40"
          />
        </svg>
      </div>
      <div
        className="carousel-button left-arrow"
        onClick={() => slider?.current?.slickPrev()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="34"
          viewBox="0 0 20 34"
          fill="none"
        >
          <path
            d="M20 3.03939L16.9666 0L0 17L16.9666 34L20 30.9606L6.06684 17L20 3.03939Z"
            fill="#3F3F40"
          />
        </svg>
      </div>

      <Slider ref={slider} className="slider" {...settings}>
        <div className="content-carrousel ">
          <img
            className="image-carrousel"
            src="./images/Logo.svg"
            alt="slide-1"
          />
        </div>
        <div className="content-carrousel">
          <img
            className="image-carrousel"
            src="./images/Logo.svg"
            alt="slide-2"
          />
        </div>
        <div className="content-carrousel">
          <img
            className="image-carrousel"
            src="./images/Logo.svg"
            alt="slide-3"
          />
        </div>
        <div className="content-carrousel">
          <img
            className="image-carrousel"
            src="./images/Logo.svg"
            alt="slide-4"
          />
        </div>
        <div className="content-carrousel">
          <img
            className="image-carrousel"
            src="./images/Logo.svg"
            alt="slide-6"
          />
        </div>
        <div className="content-carrousel">
          <img
            className="image-carrousel"
            src="./images/Logo.svg"
            alt="slide-7"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SmallCarrousel;
