import React from 'react'

const SingleTab = ({ name="" }={}) => {
  return (
    <div className='border-[#999999] rounded-[20px] border-[1px] py-2 px-4 flex items-center justify-center cursor-pointer hover:bg-amber-400 transition-all duration-300'>
        <span className='text-[18px] font-normal text-[#717171]'>{name}</span>
    </div>
  )
}

export default SingleTab