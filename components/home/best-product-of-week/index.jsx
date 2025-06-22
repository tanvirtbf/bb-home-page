import React from 'react'
import Left from './components/left'
import Right from './components/right'

const BestProductOfWeek = () => {
  return (
    <div className='flex flex-col items-center gap-10 sm:flex-row'>
      <Left />
      <Right />
    </div>
  )
}

export default BestProductOfWeek