import React from 'react'
import Title from './components/Title'
import Paragraph from './components/Paragraph'

const Text = () => {
  return (
    <div className='flex flex-col gap-2 text-white sm:gap-4'>
      <Title title="Get 5% off your ist app order" />
      <Paragraph paragraph='get better experience on the app. Use promo code BetterOnApp to save!' />
    </div>
  )
}

export default Text