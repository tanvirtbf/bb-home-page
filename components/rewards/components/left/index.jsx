import React from 'react'
import TopSection from './components/top'
import BottomSection from './components/bottom'

const Left = () => {
  return (
    <div className='flex flex-col col-span-12 gap-4 sm:col-span-5 sm:gap-5'>
      <TopSection />
      <BottomSection />
    </div>
  )
}

export default Left