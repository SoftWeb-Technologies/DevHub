import React from "react";
import { RightArrowIcon } from "../../../DevHubIcons";
import "./FeatureCard.css";

const FeatureCard = ({ Icon, title, path }) => {
  return (
    <div className="feature__card">
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <Icon />
        <p
          style={{
            color: "#000",
            opacity: "0.6",
            fontWeight: "500",
          }}
        >
          {title}
        </p>
      </div>

      <RightArrowIcon />
    </div>
  );
};

export default FeatureCard;
