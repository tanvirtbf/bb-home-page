import React from "react";
import Timer from "./components/Timer";
import Title from "./components/Title";
import Description from "./components/Description";
import GetItNowButton from "../../../../layout/button/get-it-now";

const Right = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Timer />
      <Title text={"Best Product of the Week"} />
      <Description />
      <GetItNowButton
        text={"Get It Now"}
        stroke="white"
        parentCss="bg-[#FF1A58] sm:py-4 py-2 sm:px-9 px-3 rounded-4xl w-fit flex sm:gap-2 gap-1 items-center font-medium text-base cursor-pointer justify-items-strech"
        btnTextCss="text-white font-medium sm:text-lg text-xs leading-0"
      />
    </div>
  );
};

export default Right;
