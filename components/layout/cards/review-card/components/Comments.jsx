import React from 'react'

const Comments = ({ comment="" }={}) => {
  return (
    <div className='text-xs font-normal sm:text-base text-[#5A5A5A]'>{comment}</div>
  )
}

export default Comments