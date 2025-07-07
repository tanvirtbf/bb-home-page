import React from 'react'
import Header from './components/Header'
import SingleLine from './components/SingleLine'

const SingleSection = () => {
  return (
    <div className='flex flex-col gap-3'>
        <Header />
        <SingleLine />
        <SingleLine />
    </div>
  )
}

export default SingleSection