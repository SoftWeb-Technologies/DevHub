import React from "react";

const CloseNavIcon = (props) => (
  <svg viewBox="0 0 23 23" fill="none" width={23} height={23} {...props}>
    <rect
        x="9"
        y="5"
        width="218"
        height="218"
        rx="25"
      />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 4a1 1 0 00-1 1v14a1 1 0 001 1h3V4H5zm4-2H5a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V5a3 3 0 00-3-3H9zm1 2v16h9a1 1 0 001-1V5a1 1 0 00-1-1h-9zm6.707 10.707a1 1 0 000-1.414L15.414 12l1.293-1.293a1 1 0 00-1.414-1.414l-2 2a1 1 0 000 1.414l2 2a1 1 0 001.414 0z"
      fill="White"
    />
  </svg>
);

export default CloseNavIcon;
