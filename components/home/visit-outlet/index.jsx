import React from "react";
import Title from "./components/Title";
import MapImage from "./components/MapImage";
import InputSection from "./components/input";

const VisitOutlet = () => {
  return (
    <div>
      <Title text={"Visit Our Outlet"} />
      <div className="flex flex-col gap-6 mt-5 sm:flex-row sm:gap-8">
        <MapImage />
        <InputSection />
      </div>
    </div>
  );
};

export default VisitOutlet;
