import Image from 'next/image'
import React from 'react'
import CardImage from '../../../../../public/png/banner1.png'

const View = () => {
  return (
    <div>
        <Image src={CardImage} width={300} height={400} alt='Card Image' />
    </div>
  )
}

export default View