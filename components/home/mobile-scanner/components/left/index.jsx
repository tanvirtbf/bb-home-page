import Image from 'next/image'
import React from 'react'
import LeftImage from '../../../../../public/png/p55.png'

const Left = () => {
  return (
    <div className='relative order-1 w-40 sm:w-60 sm:order-1'>
      <div className='absolute flex items-center justify-center sm:bottom-0 sm:top-[-230px] top-[-110px] '>
        <Image src={LeftImage} alt='Left Image' width={0} height={0} className='w-40 h-[280px] sm:w-60 sm:h-[500px] rounded-xl' />
      </div>
    </div>
  )
}

export default Left