"use client";
import CommingSoon from "@/components/layout/CommingSoon";
import RightArrowIcon from "@/components/layout/svg/RightArrowIcon";
import React from "react";

const SingleDropLine = ({ icon = () => {}, title = "", onClick = () => {}, isCommingSoon = false, bar = "" } = {}) => {
  
  const handleClick = () => {
    if (bar === "points-activity") {
      onClick({
        pointsActivity: true,
        specialOffers: false,
        yourPersonalCoupon: false,
        aboutRewardsProgram: false,
      });
    } else if (bar === "special-offers") {
      onClick({
        pointsActivity: false,
        specialOffers: true,
        yourPersonalCoupon: false,
        aboutRewardsProgram: false,
      });
    } else if (bar === "coupon") {
      onClick({
        pointsActivity: false,
        specialOffers: false,
        yourPersonalCoupon: true,
        aboutRewardsProgram: false,
      });
    } else if (bar === "rewards-program") {
      onClick({
        pointsActivity: false,
        specialOffers: false,
        yourPersonalCoupon: false,
        aboutRewardsProgram: true,
      });
    }
  };

  return (
    <div
      className="flex items-center gap-2 px-2 py-2 transition-all duration-300 ease-in-out rounded-md cursor-pointer hover:bg-gray-100 hover:shadow-md"
      onClick={handleClick}
    >
      {icon}
      {isCommingSoon && (
        <div className="flex items-center gap-2">
          <h3>{title}</h3> <CommingSoon />
        </div>
      )}
      {!isCommingSoon && <h3>{title}</h3>}
      <div className="flex items-center justify-end grow">
        <RightArrowIcon stroke="black" />
      </div>
    </div>
  );
};

export default SingleDropLine;
