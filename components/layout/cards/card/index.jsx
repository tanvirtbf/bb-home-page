import React from "react";
import ImageContainer from "./components/ImageContainer";
import TitleContainer from "./components/TitleContainer";
import PriceContainer from "./components/PriceContainer";
import ShortDescContainer from "./components/ShortDescContainer";

const Card = ({ data = {}, imgClass="", cardCss={} } = {}) => {
  const { url, title, price, shortDesc } = data;

  function renderTitle() {
    if (cardCss.title.type === "icon") {
      return <TitleContainer title={title} className={cardCss.title.css} />;
    } else if (cardCss.title.type === "text") {
      return <div className={cardCss.title.css}>{title}</div>;
    }
    return null;
  }

  return (
    <div className="flex flex-col justify-center w-fit">
      <ImageContainer img={url} imgClass={imgClass} />
      {renderTitle()}
      {cardCss.price && <PriceContainer price={price} className={cardCss.price.css} />}
      {cardCss.shortDesc && <ShortDescContainer shortDesc={shortDesc} className={cardCss.shortDesc.css} />}
    </div>
  );
};

export default Card;
