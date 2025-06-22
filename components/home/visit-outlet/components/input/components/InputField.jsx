import React from "react";

const InputField = () => {
  return (
    <div className="flex gap-2 justify-items-stretch">
      <input
        type="text"
        placeholder="Enter your text here"
        className="w-full py-3 pl-[6px] pr-4  border border-[#999999] rounded-md placeholder:text-xs placeholder:font-normal placeholder:text-black" 
      />
      <div className="flex gap-2 px-4 py-2 border-[#999999] border-[1px] min-w-fit items-center rounded-md">
        <div className="font-medium text-black text-sx">Get Link</div>
        <div>
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 5.5H9.5M5.5 1.5L9.5 5.5L5.5 9.5"
              stroke="black"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default InputField;
