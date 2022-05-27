import React from "react";
import "./TextArea.css";

const TextArea = ({ placeholder, value, onChange, name }) => {
  return (
    <div className="textarea__container">
      <textarea
        className="textarea__field"
        placeholder=" "
        value={value}
        name={name}
        onChange={onChange}
      />
      <label className="textarea__label">{placeholder}</label>
    </div>
  );
};

export default TextArea;
