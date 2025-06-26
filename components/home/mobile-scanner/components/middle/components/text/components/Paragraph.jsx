import React from 'react'

const Paragraph = ({ paragraph="" }={}) => {
  return (
    <div className='text-sm font-medium sm:leading-7 sm:text-xl'>{paragraph}</div>
  )
}

export default Paragraph