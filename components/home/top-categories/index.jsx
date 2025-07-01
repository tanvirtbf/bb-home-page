"use client";
import React from "react";
import CardImage from "../../../public/png/card1.jpg";
import TitleOne from "../../../public/png/title1.png";
import TitleTwo from "../../../public/png/title2.png";
import TitleThree from "../../../public/png/title3.png";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Slider from "@/components/layout/slider";
import SectionTitle from "@/components/layout/title/section-title";

const cardData = [
  {
    id: 1,
    url: CardImage,
    title: "Lip Bulm",
    price: "Starting At ৳799",
    shortDesc: "Collagen Supplements",
  },
  {
    id: 2,
    url: CardImage,
    title: "Lip Bulm",
    price: "Starting At ৳799",
    shortDesc: "Collagen Supplements",
  },
  {
    id: 3,
    url: CardImage,
    title: "Lip Bulm",
    price: "Starting At ৳799",
    shortDesc: "Collagen Supplements",
  },
  {
    id: 4,
    url: CardImage,
    title: "Lip Bulm",
    price: "Starting At ৳799",
    shortDesc: "Collagen Supplements",
  },
  {
    id: 5,
    url: CardImage,
    title: "Lip Bulm",
    price: "Starting At ৳799",
    shortDesc: "Collagen Supplements",
  },
  {
    id: 6,
    url: CardImage,
    title: "Lip Bulm",
    price: "Starting At ৳799",
    shortDesc: "Collagen Supplements",
  },
  {
    id: 7,
    url: CardImage,
    title: "Lip Bulm",
    price: "Starting At ৳799",
    shortDesc: "Collagen Supplements",
  },
  {
    id: 8,
    url: CardImage,
    title: "Lip Bulm",
    price: "Starting At ৳799",
    shortDesc: "Collagen Supplements",
  },
  {
    id: 9,
    url: CardImage,
    title: "Lip Bulm",
    price: "Starting At ৳799",
    shortDesc: "Collagen Supplements",
  },
  {
    id: 10,
    url: CardImage,
    title: "Lip Bulm",
    price: "Starting At ৳799",
    shortDesc: "Collagen Supplements",
  },
  {
    id: 11,
    url: CardImage,
    title: "Lip Bulm",
    price: "Starting At ৳799",
    shortDesc: "Collagen Supplements",
  },
  {
    id: 12,
    url: CardImage,
    title: "Lip Bulm",
    price: "Starting At ৳799",
    shortDesc: "Collagen Supplements",
  },
];

const sliderInfo = {
  navigation: false,
  // pagination: { clickable: true },
  spaceBetween: 10,
  autoplay: false,
  slidesPerView: 5,
  modules: [Navigation, Pagination, Autoplay],
  breakpoints: {
    0: {
      slidesPerView: 2.8, // Mobile (0px and up)
    },
    768: {
      slidesPerView: 4.2, // Tablet (768px and up)
    },
    1024: {
      slidesPerView: 8, // Desktop (1024px and up) – your original setting
    },
  },
};

const sliderClass = {
  parentClass: "h-full w-full slider-container",
  swiperSlideClass: "w-full h-full rounded-full hello",
  imageClass: "rounded-full sm:w-[120px] w-20 sm:h-[120px] h-20",
  imageParentClass: "w-full h-full rounded-full overflow-hidden flex justify-center items-center mb-3 sm:mb-10",
};

const cardCssClass = {
  title : {
    type: "text",
    css: "text-black font-semibold text-sm sm:text-xl leading-5 text-center pb-1",
  },
  price: {
    type: "text",
    css: "sm:text-xl text-sm font-semibold leading-5 text-[#FF1A58] text-center",
  },
  shortDesc: false
};

const TopCategories = () => {
  return (
    <div className="flex flex-col gap-[2px] sm:gap-7">
      <SectionTitle title="Top categroies" />
      <div className="sm:py-10 py-3 sm:bg-[#EDD0BC] bg-white rounded-xl">
        <Slider
          aboutSlide={"card"}
          data={cardData}
          info={sliderInfo}
          className={sliderClass}
          cardCss={cardCssClass}
        />
      </div>
    </div>
  );
};

export default TopCategories;
