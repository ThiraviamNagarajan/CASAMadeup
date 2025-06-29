import React from 'react';

const DynamicButton = ({
  children,
  padding = 'p-0',
  height = 'h-0',
  width = 'w-0',
  onClick,
  Backgroundcolor = ''
}) => {
  const baseClasses = `text-[#ffffff] text-sm rounded cursor-pointer border-none outline-none`;
  const dynamicClasses = `${padding} ${height} ${width}`;

  const backgroundColor = Backgroundcolor || '#E10000';

  return (
    <button
      className={`${baseClasses} ${dynamicClasses}`}
      onClick={onClick}
      style={{ backgroundColor }}
    >
      {children}
    </button>
  );
};

export default DynamicButton;
