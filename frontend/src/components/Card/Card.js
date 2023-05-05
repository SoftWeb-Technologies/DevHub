import React from "react";
import "./Card.css";

const Card = ({ image, title, description, openModel }) => {
  return (
    <div className="card__container">
      <div className="image__container">
        {image ? (
          <img src={image} alt="model" />
        ) : (
          <div
            style={{
              background: "var(--primary-clr)",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <h2>No Image</h2>
          </div>
        )}
      </div>
      <div className="card__content">
        <h3>{title?.slice(0, 30) + "..."}</h3>
        <p>{description?.slice(0, 45) + "..."}</p>
      </div>
      <div className="card__btn__container">
        <button onClick={openModel}>View more</button>
      </div>
    </div>
  );
};

export default Card;
