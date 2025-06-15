import Image from 'next/image'
import React from 'react'

const ImageContainer = ({ img="" }={}) => {
  return (
    <div className='w-full h-full'>
        <Image src={img} width={300} height={400} />
    </div>
  )
}

export default ImageContainer