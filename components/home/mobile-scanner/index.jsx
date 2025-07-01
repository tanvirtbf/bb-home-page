import React from "react";
import Left from "./components/left";
import Right from "./components/right";
import Middle from "./components/middle";

const MobileScanner = () => {
  return (
    <div className="flex flex-col gap-0 lg:gap-20 lg:flex-row">
      <Left />
      <Middle />
      <Right />
    </div>
  );
};

export default MobileScanner;
