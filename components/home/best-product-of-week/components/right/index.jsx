import React from 'react'
import Timer from './components/Timer'
import Title from './components/Title'
import Description from './components/Description'
import GetItNowButton from '../../../../layout/button/get-it-now'

const Right = () => {
  return (
    <div className='flex flex-col items-center gap-2'>
        <Timer />
        <Title text={"Best Product of the Week"} />
        <Description />
        <GetItNowButton text={"Get It Now"} stroke='white' parentCss="bg-[#FF1A58] py-4 px-9 rounded-4xl w-fit flex gap-2 items-center font-medium text-base cursor-pointer" btnTextCss="text-white font-medium text-lg" />
    </div>
  )
}

export default Right