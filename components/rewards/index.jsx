"use client"
import React, { useState, useEffect, useRef } from "react";
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

  const [showPoints, setShowPoints] = useState(false);
  const [fadeState, setFadeState] = useState("fade-in");

  const isAnyClicked = Object.values(whichClick).some(Boolean);

  const isFirstRender = useRef(true); // <-- Track first render

  useEffect(() => {
    if (isFirstRender.current) {
      // First render — no animation
      setShowPoints(isAnyClicked);
      isFirstRender.current = false;
    } else {
      // Subsequent changes — animate
      setFadeState("fade-out");
      const timeout = setTimeout(() => {
        setShowPoints(isAnyClicked);
        setFadeState("fade-in");
      }, 200);

      return () => clearTimeout(timeout);
    }
  }, [isAnyClicked]);

  return (
    <div className="flex flex-col col-span-9 gap-4 md:gap-5">
      <BackNavigate
        arrowClassName={"rotate-180"}
        text="my coins"
        onClick={() =>
          setWhichClick({
            pointsActivity: false,
            specialOffers: false,
            yourPersonalCoupon: false,
            aboutRewardsProgram: false,
          })
        }
      />
      <div className="grid grid-cols-12 gap-4 sm:gap-8">
        <Left />
        <div className={`col-span-12 md:col-span-7 transform transition-all duration-300 ease-in-out ${fadeState === "fade-in" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`} >
          {showPoints ? (
            <PointsActivity />
          ) : (
            <Right setWhichClick={setWhichClick} />
          )}
        </div>
      </div>
    </div>
  );
};

export default RewardsComponent;
