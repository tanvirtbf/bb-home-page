import React from 'react'

const Title = ({ text="" } = {}) => {
  return (
    <h2 className='text-2xl font-bold leading-7 text-black'>{text}</h2>
  )
}

export default Title