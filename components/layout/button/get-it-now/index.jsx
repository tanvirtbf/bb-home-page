import RightArrowIcon from '@/components/layout/svg/RightArrowIcon'
import React from 'react'


const GetItNowButton = ({ text="", parentCss="", stroke="", btnTextCss="" }={}) => {
  return (
    <div className={parentCss}>
      <div className={btnTextCss}>{text}</div>
      <RightArrowIcon stroke={stroke} />
    </div>
  )
}

export default GetItNowButton