import React from 'react'
import VideoIcon from '../../../../../../public/png/videoIcon.png'
import Image from 'next/image'

const Left = () => {
  return (
    <div className='flex gap-2'>
        <Image src={VideoIcon} width={52} height={52} alt='icon' className='' />
        <div className='text-sm'>
            <div className='font-normal text-[#5A5A5A]'>Beauty Tools</div>
            <div className='font-bold text-black'>QAR 2000</div>
        </div>
    </div>
  )
}

export default Left