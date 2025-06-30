import React from 'react'

const Price = ({ offerPrice= "", actualPrice= "" } = {}) => {
  return (
    <div className='flex items-center gap-2'>
      <div className='font-normal text-sx text-[#717171] leading-4 line-through'>{offerPrice}</div>
      <div className='font-bold text-sm text-[#FF1A58] leading-5'>{actualPrice}</div>
    </div>
  )
}

export default Price