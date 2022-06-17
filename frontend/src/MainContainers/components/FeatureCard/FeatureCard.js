import React from "react";
import { RightArrowIcon } from "../../../DevHubIcons";
import "./FeatureCard.css";
import { useNavigate } from "react-router-dom";

const FeatureCard = ({ Icon, title, path }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(path)} className="feature__card">
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
