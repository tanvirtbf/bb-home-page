"use client"
import React from "react";
import Slider from "../layout/slider";
import MyImage from "../../public/png/banner1.png";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const heroContent = [
  { id: 1, url: MyImage },
  { id: 2, url: MyImage },
  { id: 3, url: MyImage },
  { id: 4, url: MyImage },
  { id: 5, url: MyImage },
  { id: 6, url: MyImage },
];

const sliderInfo = {
  navigation: true,
  pagination: true,
  spaceBetween: 10,
  autoplay: true,
  slidesPerView: 1,
  modules: [Navigation, Pagination, Autoplay],
};

const sliderClass = {
    parentClass : "h-full w-full flex items-center px-20",
    swiperSlideClass : "bg-yellow-200 py-10 w-full h-full",
    imageClass : "",
}

const Hero = () => {
  return (
    <div>
      <Slider data={heroContent} info={sliderInfo} className={sliderClass} />
    </div>
  );
};

export default Hero;
