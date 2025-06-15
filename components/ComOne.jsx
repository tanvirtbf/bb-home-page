"use client";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex items-center px-20">
      <Swiper
        navigation={true}
        pagination={true}
        spaceBetween={10}
        autoplay={true}
        slidesPerView={5}
        modules={[Navigation, Pagination, Autoplay]}
      >
        <SwiperSlide className="bg-yellow-200 py-10">
          <Image src="/public/photo.jpg" width={200} height={200} className="bg-blue-400"/>
        </SwiperSlide>
        <SwiperSlide className="bg-yellow-200 py-10">
          <Image src="/public/photo.jpg" width={200} height={200} className="bg-blue-400"/>
        </SwiperSlide>
        <SwiperSlide className="bg-yellow-200 py-10">
          <Image src="/public/photo.jpg" width={200} height={200} className="bg-blue-400"/>
        </SwiperSlide>
        <SwiperSlide className="bg-yellow-200 py-10">
          <Image src="/public/photo.jpg" width={200} height={200} className="bg-blue-400"/>
        </SwiperSlide>
        <SwiperSlide className="bg-yellow-200 py-10">
          <Image src="/public/photo.jpg" width={200} height={200} className="bg-blue-400"/>
        </SwiperSlide>
        <SwiperSlide className="bg-yellow-200 py-10">
          <Image src="/public/photo.jpg" width={200} height={200} className="bg-blue-400"/>
        </SwiperSlide>
        <SwiperSlide className="bg-yellow-200 py-10">
          <Image src="/public/photo.jpg" width={200} height={200} className="bg-blue-400"/>
        </SwiperSlide>
        <SwiperSlide className="bg-yellow-200 py-10">
          <Image src="/public/photo.jpg" width={200} height={200} className="bg-blue-400"/>
        </SwiperSlide>
        <SwiperSlide className="bg-yellow-200 py-10">
          <Image src="/public/photo.jpg" width={200} height={200} className="bg-blue-400"/>
        </SwiperSlide>
        <SwiperSlide className="bg-yellow-200 py-10">
          <Image src="/public/photo.jpg" width={200} height={200} className="bg-blue-400"/>
        </SwiperSlide>
        <SwiperSlide className="bg-yellow-200 py-10">
          <Image src="/public/photo.jpg" width={200} height={200} className="bg-blue-400"/>
        </SwiperSlide>
        <SwiperSlide className="bg-yellow-200 py-10">
          <Image src="/public/photo.jpg" width={200} height={200} className="bg-blue-400"/>
        </SwiperSlide>
        <SwiperSlide className="bg-yellow-200 py-10">
          <Image src="/public/photo.jpg" width={200} height={200} className="bg-blue-400"/>
        </SwiperSlide>
        <SwiperSlide className="bg-yellow-200 py-10">
          <Image src="/public/photo.jpg" width={200} height={200} className="bg-blue-400"/>
        </SwiperSlide>
        <SwiperSlide className="bg-yellow-200 py-10">
          <Image src="/public/photo.jpg" width={200} height={200} className="bg-blue-400"/>
        </SwiperSlide>
        <SwiperSlide className="bg-yellow-200 py-10">
          <Image src="/public/photo.jpg" width={200} height={200} className="bg-blue-400"/>
        </SwiperSlide>
        <SwiperSlide className="bg-yellow-200 py-10">
          <Image src="/public/photo.jpg" width={200} height={200} className="bg-blue-400"/>
        </SwiperSlide>
        <SwiperSlide className="bg-yellow-200 py-10">
          <Image src="/public/photo.jpg" width={200} height={200} className="bg-blue-400"/>
        </SwiperSlide>
        <SwiperSlide className="bg-yellow-200 py-10">
          <Image src="/public/photo.jpg" width={200} height={200} className="bg-blue-400"/>
        </SwiperSlide>
        <SwiperSlide className="bg-yellow-200 py-10">
          <Image src="/public/photo.jpg" width={200} height={200} className="bg-blue-400"/>
        </SwiperSlide>
        <SwiperSlide className="bg-yellow-200 py-10">
          <Image src="/public/photo.jpg" width={200} height={200} className="bg-blue-400"/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
