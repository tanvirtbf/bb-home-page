"use client";
import React from "react";
import Slider from "@/components/layout/slider";
import MyImage from "../../../public/png/banner1.png";
import MobileImage from '../../../public/mobile/image11.png'
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const heroContent = [
  { id: 1, url: MyImage, mobileUrl: MobileImage },
  { id: 2, url: MyImage, mobileUrl: MobileImage },
  { id: 3, url: MyImage, mobileUrl: MobileImage },
  { id: 4, url: MyImage, mobileUrl: MobileImage },
  { id: 5, url: MyImage, mobileUrl: MobileImage },
  { id: 6, url: MyImage, mobileUrl: MobileImage },
];

const sliderInfo = {
  navigation: false,
  // pagination: { clickable: true },
  spaceBetween: 10,
  autoplay: true,
  slidesPerView: 1,
  modules: [Navigation, Pagination, Autoplay],
};

const sliderClass = {
  parentClass: "h-full w-full slider-container",
  swiperSlideClass: " w-full h-full",
  imageParentClass: "w-full h-auto relative rounded-2xl overflow-hidden",
  imageClass: "rounded-2xl",
};

const Hero = () => {
  return (
    <div className="w-full h-full">
      <Slider
        aboutSlide={"image"}
        data={heroContent}
        info={sliderInfo}
        className={sliderClass}
      />
    </div>
  );
};

export default Hero;
