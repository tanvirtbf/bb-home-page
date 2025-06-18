import React from 'react'

const InputField = () => {
  return (
    <div className='flex gap-4'>
        <input
            type="text"
            placeholder="Enter your text here"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
            type="submit"
            className="px-4 py-2 mt-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            Submit
        </button>
    </div>
  )
}

export default InputField