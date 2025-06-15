
import Image from "next/image";
import React from "react";

const Slide = ({ slideImage = "" } = {}) => {
  return (
    <div className="w-full h-full">
      <Image src={slideImage} alt="Image" width={0} height={0} className="w-full h-full rounded-2xl" />
    </div>
  );
};

export default Slide;
