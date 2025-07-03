import React from 'react'
import NavigateHeading from './components/NavigateHeading'
import Left from './components/left'
import Right from './components/right'

const RewardsComponent = () => {
  return (
    <div className='col-span-9 gap-5'>
        <NavigateHeading />
        <div className='grid grid-cols-12 gap-4 sm:gap-10'>
            <Left />
            <Right />
        </div>
    </div>
  )
}

export default RewardsComponent