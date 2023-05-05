import React, { useState } from "react";
import { useSelector } from "react-redux";
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
  planPrice: "$0",
  planDescription: "Best option to get started and see how DevHub works.",
  plansProvided: [
    "Access Todo List",
    "Basic features of DevHub",
    "Usage Limit for basic features",
    "Ads included",
  ],
};

const standardPlans = {
  planName: "Standard",
  planPrice: "$10",
  planDescription: "Access to all the basic features and more. ",
  plansProvided: [
    "Access to everything from basic plan",
    "No Ads at all",
    "Free Gift 🎁 (Exclusive deals worth $300k)",
    "Exclusive community",
    "Early access to new features",
    "Priority support",
  ],
};

const premiumPlans = {
  planName: "Premium",
  planPrice: "Custom",
  planDescription:
    "Access to all the basic and standard features and much more",
  plansProvided: [
    "Access to everything from standard plan",
    "Premium Acces",
    "Exclusive deals (worth $400k)",
    "Personalised onboarding",
    "Exclusive community access",
    "Access to your team for free",
    "No ads at all",
  ],
};

const Pricing = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const handleScheduleButton = () => {};

  return (
    <div id="pricing">
      <Title title="Pricing" />

      <SideNavigation setIsNavActive={setIsNavActive} />

      <main
        className={`pricing__main__container  ${isNavActive ? "active" : ""}`}
      >
        <Navbar theme={"dark"}>
          {currentUser ? (
            <Button
              label="Dashboard"
              customStyle={{ background: "var(--btn-primary-clr)" }}
              primary={true}
              onClick={() => navigate("/dashboard")}
            />
          ) : (
            <Button
              label="Sign Up"
              primary={true}
              onClick={() => navigate("/auth")}
            />
          )}
        </Navbar>

        <div className="pricing__content">
          <div className="pricing__header">
            <h1>Our Pricing Plan</h1>
            <p>
              As of now, we're in beta! We'll be rolling out our pricing plan
              soon.
            </p>
          </div>

          <div className="plan__cards">
            <PricingCard plans={basicPlans} />
            <PricingCard isPopular={true} plans={standardPlans} />
            <PricingCard onClick={handleScheduleButton} plans={premiumPlans} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pricing;
