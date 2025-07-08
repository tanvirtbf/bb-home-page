"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

// import image
import ImageOne from "../../../public/png/p11.png";
import ImageTwo from "../../../public/png/p22.png";
import ImageThree from "../../../public/png/p33.png";
import ImageFour from "../../../public/png/p44.png";
import ImageFive from "../../../public/png/p55.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TopSection from "./components/top-section";
import BottomSection from "./components/bottom-section";
import SectionTitle from "@/components/layout/title/section-title";

const ProductSlider = () => {
  // Dummy data array matching your image
  const products = [
    {
      id: 1,
      title: "NIACINAMIDE",
      subtitle: "GUIDE PEPTIDE SERUM LIPSTICK",
      price: "QAR 2000",
      category: "PEPTIDE SERUM",
      tag: "Makeup Reimagined",
      image: ImageOne,
    },
    {
      id: 2,
      title: "BALM-LIKE",
      subtitle: "CARE MOCHA",
      price: "QAR 2000",
      category: "Beauty Tools",
      tag: "MELL",
      image: ImageTwo,
    },
    {
      id: 3,
      title: "VITAMIN C",
      subtitle: "Brightening",
      price: "QAR 2000",
      category: "Beauty Tools",
      tag: "New",
      image: ImageThree,
    },
    {
      id: 4,
      title: "HYALURONIC",
      subtitle: "Acid Serum",
      price: "QAR 2000",
      category: "Beauty Tools",
      tag: "Bestseller",
      image: ImageFour,
    },
    {
      id: 5,
      title: "RETINOL",
      subtitle: "Night Complex",
      price: "QAR 2000",
      category: "Beauty Tools",
      tag: "Pro",
      image: ImageFive,
    },
    {
      id: 6,
      title: "HYALURONIC",
      subtitle: "Acid Serum",
      price: "QAR 2000",
      category: "Beauty Tools",
      tag: "Bestseller",
      image: ImageOne,
    },
    {
      id: 7,
      title: "RETINOL",
      subtitle: "Night Complex",
      price: "QAR 2000",
      category: "Beauty Tools",
      tag: "Pro",
      image: ImageFive,
    },
    {
      id: 8,
      title: "RETINOL",
      subtitle: "Night Complex",
      price: "QAR 2000",
      category: "Beauty Tools",
      tag: "Pro",
      image: ImageTwo,
    },
    {
      id: 9,
      title: "RETINOL",
      subtitle: "Night Complex",
      price: "QAR 2000",
      category: "Beauty Tools",
      tag: "Pro",
      image: ImageThree,
    },

  ];

  const initialSlide = products.length / 2 + 1;

  return (
    <div className="w-full mx-auto my-0">
      <h2 className="text-[10px] sm:text-base font-medium text-[#FF1A58] leading-4 text-center sm:py-2 py-0">
        See what creators are sharing
      </h2>
      <SectionTitle title="FEATURED IN VIDEOS" textAlign="text-center" />

      <div className="w-full mx-auto">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={20} // Increased space between slides
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Navigation, Pagination]}
          loop={true}
          initialSlide={initialSlide}
          className="centered-swiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="mx-2 product-card">
                {" "}
                {/* Added horizontal margin */}
                <TopSection image={product.image} />
                <BottomSection
                  title={product.title}
                  subtitle={product.subtitle}
                  price={product.price}
                  category={product.category}
                  tag={product.tag}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .centered-swiper {
          width: 100%;
          padding: 50px 0;
        }
        @media (max-width: 768px) {
          .centered-swiper {
            padding: 10px 0;
          }
        }

        .centered-swiper .swiper-slide {
          width: 280px;
          height: auto;
          transition: all 0.4s ease;
        }

        .centered-swiper .swiper-slide-active {
          transform: scale(1.15);
          z-index: 10;
        }

        .centered-swiper .swiper-slide-prev,
        .centered-swiper .swiper-slide-next {
          transform: scale(0.95);
          opacity: 0.9;
        }

        .centered-swiper .swiper-slide-prev-prev,
        .centered-swiper .swiper-slide-next-next {
          transform: scale(0.85);
          opacity: 0.8;
        }
      `}</style>

      <style jsx>{`
        .product-card {
          background: white;
          border-radius: 16px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          height: auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default ProductSlider;
