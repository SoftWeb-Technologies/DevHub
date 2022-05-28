import React from "react";
import "./Button.css";

const Button = ({
  label,
  primary,
  onClick,
  customStyle,
  renderIconRight,
  renderIconLeft,
  Icon,
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
          <Icon />
        </>
      )}
      {label}

      {renderIconRight && (
        <>
          <Icon />
        </>
      )}
    </button>
  );
};

export default Button;
