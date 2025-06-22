import React from 'react'

const Title = ({ text="" }={}) => {
  return (
    <div className='text-sm font-medium leading-7 text-black sm:text-3xl'>{text}</div>
  )
}

export default Title