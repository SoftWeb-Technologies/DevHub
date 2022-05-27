import React, { useState } from "react";
import "./TextInputField.css";

const TextInputField = ({
  Icon,
  RightIcon,
  placeholder,
  type,
  onClickShowPassword,
  showPassword,
  onChange,
  value,
  name,
}) => {
  return (
    <div className="textInputField__container">
      {Icon && <Icon />}
      <div className="main__input__container">
        <input
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
        />
        {RightIcon && (
          <div
            onClick={onClickShowPassword}
            className={`hide__eye__icon__container ${
              showPassword ? "active" : ""
            }`}
          >
            <RightIcon />
          </div>
        )}
      </div>
    </div>
  );
};

export default TextInputField;
