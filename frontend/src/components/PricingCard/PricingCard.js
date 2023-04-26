import React from "react";
import { checkMark } from "../../constants/Icons";
import Button from "../Button/Button";

import "./PricingCard.css";

const PricingCard = ({ isPopular, plans }) => {
  const handleBuyButton = () => {};
  const handleScheduleButton = () => {};
  return (
    <div className={`pricing__card ${isPopular && "primary"}`}>
      {isPopular && (
        <div className="popular__tag">
          <p>Popular</p>
        </div>
      )}{/*&#8377;*/}

      <h1 className={`${isPopular && "popular"}`}>{plans.planName}</h1>
      <div className="pricing">
        <h2>{plans.planPrice}</h2>
        <p>/ month</p>
      </div>

      <p className="desc">{plans.planDescription}</p>

      <div className="choose__btn__container">
        <Button label="Buy" primary="true" onClick={handleBuyButton} />
        <Button label="Schedule a demo" primary="true" onClick={handleScheduleButton} />
      </div>

      <div className="plan__details">
        {plans.plansProvided.map((plan, index) => {
          return (
            <div key={index}>
              <img src={checkMark} alt="check-mark" />
              <p>{plan}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingCard;
