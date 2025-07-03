import RewardsComponent from '@/components/rewards'
import React from 'react'

const RewardsPage = () => {
  return (
    <div className='grid grid-cols-12 gap-8'>
        <div className='col-span-3'>TabBar</div>
        <RewardsComponent />
    </div>
  )
}

export default RewardsPage