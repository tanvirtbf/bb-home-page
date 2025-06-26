import React from 'react'
import Input from './components/input'
import Text from './components/text'

const Middle = () => {
  return (
    <div className='flex flex-col order-3 gap-6 sm:gap-9 sm:order-2'>
      <Text />
      <Input />
    </div>
  )
}

export default Middle