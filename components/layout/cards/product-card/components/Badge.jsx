import React from 'react'

const Badge = ({ className="", text="" }={ }) => {
  return (
    <div className={className}>{text}</div>
  )
}

export default Badge
