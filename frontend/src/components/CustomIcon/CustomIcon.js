import React from "react";
import "./CustomIcon.css";

const CustomIcon = ({ iconSrc, link }) => {
  const alt = iconSrc.split(".")[0].split("/")[3];
  console.log(alt);
  return (
    <a href={link || "#"} target="_blank" rel="noreferrer">
      <div className="icon__container">
        <img src={iconSrc} alt={alt} />
      </div>
    </a>
  );
};

export default CustomIcon;
