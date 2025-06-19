import Image from 'next/image'
import React from 'react'
import LeftImage from '../../../../../public/png/trans4.png'

const Left = () => {
  return (
    <div>
        <Image src={LeftImage} alt='Image' width={0} height={0} className='w-full h-full' />
    </div>
  )
}

export default Left