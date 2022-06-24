import React from "react";
import { useNavigate } from "react-router-dom";

const ArrowInCircle = ({ pushTo }) => {
  const navigate = useNavigate();

  return (
    <svg
      onClick={() => navigate(pushTo)}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
        stroke="#008BB7"
        stroke-width="2"
      />
      <path
        d="M9.5 7L13.5 11L9.5 15"
        stroke="#008BB7"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ArrowInCircle;
