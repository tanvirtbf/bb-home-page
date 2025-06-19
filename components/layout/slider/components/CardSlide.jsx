import React from 'react'
import Card from '../../cards/card'

// {id: 1, url: CardImage, title: TitleOne, price: "Starting At ৳799", shortDesc: "Collagen Supplements"}

const CardSlide = ({ data={}, imgClass="" }={}) => {
  return (
    <Card key={data.id} data={data} imgClass={imgClass} />
  )
}

export default CardSlide