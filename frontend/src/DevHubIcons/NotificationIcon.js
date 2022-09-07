import React from "react";

const NotificationIcon = ({ onClick, isActive, fillColor }) => {
  return (
    <svg
      onClick={onClick}
      style={{ cursor: "pointer" }}
      width="13"
      height="16"
      viewBox="0 0 13 16"
      fill={isActive ? fillColor : "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.99583 3.06457L5.98797 3.06251C3.68901 3.05701 1.69323 4.92492 1.67742 7.18744V9.79302C1.67742 10.3361 1.60867 10.8662 1.31236 11.3179L1.11505 11.619C0.814622 12.0755 1.13774 12.6873 1.67742 12.6873H11.3229C11.8626 12.6873 12.185 12.0755 11.8852 11.619L11.6879 11.3179C11.3923 10.8662 11.3229 10.3354 11.3229 9.79233V7.18813C11.2954 4.92492 9.29479 3.07007 6.99583 3.06457V3.06457Z"
        stroke={isActive ? fillColor : "rgba(0,0,0,0.5)"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.56243 12.6875C8.56243 13.2345 8.34513 13.7591 7.95835 14.1459C7.57156 14.5327 7.04696 14.75 6.49996 14.75C5.95296 14.75 5.42837 14.5327 5.04158 14.1459C4.65479 13.7591 4.4375 13.2345 4.4375 12.6875"
        stroke={isActive ? fillColor : "rgba(0,0,0,0.5)"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.49998 1C6.86464 1 7.21437 1.14486 7.47223 1.40272C7.73009 1.66058 7.87495 2.01031 7.87495 2.37498V3.06246H5.125V2.37498C5.125 2.01031 5.26986 1.66058 5.52772 1.40272C5.78558 1.14486 6.13531 1 6.49998 1Z"
        stroke={isActive ? fillColor : "rgba(0,0,0,0.5)"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default NotificationIcon;
