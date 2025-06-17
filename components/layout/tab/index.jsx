import React from "react";
import SingleTab from "./components/SingleTab";

const totalTabs = [
  { id: 1, name: "Skin Care" },
  { id: 2, name: "Make Up" },
  { id: 3, name: "Accessories" },
  { id: 4, name: "Bath & Body" },
];

const renderTabs = () => totalTabs.map((tab) => <SingleTab key={tab.id} name={tab.name} />);

const Tab = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      {renderTabs()}
    </div>
  );
};

export default Tab;
