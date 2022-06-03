import React from "react";

const OpenNavIcon = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      viewBox="0 0 228 228"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="5"
        width="218"
        height="218"
        rx="25"
        stroke="black"
        strokeWidth="10"
      />
      <line
        x1="87"
        y1="2.18557e-07"
        x2="87"
        y2="225"
        stroke="black"
        strokeWidth="10"
      />
      <path d="M183 116.083L140.884 73.9668" stroke="black" strokeWidth="10" />
      <line
        x1="177.652"
        y1="114.536"
        x2="135.536"
        y2="156.652"
        stroke="black"
        strokeWidth="10"
      />
    </svg>
  );
};

export default OpenNavIcon;
