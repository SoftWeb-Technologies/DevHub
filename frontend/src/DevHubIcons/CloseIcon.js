import React from "react";

const CloseIcon = ({ onClick, fillColor, ...props }) => {
  return (
    <svg
      {...props}
      style={{ cursor: "pointer" }}
      onClick={onClick}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.192 0.344238L5.94897 4.58624L1.70697 0.344238L0.292969 1.75824L4.53497 6.00024L0.292969 10.2422L1.70697 11.6562L5.94897 7.41424L10.192 11.6562L11.606 10.2422L7.36397 6.00024L11.606 1.75824L10.192 0.344238Z"
        fill={fillColor || "rgba(0, 0, 0, 0.5)"}
      />
    </svg>
  );
};

export default CloseIcon;
