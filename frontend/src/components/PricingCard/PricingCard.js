import React from "react";
import { checkMark } from "../../constants/Icons";
import Button from "../Button/Button";

import "./PricingCard.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PricingCard = ({ isPopular, plans }) => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleForBasicPlan = () => {
    if (isAuthenticated) {
      navigate("/dashboard");
    } else {
      navigate("/auth");
    }
  };

  const handleForStandardPlan = () => {
    // code for payment integration
  };

  const handleForSchedulePlan = () => {
    window.open("https://cal.com/devhubhq", "__blank");
  };

  return (
    <div className={`pricing__card ${isPopular && "primary"}`}>
      {isPopular && (
        <div className="popular__tag">
          <p>Popular</p>
        </div>
      )}

      <h1 className={`${isPopular && "popular"}`}>{plans.planName}</h1>
      <div className="pricing">
        <h2>{plans.planPrice}</h2>
        <p>/ month</p>
      </div>

      <p className="desc">{plans.planDescription}</p>

      <div className="choose__btn__container">
        {plans.planName === "Basic" && (
          <Button
            customClassName={"plan__button"}
            label="Get Started"
            primary="true"
            onClick={handleForBasicPlan}
          />
        )}
        {plans.planName === "Standard" && (
          <Button
            customClassName={"plan__button"}
            label="Buy Now"
            primary="true"
            onClick={handleForStandardPlan}
          />
        )}
        {plans.planName === "Premium" && (
          <Button
            customClassName={"plan__button"}
            label="Schedule a Demo"
            primary="true"
            onClick={handleForSchedulePlan}
          />
        )}
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
