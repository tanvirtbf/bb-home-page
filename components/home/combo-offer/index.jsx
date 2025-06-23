"use client";
import React from "react";
import CardImage from "../../../public/png/image5.png";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Slider from "@/components/layout/slider";
import SectionTitle from "@/components/layout/title/section-title";

const cardData = [
  {
    id: 1,
    url: CardImage,
    price: "Starting At ৳799",
    shortDesc: "Collagen Supplements",
  },
  {
    id: 2,
    url: CardImage,
    price: "Starting At ৳799",
    shortDesc: "Collagen Supplements",
  },
  {
    id: 3,
    url: CardImage,
    price: "Starting At ৳799",
    shortDesc: "Collagen Supplements",
  },
  {
    id: 4,
    url: CardImage,
    price: "Starting At ৳799",
    shortDesc: "Collagen Supplements",
  },
  {
    id: 5,
    url: CardImage,
    price: "Starting At ৳799",
    shortDesc: "Collagen Supplements",
  },
  {
    id: 6,
    url: CardImage,
    price: "Starting At ৳799",
    shortDesc: "Collagen Supplements",
  },
  {
    id: 7,
    url: CardImage,
    price: "Starting At ৳799",
    shortDesc: "Collagen Supplements",
  },
  {
    id: 8,
    url: CardImage,
    price: "Starting At ৳799",
    shortDesc: "Collagen Supplements",
  },
  {
    id: 9,
    url: CardImage,
    price: "Starting At ৳799",
    shortDesc: "Collagen Supplements",
  },
  {
    id: 10,
    url: CardImage,
    price: "Starting At ৳799",
    shortDesc: "Collagen Supplements",
  },
  {
    id: 11,
    url: CardImage,
    price: "Starting At ৳799",
    shortDesc: "Collagen Supplements",
  },
  {
    id: 12,
    url: CardImage,
    price: "Starting At ৳799",
    shortDesc: "Collagen Supplements",
  },
];

const sliderInfo = {
  // navigation: true,
  // pagination: { clickable: true },
  spaceBetween: 10,
  autoplay: true,
  slidesPerView: 3,
  modules: [Navigation, Pagination, Autoplay],
  breakpoints: {
    0: {
      slidesPerView: 1.1, // Mobile (0px and up)
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
  swiperSlideClass: "w-full h-full",
  imageParentClass: "w-full h-[600px] relative rounded-2xl overflow-hidden",
  imageClass: "w-full h-full object-cover rounded-xl",
};

const ComboOffer = () => {
  return (
    <div className="flex flex-col gap-3">
      <SectionTitle title="Exclusive Accessories" />
      <Slider
        aboutSlide={"combo-card"}
        data={cardData}
        info={sliderInfo}
        className={sliderClass}
      />
    </div>
  );
};

export default ComboOffer;
