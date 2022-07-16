import React from "react";

const DeleteIcon = ({ onClick }) => {
  return (
    <svg
      style={{ cursor: "pointer" }}
      width="13"
      height="15"
      viewBox="0 0 13 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.97656 2.05469H3.84375C3.9168 2.05469 3.97656 1.99492 3.97656 1.92188V2.05469H9.02344V1.92188C9.02344 1.99492 9.0832 2.05469 9.15625 2.05469H9.02344V3.25H10.2188V1.92188C10.2188 1.33584 9.74228 0.859375 9.15625 0.859375H3.84375C3.25771 0.859375 2.78125 1.33584 2.78125 1.92188V3.25H3.97656V2.05469ZM12.3438 3.25H0.65625C0.362402 3.25 0.125 3.4874 0.125 3.78125V4.3125C0.125 4.38555 0.184766 4.44531 0.257812 4.44531H1.26055L1.67061 13.1279C1.69717 13.694 2.16533 14.1406 2.73145 14.1406H10.2686C10.8363 14.1406 11.3028 13.6957 11.3294 13.1279L11.7395 4.44531H12.7422C12.8152 4.44531 12.875 4.38555 12.875 4.3125V3.78125C12.875 3.4874 12.6376 3.25 12.3438 3.25ZM10.1407 12.9453H2.85928L2.45752 4.44531H10.5425L10.1407 12.9453Z"
        fill="rgba(0,0,0,0.5)"
      />
    </svg>
  );
};

export default DeleteIcon;