import React from 'react'
import Left from './components/Left'
import Right from './components/Right'

const BottomSection = () => {
  return (
    <div className='flex items-center justify-between px-4 py-3 bg-white shadow-blue-500 rounded-xl'>
        <Left />
        <Right />
    </div>
  )
}

export default BottomSection