"use client";
import React from "react";
import Slider from "@/components/layout/slider";
import MyImage from "../../../public/png/imge1.png";
import MobileImage from '../../../public/mobile/image222.png'
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import SectionTitle from "@/components/layout/title/section-title";

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
  pagination: { clickable: true },
  spaceBetween: 10,
  autoplay: true,
  slidesPerView: 3,
  modules: [Navigation, Pagination, Autoplay],
  breakpoints: {
    0: {
      slidesPerView: 1.5, // Mobile (0px and up)
    },
    768: {
      slidesPerView: 2.2, // Tablet (768px and up)
    },
    1024: {
      slidesPerView: 3, // Desktop (1024px and up) – your original setting
    },
  },
};

const sliderClass = {
  parentClass: "h-full w-full slider-container h-60",
  swiperSlideClass: "w-full h-full",
  imageParentClass: "w-full relative",
  imageClass: "w-full h-[96px] sm:h-[221px] rounded-2xl",
};

const OfferToSayYes = () => {
  return (
    <div className="flex flex-col gap-3 sm:gap-9">
      <SectionTitle title="Offers to say yes" />
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
