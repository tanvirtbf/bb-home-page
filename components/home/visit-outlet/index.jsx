import React from "react";
import MapImage from "./components/MapImage";
import InputSection from "./components/input";
import SectionTitle from "@/components/layout/title/section-title";

const VisitOutlet = () => {
  return (
    <div>
      <SectionTitle title="Visit our outlet" textAlign="text-left" />
      <div className="flex flex-col gap-6 mt-5 sm:flex-row sm:gap-8">
        <MapImage />
        <InputSection />
      </div>
    </div>
  );
};

export default VisitOutlet;
