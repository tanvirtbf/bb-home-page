import React from 'react'

const SectionTitle = ({ title="", textAlign="" }={}) => {
  return (
    <h2 className={`text-base font-bold leading-7 ${textAlign? textAlign : "text-center"} text-black uppercase sm:text-4xl`}>{title}</h2>
  )
}

export default SectionTitle