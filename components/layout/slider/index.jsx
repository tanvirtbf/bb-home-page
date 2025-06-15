"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Slide from "./components/Slide";


export default function Slider({ data = [], info={}, className="" } = {}) {
    const {navigation, pagination, spaceBetween, autoplay, slidesPerView, modules} = info
  return (
    <div className={className.parentClass}>
      <Swiper
        navigation={navigation}
        pagination={pagination}
        spaceBetween={spaceBetween}
        autoplay={autoplay}
        slidesPerView={slidesPerView}
        modules={modules}
      >
        {data.map((item, i) => (
          <SwiperSlide className={className.swiperSlideClass}>
            <Slide key={item.id} slideImage={item.url} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
