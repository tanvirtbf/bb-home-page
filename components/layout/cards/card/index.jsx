import React from "react";
import ImageContainer from "./components/ImageContainer";
import TitleContainer from "./components/TitleContainer";
import PriceContainer from "./components/PriceContainer";
import ShortDescContainer from "./components/ShortDescContainer";

const Card = ({ data = {}, imgClass="", cardCss={} } = {}) => {
  const { url, title, price, shortDesc } = data;


  return (
    <div className="flex flex-col justify-center gap-1">
      <ImageContainer img={url} imgClass={imgClass} />
      <TitleContainer title={title} className={cardCss.title.css} />
      <PriceContainer price={price} className={cardCss.price.css} />
      <ShortDescContainer shortDesc={shortDesc} className={cardCss.shortDesc.css} />
    </div>
  );
};

export default Card;
