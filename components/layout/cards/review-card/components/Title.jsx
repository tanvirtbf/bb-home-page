import React from 'react'

const Title = ({ text="" }={}) => {
  return (
    <div className='text-sm font-semibold text-black sm:text-xl'>{text}</div>
  )
}

export default Title