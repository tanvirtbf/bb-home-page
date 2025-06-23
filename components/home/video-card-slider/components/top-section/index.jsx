import Image from "next/image";
import React from "react";

const TopSection = ({ image }) => {
  return (
    <div className="w-full h-full">
      <Image src={image} width={0} height={0} alt={"image"} className="w-full h-full rounded-2xl" />
    </div>
  );
};

export default TopSection;
