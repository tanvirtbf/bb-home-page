"use client"
import React, { useState } from 'react'

const Header = () => {
    const [whichBar, setWhichBar] = useState("all")
    const handleClick = (state) =>{
        setWhichBar(state)
    }
  return (
    <div className='flex items-center gap-6'>
        
        <div className={`text-xs  leading-4 cursor-pointer pb-2 ${whichBar === "all" ? "border-b-black border-b-[2px] text-black font-medium" : "border-b-transparent border-b-[2px] text-[#717171] font-normal"}`} onClick={() => handleClick('all')}>All</div>
        
        <div className={`text-xs  leading-4 cursor-pointer pb-2 ${whichBar === "earned" ? "border-b-black border-b-[2px] text-black font-medium" : "border-b-transparent border-b-[2px] text-[#717171] font-normal"}`} onClick={() => handleClick('earned')}>Earned</div>

        <div className={`text-xs  leading-4 cursor-pointer pb-2 ${whichBar === "used" ? "border-b-black border-b-[2px] text-black font-medium" : "border-b-transparent border-b-[2px] text-[#717171] font-normal"}`} onClick={() => handleClick('used')}>Used</div>

        <div className={`text-xs  leading-4 cursor-pointer pb-2 ${whichBar === "expired" ? "border-b-black border-b-[2px] text-black font-medium" : "border-b-transparent border-b-[2px] text-[#717171] font-normal"}`} onClick={() => handleClick('expired')}>Expired</div>
        
    </div>
  )
}

export default Header