import Image from 'next/image'
import React from 'react'

const TitleContainer = ({ title="", className="" }={}) => {
  return (
    <div className="flex justify-center w-full h-full">
        <Image src={title} height={0} width={0} alt='Image' className={className} />
    </div>
  )
}

export default TitleContainer