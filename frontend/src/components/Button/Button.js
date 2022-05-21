import React from "react";
import "./Button.css";

const Button = ({ label, primary, onClick, customStyle }) => {
  return (
    <button
      style={customStyle}
      onClick={onClick}
      className={`btn ${primary ? "btn-primary" : "btn-secondary"}`}
    >
      {label}
    </button>
  );
};

export default Button;
