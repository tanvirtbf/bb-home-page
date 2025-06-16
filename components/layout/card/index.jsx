import React from "react";
import ImageContainer from "./components/ImageContainer";
import TitleContainer from "./components/TitleContainer";
import PriceContainer from "./components/PriceContainer";
import ShortDescContainer from "./components/ShortDescContainer";

const Card = ({ data = {} } = {}) => {
  const { url, title, price, shortDesc } = data;

  return (
    <div className="flex flex-col gap-1 justify-center">
      <ImageContainer img={url} />
      <TitleContainer title={title} />
      <PriceContainer price={price} />
      <ShortDescContainer shortDesc={shortDesc} />
    </div>
  );
};

export default Card;
