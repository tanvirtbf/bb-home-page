import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between'>
        <h3 className='font-normal text-base leading-[140%] text-black'>Dec 2024</h3>
        <div className='flex items-center gap-1'>
            <span className='text-sm font-medium leading-5 text-black'>+125</span>
            <span className='text-xs font-normal leading-4 text-[#5A5A5A]'>earned</span>
        </div>
    </div>
  )
}

export default Header