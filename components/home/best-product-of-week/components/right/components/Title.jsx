import React from 'react'

const Title = ({ text="" }={}) => {
  return (
    <div className='text-base font-bold leading-7 text-black sm:text-4xl'>{text}</div>
  )
}

export default Title
