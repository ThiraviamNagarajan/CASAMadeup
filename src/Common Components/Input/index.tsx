import React from 'react';

function InputField({
  type = 'text',
  placeholder = '',
  width = 'w-full',
  height = 'h-auto',
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`
        ${width} ${height}
        bg-white 
        text-[#404040]
        placeholder-[#DEDEDE]
        placeholder:text-[14px]
        text-[14px]
        px-[8px] py-[14px]
        rounded-md
        focus:outline-none focus:ring-2 focus:ring-[#E10000]
      `}
    />
  );
}

export default InputField;
