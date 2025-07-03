import React from "react";

const UserPointIcon = ({ fill="white" }={}) => {
  return (
    <div>
      <svg
        width="28"
        height="16"
        viewBox="0 0 28 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.666016 0H1.99935V16H0.666016V0ZM3.33268 0H5.99935V16H3.33268V0ZM8.66601 0H9.99935V16H8.66601V0ZM11.3327 0H15.3327V16H11.3327V0ZM16.666 0H17.9993V16H16.666V0ZM20.666 0H21.9993V16H20.666V0ZM23.3327 0H24.666V16H23.3327V0ZM25.9993 0H27.3327V16H25.9993V0Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};

export default UserPointIcon;
