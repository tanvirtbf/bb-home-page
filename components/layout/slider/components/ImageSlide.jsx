
import Image from "next/image";
import React from "react";

const ImageSlide = ({ slideImage = "" } = {}) => {
  return (
    <div className="w-full h-[600px] relative rounded-2xl overflow-hidden">
      <Image src={slideImage} alt="Image"  fill sizes="100vw" className="object-cover" />
    </div>
  );
};

export default ImageSlide;
