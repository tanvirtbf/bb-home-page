import React from "react";
import Header from "./components/Header";
import SingleSection from "./components/single-section";

const PointsActivity = () => {
  return (
    <div className="flex flex-col col-span-12 gap-3 sm:col-span-7">
      <Header />
      <div className="flex flex-col gap-7">
        <SingleSection />
        <SingleSection />
        <SingleSection />
      </div>
    </div>
  );
};

export default PointsActivity;
