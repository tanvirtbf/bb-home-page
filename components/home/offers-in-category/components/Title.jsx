import React from 'react'

const Title = ({ upperText="", lowerText="" }={}) => {
  return (
    <div className='flex flex-col gap-1 items-center justify-center text-center mb-10'>
        <div className='text-base font-medium text-[#FF1A58] text-center leading-4'>{upperText}</div>
        <div className='uppercase text-4xl font-bold text-black text-center leading-7'>{lowerText}</div>
    </div>
  )
}

export default Title