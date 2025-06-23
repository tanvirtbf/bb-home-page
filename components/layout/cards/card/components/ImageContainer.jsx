import Image from 'next/image'
import React from 'react'

const ImageContainer = ({ img="", imgClass="" }={}) => {
  return (
    <div className={`${imgClass.imageParentClass? imgClass.imageParentClass : "w-full h-full"}`}>
        <Image src={img} width={300} height={200} alt='Card Image' className={imgClass.imageClass} />
    </div> 
  )
}

export default ImageContainer