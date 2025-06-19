import React from 'react'
import Left from './components/left'
import Right from './components/right'

const BestProductOfWeek = () => {
  return (
    <div className='flex items-center gap-10'>
      <Left />
      <Right />
    </div>
  )
}

export default BestProductOfWeek