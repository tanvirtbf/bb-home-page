"use client";
import React from "react";
import CardImage from "../../../public/png/card1.jpg";
import TitleOne from "../../../public/png/title1.png";
import TitleTwo from "../../../public/png/title2.png";
import TitleThree from "../../../public/png/title3.png";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Slider from "@/components/layout/slider";


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
  navigation: true,
  pagination: { clickable: true },
  spaceBetween: 10,
  autoplay: true,
  slidesPerView: 5,
  modules: [Navigation, Pagination, Autoplay],
};

const sliderClass = {
  parentClass: "h-full w-full slider-container",
  swiperSlideClass: " w-full h-full",
  imageParentClass: "w-full h-[600px] relative rounded-2xl overflow-hidden",
  imageClass: "",
};

const BestOfferInBrands = () => {
  return (
    <div className="flex gap-3">
      <Slider
        aboutSlide={"card"}
        data={cardData}
        info={sliderInfo}
        className={sliderClass}
      />
    </div>
  );
};

export default BestOfferInBrands;
