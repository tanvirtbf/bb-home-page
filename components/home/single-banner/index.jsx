import React from 'react'
import bannerImage from '../../../public/png/image2.png'
import Image from 'next/image'

const SingleBanner = () => {
  return (
    <div>
        <Image src={bannerImage} alt='Single Banner' width={0} height={0} className='w-full h-full rounded-2xl' />
    </div>
  )
}

export default SingleBanner