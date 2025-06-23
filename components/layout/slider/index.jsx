"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ImageSlide from "./components/ImageSlide";
import CardSlide from "./components/CardSlide";
import ReviewCard from "../cards/review-card";
import ComboCard from "../cards/combo-card";


export default function Slider({ aboutSlide="", data = [], info={}, className={}, cardCss={} } = {}) {

  const {navigation, pagination, spaceBetween, autoplay, slidesPerView, modules, breakpoints} = info

  return (
    <div className={className.parentClass}>
      <Swiper
        navigation={navigation}
        pagination={pagination}
        spaceBetween={spaceBetween}
        autoplay={autoplay}
        slidesPerView={slidesPerView}
        modules={modules}
        breakpoints={breakpoints}
      >
        {data.map((item, i) => (
          <SwiperSlide className={className.swiperSlideClass}>
            {aboutSlide==="image" && <ImageSlide key={item.id} slideImage={item.url} mobileImage={item.mobileUrl} parentCss={className.imageParentClass} imgClass={className.imageClass} />}
            {aboutSlide==="card" && <CardSlide key={item.id} data={item} imgClass={className} cardCss={cardCss} />}
            {aboutSlide==="review-card" && <ReviewCard key={item.id} data={item} imgClass={className.imageClass} />}
            {aboutSlide==="combo-card" && <ComboCard key={item.id} data={item} imgClass={className.imageClass} />}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
