import React from "react";

const SizeBox = ({ height, width, background }) => {
  return (
    <div
      style={{
        height: height + "px",
        width: width + "px",
        background: background || "transparent",
      }}
    />
  );
};

export default SizeBox;
