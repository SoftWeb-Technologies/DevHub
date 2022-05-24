import React from "react";
import "./TextInput.css";

const TextInput = ({ inputFor, placeholder, inputType, value, onChange }) => {
  return (
    <div className="text__input__container">
      <input
        className="form__input"
        type={inputType}
        placeholder=" "
        value={value}
        name={inputFor}
        onChange={onChange}
        autoComplete="off"
        required
      />

      <label className="form__label" htmlFor={inputFor}>
        {placeholder}
      </label>
    </div>
  );
};

export default TextInput;
