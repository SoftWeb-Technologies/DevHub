import React from "react";
import "./Button.css";

const Button = ({
  label,
  primary,
  onClick,
  customStyle,
  renderIconRight,
  renderIconLeft,
  iconSrc,
  customClassName,
}) => {
  return (
    <button
      style={customStyle}
      onClick={onClick}
      className={`btn ${
        primary ? "btn-primary" : "btn-secondary"
      } ${customClassName}`}
    >
      {renderIconLeft && (
        <>
          <img src={iconSrc} alt={iconSrc.split(".")[0]} />
        </>
      )}
      {label}

      {renderIconRight && (
        <>
          <img src={iconSrc} alt={iconSrc.split(".")[0]} />
        </>
      )}
    </button>
  );
};

export default Button;
