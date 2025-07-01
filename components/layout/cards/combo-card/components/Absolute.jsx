import GetItNowButton from "@/components/layout/button/get-it-now";
import React from "react";

const Absolute = ({ price = "", text = "" } = {}) => {
  return (
    <div className="absolute z-10 flex flex-col gap-3 text-white left-10 bottom-10">
      <div>
        <div className="text-base font-semibold sm:text-xl">{price}</div>
        <div className="text-xs font-normal sm:text-sm">{text}</div>
      </div>
      <GetItNowButton
        text="SHOP NOW"
        stroke="black"
        parentCss="bg-white sm:py-4 py-2 px-3 sm:px-9 rounded-4xl w-fit flex gap-2 items-center font-medium text-base cursor-pointer"
        btnTextCss="text-black font-semibold sm:text-sm text-[10px] leading-[140%]"
      />
    </div>
  );
};

export default Absolute;
