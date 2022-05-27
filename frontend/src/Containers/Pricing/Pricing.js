import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Navbar,
  PricingCard,
  SideNavigation,
  Title,
} from "../../components";

import "./Pricing.css";

const basicPlans = {
  planName: "Basic",
  planPrice: "99",
  planDescription:
    "Access to todo list, upcoming contents,and latest tech news.",
  plansProvided: ["Todo List", "Contest Info", "Latest Tech News"],
};

const standardPlans = {
  planName: "Standard",
  planPrice: "249",
  planDescription: "Access to all the basic features and more. ",
  plansProvided: [
    "Latest Blogs",
    "No Ads",
    "Free Gift 🎁",
    "Exclusive community",
  ],
};

const premiumPlans = {
  planName: "Premium",
  planPrice: "499",
  planDescription:
    "Access to all the basic and standard features and much more",
  plansProvided: [
    "Premium Access",
    "Montly Group Call",
    "24/7 Support",
    "Awesome Surprises",
  ],
};

const Pricing = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const navigate = useNavigate();

  return (
    <div id="pricing">
      <Title title="Pricing" />

      <SideNavigation setIsNavActive={setIsNavActive} />

      <main
        className={`pricing__main__container  ${isNavActive ? "active" : ""}`}
      >
        <Navbar theme={"dark"}>
          <Button
            label={"Sign Up"}
            primary={true}
            onClick={() => navigate("/auth")}
          />
        </Navbar>

        <div className="pricing__content">
          <div className="pricing__header">
            <h1>Our Pricing Plan</h1>
            <p>
              We're providing best in class features in this product with
              honest, integrity and efficiency building quality.
            </p>
          </div>

          <div className="plan__cards">
            <PricingCard plans={basicPlans} />
            <PricingCard isPopular={true} plans={standardPlans} />
            <PricingCard plans={premiumPlans} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pricing;