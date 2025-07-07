"use client"
import React, { useState } from "react";
import Left from "./components/left";
import Right from "./components/right";
import BackNavigate from "../layout/navigate/BackNavigate";
import PointsActivity from "./components/right/components/points-activity";

const RewardsComponent = () => {
  const [whichClick, setWhichClick] = useState({
    pointsActivity: false,
    specialOffers: false,
    yourPersonalCoupon: false,
    aboutRewardsProgram: false,
  });

  // check if any of the values in whichClick is true
  const isAnyClicked = Object.values(whichClick).some(Boolean);

  return (
    <div className="flex flex-col col-span-9 gap-4 md:gap-5">
      <BackNavigate arrowClassName={"rotate-180"} text="my coins" />
      <div className="grid grid-cols-12 gap-4 sm:gap-8">
        <Left />
        {isAnyClicked ? (
          <PointsActivity />
        ) : (
          <Right setWhichClick={setWhichClick} />
        )}
      </div>
    </div>
  );
};

export default RewardsComponent;
