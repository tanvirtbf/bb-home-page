import React from 'react'
import View from './components/View'
import Absolute from './components/Absolute'


const ComboCard = ({ data={}, imgClass="" }={}) => {
  return (
    <div className='relative'>
      <View image={data.url} imgClass={imgClass} />
      <Absolute price={data.price} text={data.shortDesc} />
    </div>
  )
}

export default ComboCard