
import Image from "next/image";
import React from "react";

const Slide = ({ slideImage = "" } = {}) => {
  return (
    <div>
      <Image src={slideImage} alt="Image" width={0} height={0} className="w-full h-full object-cover" />
    </div>
  );
};

export default Slide;
