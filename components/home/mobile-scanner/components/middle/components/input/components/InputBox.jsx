import GmailIcon from "@/components/layout/svg/GmailIcon";
import React from "react";

const InputBox = () => {
  return (
    <div className="flex p-2 bg-white rounded-xl">
      <GmailIcon className="flex items-center justify-center bg-[#F1F2F7] rounded-md p-2" />
      <input type="text" placeholder="enter your mail" className="w-full outline-none placeholder:font-normal placeholder:text-sm placeholder:text-[#222222] pl-10" />
    </div>
  );
};

export default InputBox;
