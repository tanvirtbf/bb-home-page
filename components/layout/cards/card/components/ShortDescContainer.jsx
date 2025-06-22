import React from 'react'

const ShortDescContainer = ({ shortDesc="", className="" }={}) => {
  return (
    <div className={className}>{shortDesc}</div>
  )
}

export default ShortDescContainer