import React from "react";
import "./TextInput.css";

const TextInput = ({
  name,
  placeholder,
  inputType,
  value,
  onChange,
  props,
}) => {
  return (
    <div className="text__input__container">
      <input
        {...props}
        className="form__input"
        type={inputType}
        placeholder=" "
        value={value}
        name={name}
        onChange={onChange}
        autoComplete="off"
        required
      />

      <label className="form__label" htmlFor={name}>
        {placeholder}
      </label>
    </div>
  );
};

export default TextInput;
