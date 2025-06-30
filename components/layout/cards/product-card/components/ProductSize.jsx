import React from 'react'

const ProductSize = ({ productSize= [] } = {}) => {
  return (
    <div className='flex gap-1'>
        {productSize.map((size) => (
            <div key={size} className='font-normal text-[#222222] border border-[#222222] rounded-2xl px-2 py-[2px] text-[10px] text-center'>{size}</div>
        ))}
    </div>
  )
}

export default ProductSize