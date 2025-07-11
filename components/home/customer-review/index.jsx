"use client";
import React from "react";
import Slider from "@/components/layout/slider";
import MyImage from "../../../public/png/banner1.png";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import SectionTitle from "@/components/layout/title/section-title";

const data = [
  {
    id: 1,
    image: MyImage,
    title: "Best ever beauty products",
    star: 4,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    name: "John Doe",
    date: "12/12/2021",
    isVarifiedUser: true,
  },
  {
    id: 2,
    image: MyImage,
    title: "Best ever beauty products",
    star: 4,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    name: "John Doe",
    date: "12/12/2021",
    isVarifiedUser: true,
  },
  {
    id: 3,
    image: MyImage,
    title: "Best ever beauty products",
    star: 4,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    name: "John Doe",
    date: "12/12/2021",
    isVarifiedUser: true,
  },
  {
    id: 4,
    image: MyImage,
    title: "Best ever beauty products",
    star: 4,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    name: "John Doe",
    date: "12/12/2021",
    isVarifiedUser: true,
  },
  {
    id: 5,
    image: MyImage,
    title: "Best ever beauty products",
    star: 4,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    name: "John Doe",
    date: "12/12/2021",
    isVarifiedUser: true,
  },
  {
    id: 6,
    image: MyImage,
    title: "Best ever beauty products",
    star: 4,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    name: "John Doe",
    date: "12/12/2021",
    isVarifiedUser: true,
  },
];

const sliderInfo = {
  navigation: false,
  pagination: { clickable: true },
  spaceBetween: 20,
  autoplay: true,
  slidesPerView: 4,
  modules: [Navigation, Pagination, Autoplay],
  breakpoints: {
    0: {
      slidesPerView: 1.4, // Mobile (0px and up)
    },
    768: {
      slidesPerView: 2.2, // Tablet (768px and up)
    },
    1024: {
      slidesPerView: 3.8, // Desktop (1024px and up) – your original setting
    },
  },
};

const sliderClass = {
  parentClass: "h-full w-full slider-container",
  swiperSlideClass: " w-full h-full",
  imageParentClass: "w-full h-[600px] relative rounded-2xl overflow-hidden",
  imageClass: "rounded-xl",
};

const CustomerReview = () => {
  return (
    <div className="flex flex-col gap-3 sm:gap-9">
      <SectionTitle title="Customer reviews" />
      <Slider
        aboutSlide={"review-card"}
        data={data}
        info={sliderInfo}
        className={sliderClass}
      />
    </div>
  );
};

export default CustomerReview;
