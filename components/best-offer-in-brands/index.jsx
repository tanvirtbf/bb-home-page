import React from 'react'
import CardImage from '../../public/png/card1.jpg'
import TitleOne from '../../public/png/title1.png'
import TitleTwo from '../../public/png/title2.png'
import TitleThree from '../../public/png/title3.png'
import Card from '../layout/card'

const cardData = [
    {id: 1, url: CardImage, title: TitleOne, price: "Starting At ৳799", shortDesc: "Collagen Supplements"},
    {id: 2, url: CardImage, title: TitleTwo, price: "Starting At ৳799", shortDesc: "Collagen Supplements"},
    {id: 3, url: CardImage, title: TitleThree, price: "Starting At ৳799", shortDesc: "Collagen Supplements"},
    {id: 4, url: CardImage, title: TitleOne, price: "Starting At ৳799", shortDesc: "Collagen Supplements"},
    {id: 5, url: CardImage, title: TitleTwo, price: "Starting At ৳799", shortDesc: "Collagen Supplements"},
    {id: 6, url: CardImage, title: TitleThree, price: "Starting At ৳799", shortDesc: "Collagen Supplements"},
    {id: 7, url: CardImage, title: TitleOne, price: "Starting At ৳799", shortDesc: "Collagen Supplements"},
    {id: 8, url: CardImage, title: TitleTwo, price: "Starting At ৳799", shortDesc: "Collagen Supplements"},
    {id: 9, url: CardImage, title: TitleThree, price: "Starting At ৳799", shortDesc: "Collagen Supplements"},
    {id: 10, url: CardImage, title: TitleOne, price: "Starting At ৳799", shortDesc: "Collagen Supplements"},
    {id: 11, url: CardImage, title: TitleTwo, price: "Starting At ৳799", shortDesc: "Collagen Supplements"},
    {id: 12, url: CardImage, title: TitleThree, price: "Starting At ৳799", shortDesc: "Collagen Supplements"},
]

const BestOfferInBrands = () => {

  return (
    <div className='flex gap-3'>
        {cardData.map((item) => <Card key={item.id} data={item} />)}
    </div>
  )
}

export default BestOfferInBrands