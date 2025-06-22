import React from 'react'

const PriceContainer = ({ price="", className="" }={}) => {
  return (
    <div className={className}>{price}</div>
  )
}

export default PriceContainer