import React from "react";
import { checkMark } from "../../constants/Icons";
import Button from "../Button/Button";

import "./PricingCard.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const PricingCard = ({ isPopular, plans }) => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleForBasicPlan = () => {
    if (isAuthenticated) {
      navigate("/dashboard");
    } else {
      navigate("/auth");
    }
  };

  const handleForStandardPlan = async (amount) => {
    try {
      if (isAuthenticated) {
        const {
          data: { key },
        } = await axios.get("http://localhost:4000/api/getkey");

        const {
          data: { order },
        } = await axios.post("http://localhost:4000/api/checkout", {
          amount,
        });

        const options = {
          key,
          amount: order.amount,
          currency: "INR",
          name: "Devhub",
          description: "We are a team of Creators & Innovators",
          image: "https://app.cal.com/devhubhq/avatar.png",
          order_id: order.id,
          callback_url: "http://localhost:4000/api/paymentverification",
          prefill: {
            name:
              currentUser?.displayName ||
              currentUser?.user?.name ||
              currentUser?.email.split("@")[0],
            email: currentUser?.email || null,
            contact: "9999999999",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#106594",
          },
        };
        const razor = new window.Razorpay(options);
        razor.open();
      } else {
        console.log("Please login into Devhub");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

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
            onClick={(e) => handleForStandardPlan(8000)}
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
