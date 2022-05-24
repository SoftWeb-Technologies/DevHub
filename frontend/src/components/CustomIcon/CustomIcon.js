import React from "react";
import { Link } from "react-router-dom";
import "./CustomIcon.css";

const CustomIcon = ({ iconSrc, link }) => {
  const alt = iconSrc.split(".")[0].split("/")[3];
  console.log(alt);
  return (
    <Link to={link || "#"} hrefLang>
      <div className="icon__container">
        <img src={iconSrc} alt={alt} />
      </div>
    </Link>
  );
};

export default CustomIcon;
