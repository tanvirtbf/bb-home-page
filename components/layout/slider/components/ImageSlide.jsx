
import Image from "next/image";
import React from "react";

const ImageSlide = ({ slideImage = "", imgClass="", parentCss="" } = {}) => {
  return (
    <div className={parentCss}>
      <Image src={slideImage} alt="Image"  fill sizes="100vw" className={imgClass} />
    </div>
  );
};

export default ImageSlide;
