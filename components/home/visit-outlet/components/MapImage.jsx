import Image from 'next/image'
import React from 'react'
import mapImage from '@/public/png/map.png'

const MapImage = () => {
  return (
    <div className='border-[#FF1A58] border-2 rounded-xl'>
        <Image src={mapImage} className='rounded-xl' />
    </div>
  )
}

export default MapImage