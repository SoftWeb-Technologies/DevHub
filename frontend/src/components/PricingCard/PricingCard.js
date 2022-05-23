import React from "react";
import Button from "../Button/Button";
import { BiCheck } from "react-icons/bi";

import "./PricingCard.css";

const PricingCard = ({ isPopular, plans }) => {
  const handleBuyButton = () => {};
  return (
    <div className={`pricing__card ${isPopular && "primary"}`}>
      {isPopular && (
        <div className="popular__tag">
          <p>Popular</p>
        </div>
      )}

      <h1 className={`${isPopular && "popular"}`}>{plans.planName}</h1>
      <div className="pricing">
        <h2>&#8377;{plans.planPrice}</h2>
        <p>month</p>
      </div>

      <p className="desc">{plans.planDescription}</p>

      <div className="choose__btn__container">
        <Button label="Buy" primary="true" onClick={handleBuyButton} />
      </div>

      <div className="plan__details">
        {plans.plansProvided.map((plan, index) => {
          return (
            <div key={index}>
              <BiCheck />
              <p>{plan}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingCard;
