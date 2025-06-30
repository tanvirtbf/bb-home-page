import Image from 'next/image'
import React from 'react'

const Banner = ({ image= "" }={}) => {
  return (
    <div className='w-full h-auto'>
      <Image src={image} alt='Banner Image' width={100} height={100} className='w-full h-full' />
    </div>
  )
}

export default Banner