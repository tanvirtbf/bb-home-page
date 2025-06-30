import React from 'react'

const ProductName = ({ productName= "" } = {}) => {
  return (
    <div className='text-sm font-normal leading-5 text-black'>{productName}</div>
  )
}

export default ProductName