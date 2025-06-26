import React from 'react'

const Title = ({ title="" }={}) => {
  return (
    <div className='font-bold text-3xl leading-6 sm:text-[40px] sm:leading-7'>{title}</div>
  )
}

export default Title