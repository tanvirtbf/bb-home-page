import Star from '@/components/layout/svg/Star'
import React from 'react'

const Ratings = ({ rating= 0, amount= 0} = {}) => {
  return (
    <div className='flex items-center gap-1 text-xs'>
      <Star fill='#FF1A58' />
      <div className='font-bold leading-3 text-black'>{rating}</div>
      <div className='font-normal text-[#5A5A5A] leading-3'>({amount})</div>
    </div>
  )
}

export default Ratings