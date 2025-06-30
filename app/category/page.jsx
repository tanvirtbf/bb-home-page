import Hero from "@/components/home/hero";
import ProductCard from "@/components/layout/cards/product-card";
import Badge from "@/components/layout/cards/product-card/components/Badge";
import React from "react";



const productCardData = [
  {
    id: 1,
    imageUrl: "/png/category/image1.png",
    brandName: "cathy doll",
    shortDescription: "oily & combined skin",
    ratings: {rating: 4.9, amount: 134},
    colors: ["red", "blue", "green", "yellow"],
    productSize: ["5 ml", "10 ml", "15 ml"],
    productName: "AXIS-Y Dark Spot Correcting Glow Serum 5ml healing cream",
    offer: "buy 2 @ 1200",
    price : {offerPrice: 1200, actualPrice: 1500}
  },
  {
    id: 2,
    imageUrl: "/png/category/imag2.png",
    brandName: "cathy doll",
    shortDescription: "oily & combined skin",
    ratings: {rating: 4.9, amount: 134},
    colors: ["red", "green", "yellow", "orange", "purple"],
    productSize: ["5 ml", "10 ml", "15 ml"],
    productName: "AXIS-Y Dark Spot Correcting Glow Serum 5ml healing cream",
    offer: "buy 2 @ 1200",
    price : {offerPrice: 1200, actualPrice: 1500}
  },
  {
    id: 3,
    imageUrl: "/png/category/image3.png",
    brandName: "cathy doll",
    shortDescription: "oily & combined skin",
    ratings: {rating: 4.9, amount: 134},
    colors: ["red", "blue", "green", "yellow", "indigo"],
    productSize: ["5 ml", "10 ml", "15 ml"],
    productName: "AXIS-Y Dark Spot Correcting Glow Serum 5ml healing cream",
    offer: "buy 2 @ 1200",
    price : {offerPrice: 1200, actualPrice: 1500}
  },
  {
    id: 4,
    imageUrl: "/png/category/image4.png",
    brandName: "cathy doll",
    shortDescription: "oily & combined skin",
    ratings: {rating: 4.9, amount: 134},
    colors: ["red", "blue", "orange", "purple", "indigo"],
    productSize: ["5 ml", "10 ml", "15 ml"],
    productName: "AXIS-Y Dark Spot Correcting Glow Serum 5ml healing cream",
    offer: "buy 2 @ 1200",
    price : {offerPrice: "QAR 1200", actualPrice: "QAR 1500"}
  },
  {
    id: 5,
    imageUrl: "/png/category/image5.png",
    brandName: "cathy doll",
    shortDescription: "oily & combined skin",
    ratings: {rating: 4.9, amount: 134},
    colors: ["red", "blue", "green", "yellow", "orange", "purple", "indigo"],
    productSize: ["5 ml", "10 ml", "15 ml"],
    productName: "AXIS-Y Dark Spot Correcting Glow Serum 5ml healing cream",
    offer: "buy 2 @ 1200",
    price : {offerPrice: 1200, actualPrice: 1500}
  },
]

const Category = () => {
  return (
    <div className="max-w-[1670px] mx-auto overflow-hidden min-h-screen h-auto px-4 sm:px-10 py-3 sm:py-5">
      <div className="w-full h-auto pb-3 sm:pb-5">
        <Hero />
      </div>
      <div className="flex flex-wrap gap-4">
        {productCardData.map((item) => (
          <ProductCard key={item.id} cardData={item} >
            <Badge className="absolute text-white bg-black top-2 left-2 rounded-xl py-[2px] px-2 font-normal text-xs" text="Sale" />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
