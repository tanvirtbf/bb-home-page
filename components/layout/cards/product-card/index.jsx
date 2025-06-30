import React from "react";
import Banner from "./components/Banner";
import ShortDescription from "./components/ShortDescription";
import BrandName from "./components/BrandName";
import ProductColors from "./components/ProductColors";
import Offer from "./components/Offer";
import Price from "./components/Price";
import AddToCartButton from "./components/AddToCartButton";
import Ratings from "./components/Ratings";
import ProductName from "./components/ProductName";
import ProductSize from "./components/ProductSize";

// interface cardData {
//   id: number;
//   imageUrl: string;
//   brandName: string;
//   shortDescription: string;
//   ratings: {
//     rating: number;
//     amount: number;
//   };
//   colors: string[];
//   productName: string;
//   offer: string;
//   price: {
//     offerPrice: string;
//     actualPrice: string;
//   };
// }

const ProductCard = (props) => {
  const {children, cardData} = props

  return (
    <div className="relative h-auto px-3 py-2 sm:px-4 sm:py-3 max-w-72 min-w-56 border border-[#F1F2F7] rounded-lg flex flex-col gap-[6px]">
      {children ? children : null}
      {cardData.imageUrl && <Banner image={cardData.imageUrl ?? null} />}
      {cardData.brandName && <BrandName brandName={cardData.brandName ?? null} />}
      {cardData.shortDescription && <ShortDescription shortDescription={cardData.shortDescription ?? null} />}
      {cardData.ratings && <Ratings rating={cardData.ratings.rating ?? null} amount={cardData.ratings.amount ?? null} />}
      {cardData.colors && <ProductColors colors={cardData.colors ?? null} />}
      {cardData.productSize && <ProductSize productSize={cardData.productSize ?? null} />}
      {cardData.productName && <ProductName productName={cardData.productName ?? null} />}
      {cardData.offer && <Offer offer={cardData.offer ?? null} />}
      {cardData.price && <Price offerPrice={cardData.price.offerPrice ?? null} actualPrice={cardData.price.actualPrice ?? null} />}
      <AddToCartButton />
    </div>
  );
};

export default ProductCard;
