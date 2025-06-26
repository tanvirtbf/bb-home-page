import React from "react";
import Left from "./components/left";
import Right from "./components/right";
import Middle from "./components/middle";

const MobileScanner = () => {
  return (
    <div className="flex flex-col gap-0 sm:gap-20 sm:flex-row">
      <Left />
      <Middle />
      <Right />
    </div>
  );
};

export default MobileScanner;
