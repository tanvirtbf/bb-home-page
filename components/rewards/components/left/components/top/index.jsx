import Image from 'next/image'
import React from 'react'
import TopImage from '../../../../../../public/png/rewards/Mask group.png'
import UserPointIcon from '@/components/layout/svg/UserPointIcon'

const TopSection = () => {
  return (
    <div className='relative w-full h-auto rounded-3xl'>
        <Image src={TopImage} alt='Top Image' width={0} height={0} className='w-full rounded-3xl' />
        <div className='absolute top-0 left-0 flex flex-col justify-between h-full p-6 text-white'>
          <div>
            <h3 className='text-3xl font-medium '>Bronze</h3>
            <p className='font-medium text-[10px] '>+10 Points to Silver</p>
          </div>
          <div>
            <h3 className='text-base font-normal '>Bronze</h3>
            <p className='text-xs font-normal '>+10 Points to Silver</p>
          </div>
        </div>
        <div className='absolute bottom-6 right-6'>
          <UserPointIcon fill='white' />
        </div>
    </div>
  )
}

export default TopSection