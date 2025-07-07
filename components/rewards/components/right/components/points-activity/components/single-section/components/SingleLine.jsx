import React from "react";
import CreateAccountIcon from "./icons/CreateAccountIcon";

const SingleLine = () => {
  return (
    <div className="flex items-center justify-between gap-3 py-3 border-b border-b-[#ECECEE]">
      <CreateAccountIcon />
      <div className="flex flex-col gap-1 grow">
        <h4 className="text-sm font-normal leading-[140%] text-black">Create account</h4>
        <p className="font-normal text-[10px] leading-3 text-[#717171]">Expires on 01 Mar 2025</p>
      </div>
      <div className="font-medium text-xs leading-4 text-[#00CA8D]">+50</div>
    </div>
  );
};

export default SingleLine;