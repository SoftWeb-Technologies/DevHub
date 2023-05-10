import React, { useEffect, useState } from "react";

import "./autoSlider.css";

const AutoLatestNews = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < data.length) {
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 5000);
    }

    if (currentIndex === data.length) {
      setCurrentIndex(0);
    }
  }, [currentIndex, data.length]);

  return (
    <>
      <div class="slideshow-container">
        <div
          class="mySlides fade"
          style={{ cursor: "pointer" }}
          onClick={() => window.open(data[currentIndex]?.canonical_url)}
        >
          <div class="slider_img_container">
            <img
              src={data[currentIndex]?.social_image}
              width={"100%"}
              height={"100%"}
              alt="socail-images"
            />
          </div>

          <div class="slider__content">
            <p style={{ fontSize: "20px", fontWeight: 600 }}>
              {`${
                data[currentIndex]?.title.length > 40
                  ? data[currentIndex]?.title.slice(0, 40) + "..."
                  : data[currentIndex]?.title
              }`}
            </p>
            <p style={{ color: "#000" }}>
              {data[currentIndex]?.description.slice(0, 40)}...
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AutoLatestNews;
