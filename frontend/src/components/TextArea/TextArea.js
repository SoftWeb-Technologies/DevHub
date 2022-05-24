import React from "react";
import "./TextArea.css";

const TextArea = ({ placeholder }) => {
  return (
    <div className="textarea__container">
      <textarea className="textarea__field" placeholder=" " />
      <label className="textarea__label">{placeholder}</label>
    </div>
  );
};

export default TextArea;
