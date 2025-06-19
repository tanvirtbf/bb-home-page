import GetItNowButton from "@/components/layout/button/get-it-now";
import React from "react";

const Absolute = ({ price = "", text = "" } = {}) => {
  return (
    <div className="absolute z-10 flex flex-col gap-3 text-white left-10 bottom-10">
      <div>
        <div className="text-xl font-semibold">{price}</div>
        <div className="text-sm font-normal">{text}</div>
      </div>
      <GetItNowButton
        text="SHOP NOW"
        stroke="black"
        parentCss="bg-white py-4 px-9 rounded-4xl w-fit flex gap-2 items-center font-medium text-base cursor-pointer"
        btnTextCss="text-black font-semibold text-sm"
      />
    </div>
  );
};

export default Absolute;
