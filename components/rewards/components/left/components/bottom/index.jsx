import BronzeIcon from "@/components/layout/svg/BronzeIcon";
import React from "react";

const BottomSection = () => {
  return (
    <div className="rounded-xl border border-[#DDDDDD] p-4 flex justify-between items-center">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-normal text-black">Beauty Points</h3>
        <h2 className="text-3xl font-semibold bg-gradient-to-r from-[#ECB000] to-[#E98900] bg-clip-text text-transparent leading-6">
          3590
        </h2>
        <p className="text-[#FF1A58] text-[10px] font-normal">35 points expires soon</p>
      </div>
      <BronzeIcon />
    </div>
  );
};

export default BottomSection;
