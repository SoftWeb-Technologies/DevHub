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

    if (currentIndex == data.length) {
      setCurrentIndex(0);
    }
  }, [currentIndex]);

  return (
    <>
      <div class="slideshow-container">
        <div
          class="mySlides fade"
          onClick={window.open(data[currentIndex]?.canonical_url)}
        >
          <div class="slider_img_container">
            <img
              src={data[currentIndex]?.social_image}
              width={"100%"}
              height={"100%"}
            />
          </div>

          <div class="slider__content">
            <p>{data[currentIndex]?.title.slice(0, 50)}</p>
            <p>{data[currentIndex]?.description.slice(0, 40)}...</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AutoLatestNews;
