import React from "react";
import InputBox from "./components/InputBox";
import GetItNowButton from "@/components/layout/button/get-it-now";

const Input = () => {
  return (
    <div className="flex gap-4 justify-items-stretch">
      <InputBox />
      <GetItNowButton
        text={"Get Link"}
        stroke="white"
        parentCss="bg-black px-3 py-2 rounded-xl w-fit flex gap-2 items-center font-medium text-base cursor-pointer"
        btnTextCss="text-white font-medium text-sm whitespace-nowrap"
      />
    </div>
  );
};

export default Input;
