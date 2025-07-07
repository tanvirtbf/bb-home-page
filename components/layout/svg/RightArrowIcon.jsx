import React from "react";

const RightArrowIcon = ({ stroke = "black", className = "rotate-0" } = {}) => {
  return (
    <svg
      width="10"
      height="11"
      viewBox="0 0 10 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1 5.62109H9M5 1.62109L9 5.62109L5 9.62109"
        stroke={stroke}
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default RightArrowIcon;
