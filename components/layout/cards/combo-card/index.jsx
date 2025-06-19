import React from 'react'
import View from './components/View'
import Absolute from './components/Absolute'


const ComboCard = ({ data={} }={}) => {
  return (
    <div className='relative'>
      <View img={data.url} />
      <Absolute price={data.price} text={data.shortDesc} />
    </div>
  )
}

export default ComboCard