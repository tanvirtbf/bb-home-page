"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProductSlider = () => {
  // Dummy data array matching your image
  const products = [
    {
      id: 1,
      title: 'NACINAMIDE',
      subtitle: 'With LIPSTICK',
      price: 'QAR 2000',
      category: 'PEPTIDE SERUM',
      tag: 'Makeup Reimagined'
    },
    {
      id: 2,
      title: 'BALM-LIKE',
      subtitle: 'CARE MOCHA',
      price: 'QAR 2000',
      category: 'Beauty Tools',
      tag: 'MELL'
    },
    {
      id: 3,
      title: 'VITAMIN C',
      subtitle: 'Brightening',
      price: 'QAR 2000',
      category: 'Beauty Tools',
      tag: 'New'
    },
    {
      id: 4,
      title: 'HYALURONIC',
      subtitle: 'Acid Serum',
      price: 'QAR 2000',
      category: 'Beauty Tools',
      tag: 'Bestseller'
    },
    {
      id: 5,
      title: 'RETINOL',
      subtitle: 'Night Complex',
      price: 'QAR 2000',
      category: 'Beauty Tools',
      tag: 'Pro'
    }
  ];

  return (
    <div className="slider-container">
      <h2 className="section-title">See what creators are sharing</h2>
      <p className="section-subtitle">FEATURED IN VIDEOS</p>
      
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        initialSlide={2} // Start with center slide
        className="centered-swiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="product-card">
              <div className="product-tag">{product.tag}</div>
              <h3 className="product-title">{product.title}</h3>
              <p className="product-subtitle">{product.subtitle}</p>
              <p className="product-category">{product.category}</p>
              <p className="product-price">{product.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .centered-swiper {
          width: 100%;
          padding: 50px 0;
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
        .slider-container {
          padding: 20px;
          max-width: 1200px;
          margin: 0 auto;
          font-family: 'Arial', sans-serif;
        }
        
        .section-title {
          text-align: center;
          font-size: 24px;
          margin-bottom: 5px;
          color: #333;
        }
        
        .section-subtitle {
          text-align: center;
          font-size: 16px;
          margin-bottom: 30px;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        
        .product-card {
          background: white;
          border-radius: 15px;
          padding: 25px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          height: 380px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          position: relative;
          margin: 0 10px;
        }
        
        .product-tag {
          position: absolute;
          top: 15px;
          left: 15px;
          background: #f8f8f8;
          padding: 5px 10px;
          border-radius: 20px;
          font-size: 12px;
          color: #666;
        }
        
        .product-title {
          font-size: 24px;
          margin: 10px 0;
          color: #222;
          font-weight: bold;
        }
        
        .product-subtitle {
          font-size: 14px;
          color: #888;
          margin-bottom: 15px;
        }
        
        .product-category {
          font-size: 13px;
          color: #555;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .product-price {
          font-size: 16px;
          color: #000;
          font-weight: bold;
          margin-top: auto;
        }
      `}</style>
    </div>
  );
};

export default ProductSlider;