import React from 'react'
import Title from './components/Title'
import InputField from './components/InputField'

const InputSection = () => {
  return (
    <div className='flex flex-col gap-2 sm:gap-4'>
        <Title text={"Get our shop location on your phone"} />
        <InputField />
    </div>
  )
}

export default InputSection