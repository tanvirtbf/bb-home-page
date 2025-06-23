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
    title: TitleOne,
    price: "Starting At ৳799",
    shortDesc: "Collagen Supplements",
  },
  {
    id: 2,
    url: CardImage,
    title: TitleTwo,
    price: "Starting At ৳799",
    shortDesc: "Collagen Supplements",
  },
  {
    id: 3,
    url: CardImage,
    title: TitleThree,
    price: "Starting At ৳799",
    shortDesc: "Collagen Supplements",
  },
  {
    id: 4,
    url: CardImage,
    title: TitleOne,
    price: "Starting At ৳799",
    shortDesc: "Collagen Supplements",
  },
  {
    id: 5,
    url: CardImage,
    title: TitleTwo,
    price: "Starting At ৳799",
    shortDesc: "Collagen Supplements",
  },
  {
    id: 6,
    url: CardImage,
    title: TitleThree,
    price: "Starting At ৳799",
    shortDesc: "Collagen Supplements",
  },
  {
    id: 7,
    url: CardImage,
    title: TitleOne,
    price: "Starting At ৳799",
    shortDesc: "Collagen Supplements",
  },
  {
    id: 8,
    url: CardImage,
    title: TitleTwo,
    price: "Starting At ৳799",
    shortDesc: "Collagen Supplements",
  },
  {
    id: 9,
    url: CardImage,
    title: TitleThree,
    price: "Starting At ৳799",
    shortDesc: "Collagen Supplements",
  },
  {
    id: 10,
    url: CardImage,
    title: TitleOne,
    price: "Starting At ৳799",
    shortDesc: "Collagen Supplements",
  },
  {
    id: 11,
    url: CardImage,
    title: TitleTwo,
    price: "Starting At ৳799",
    shortDesc: "Collagen Supplements",
  },
  {
    id: 12,
    url: CardImage,
    title: TitleThree,
    price: "Starting At ৳799",
    shortDesc: "Collagen Supplements",
  },
];

const sliderInfo = {
  // navigation: true,
  // pagination: { clickable: true },
  spaceBetween: 10,
  autoplay: true,
  slidesPerView: 5,
  modules: [Navigation, Pagination, Autoplay],
  breakpoints: {
    0: {
      slidesPerView: 2.7, // Mobile (0px and up)
    },
    768: {
      slidesPerView: 3, // Tablet (768px and up)
    },
    1024: {
      slidesPerView: 5, // Desktop (1024px and up) – your original setting
    },
  },
};

const sliderClass = {
  parentClass: "h-full w-full slider-container",
  swiperSlideClass: " w-full h-full",
  imageParentClass: "w-full relative rounded-2xl overflow-hidden",
  imageClass: "rounded-xl",
};

const cardCssClass = {
  title: {
    type: "icon",
    css : "w-[70px] h-[33px] sm:w-[118px] sm:h-[55px]"
  },
  price: {
    type: "text",
    css: "sm:text-xl text-sm font-semibold leading-5 text-[#FF1A58] text-center",
  },
  shortDesc: {
    type: "text",
    css : "text-[#5A5A5A] font-semibold text-[10px] sm:text-sm leading-5 text-center"
  },
}

const BestOfferInBrands = () => {
  return (
    <div className="flex flex-col gap-1 sm:gap-7">
      <SectionTitle title="Best offer in brands" />
      <Slider
        aboutSlide={"card"}
        data={cardData}
        info={sliderInfo}
        className={sliderClass}
        cardCss={cardCssClass}
      />
    </div>
  );
};

export default BestOfferInBrands;
