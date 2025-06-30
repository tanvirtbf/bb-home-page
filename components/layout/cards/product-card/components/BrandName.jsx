import React from 'react'

const BrandName = ({ brandName= ""} = {}) => {
  return (
    <div className='text-[#BC9072] font-medium sm:text-xs text-[10px] uppercase'>{brandName}</div>
  )
}

export default BrandName