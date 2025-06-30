import React from 'react'

const Offer = ({ offer= "" } = {}) => {
  return (
    <div className='bg-[#FFF3F5] rounded-sm py-[2px] px-1 font-medium text-[10px] text-[#FF1A58] w-fit capitalize'>{offer}</div>
  )
}

export default Offer