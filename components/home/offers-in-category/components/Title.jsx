import SectionTitle from '@/components/layout/title/section-title'
import React from 'react'

const Title = ({ upperText="", lowerText="" }={}) => {
  return (
    <div className='flex flex-col items-center justify-center gap-0 mb-2 text-center sm:mb-10 sm:gap-1'>
        <div className='sm:text-base text-[10px] font-medium text-[#FF1A58] text-center leading-4'>{upperText}</div>
        {/* <div className='text-4xl font-bold leading-7 text-center text-black uppercase'>{lowerText}</div> */}
        <SectionTitle title={lowerText} />
    </div>
  )
}

export default Title