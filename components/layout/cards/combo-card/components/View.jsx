import Image from 'next/image'
import React from 'react'

const View = ({ image="", imgClass="" }={}) => {
  return (
    <div>
        <Image src={image} width={300} height={400} alt='Card Image' className={imgClass} />
    </div>
  )
}

export default View