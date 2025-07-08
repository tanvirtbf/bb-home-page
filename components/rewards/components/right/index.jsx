"use client";
import React from "react";
import SingleDropLine from "./components/drop-line";
import PointActivityIcon from "@/components/layout/svg/PointActivityIcon";
import GiftIcon from "@/components/layout/svg/GiftIcon";
import CuponIcon from "@/components/layout/svg/CuponIcon";
import AboutRewardIcon from "@/components/layout/svg/AboutRewardIcon";

const Right = ({ setWhichClick = () => {} } = {}) => {
  return (
    <div className="flex flex-col col-span-12 gap-2 sm:col-span-7 md:gap-4">
      <SingleDropLine
        icon={<PointActivityIcon />}
        title="Points Activity"
        onClick={setWhichClick}
        isCommingSoon={false}
        bar="points-activity"
      />
      <SingleDropLine
        icon={<GiftIcon />}
        title="Special offers"
        onClick={setWhichClick}
        isCommingSoon={true}
        bar="special-offers"
      />
      <SingleDropLine
        icon={<CuponIcon />}
        title="Your personal coupon"
        onClick={setWhichClick}
        isCommingSoon={true}
        bar="coupon"
      />
      <SingleDropLine
        icon={<AboutRewardIcon />}
        title="About rewards program"
        onClick={setWhichClick}
        isCommingSoon={false}
        bar="rewards-program"
      />
    </div>
  );
};

export default Right;
