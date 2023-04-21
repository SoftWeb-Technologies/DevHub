import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./autoSlider.css";

const AutoLatestNews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div>
        <h1 style={{ color: "red" }}>22</h1>
      </div>
      <div>
        <h1 style={{ color: "red" }}>22</h1>
      </div>
      <div>
        <h1 style={{ color: "red" }}>22</h1>
      </div>
      <div>
        <h1 style={{ color: "red" }}>22</h1>
      </div>
      <div>
        <h1 style={{ color: "red" }}>22</h1>
      </div>
      <div>
        <h1 style={{ color: "red" }}>22</h1>
      </div>
    </Slider>
  );
};

export default AutoLatestNews;
