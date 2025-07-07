import React from "react";
import RightArrowIcon from "../svg/RightArrowIcon";

const BackNavigate = ({ arrowClassName = "", text = "" } = {}) => {
  return (
    <div className="flex items-center gap-2">
      <div className="items-center justify-center hidden md:flex">
        <RightArrowIcon className={arrowClassName} />
      </div>
      <p className="md:text-base text-2xl capitalize md:font-semibold font-normal md:leading-[140%] leading-6 text-black">
        {text}
      </p>
    </div>
  );
};

export default BackNavigate;
