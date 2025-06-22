import React from 'react'

const SingleTab = ({ name="" }={}) => {
  return (
    <div className='border-[#999999] rounded-[20px] border-[1px] sm:py-2 sm:px-4 p-[10px] flex items-center justify-center cursor-pointer hover:bg-slate-200 transition-all duration-300'>
        <span className='sm:text-[18px] text-xs font-normal text-[#717171]'>{name}</span>
    </div>
  )
}

export default SingleTab