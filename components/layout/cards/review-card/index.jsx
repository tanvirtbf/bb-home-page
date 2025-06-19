import React from 'react'
import Title from './components/Title'
import Ratings from './components/Ratings'
import Comments from './components/Comments'
import Profile from './components/Profile'

const ReviewCard = ({ data={} }={}) => {
  return (
    <div className='p-5 bg-[#FFF8F3] rounded-2xl flex flex-col gap-4'>
        <Title text={"Best ever beauty products"} />
        <Ratings />
        <Comments comment={data.comment} />
        <Profile />
    </div>
  )
}

export default ReviewCard