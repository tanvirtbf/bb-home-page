import RewardsComponent from '@/components/rewards'
import React from 'react'

const RewardsPage = () => {
  return (
    <div className='grid grid-cols-12 gap-8'>
        <div className='hidden col-span-3 md:block'>TabBar</div>
        <RewardsComponent />
    </div>
  )
}

export default RewardsPage