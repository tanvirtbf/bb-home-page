
import Image from "next/image";
import React from "react";

const ImageSlide = ({ slideImage = "", imgClass="", parentCss="", mobileImage="" } = {}) => {
  return (
    <div className={parentCss}>
      <Image src={slideImage} alt="Image"  fill sizes="100vw" className={`${imgClass} sm:block hidden`} />
      <Image src={mobileImage} alt="Image"  fill sizes="100vw" className={`${imgClass} sm:hidden block`} />
    </div>
  );
};

export default ImageSlide;
