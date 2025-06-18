"use client";
import React from "react";
import Slider from "@/components/layout/slider";
import MyImage from "../../../public/png/imge1.png";
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
  navigation: false,
  pagination: { clickable: true },
  spaceBetween: 10,
  autoplay: true,
  slidesPerView: 3,
  modules: [Navigation, Pagination, Autoplay],
};

const sliderClass = {
  parentClass: "h-full w-full slider-container h-60",
  swiperSlideClass: "w-full h-full",
  imageParentClass: "w-full h-[200px] relative rounded-2xl overflow-hidden",
  imageClass: "object-cover",
};

const OfferToSayYes = () => {
  return (
    <div className="w-full h-full">
      <h2 className="mb-4 text-4xl font-bold leading-7 text-center text-black">Offers To Say Yes</h2>
      <Slider
        aboutSlide={"image"}
        data={heroContent}
        info={sliderInfo}
        className={sliderClass}
      />
    </div>
  );
};

export default OfferToSayYes;
