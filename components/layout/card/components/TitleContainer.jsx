import Image from 'next/image'
import React from 'react'

const TitleContainer = ({ title="" }={}) => {
  return (
    <div>
        <Image src={title} height={0} width={0} alt='Image'  />
    </div>
  )
}

export default TitleContainer