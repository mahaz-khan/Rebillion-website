import React, { useState } from 'react';

const DotButton = ({ id, onClick, active, children }) => {
  return (
    <button
      id={id}
      className={`
        w-6
        h-6
        bg-white
        border
        rounded-full
        focus:outline-none
        ${active ? 'border-black' : 'border-gray-400'}
      `}
      onClick={onClick}
    >
      {active && <div className="w-3 h-3 bg-black rounded-full mx-auto" />}
      {children}
    </button>
  );
};

const App = () => {
  const [activeDot, setActiveDot] = useState(0);

  const handleDotClick = (index) => {
    setActiveDot(index);
  };

  return (
    <div className=''>
      <div className='flex flex-col gap-2 justify-between max-w-[90%] '>
        <div className='flex gap-2 items-center justify-between'>
          <div className='flex items-center gap-3 text-[14px] text-[#4B4E68] font-semibold'>
            <DotButton id="dot-1" onClick={() => handleDotClick(0)} active={activeDot === 0}></DotButton>
            Free shipping
          </div>
          <p className='font-semibold text-[#4B4E68]'>$10</p>
        </div>
        <div className='flex gap-2 items-center justify-between'>
          <div className='flex items-center gap-3 text-[14px] text-[#4B4E68] font-semibold'>
            <DotButton id="dot-2" onClick={() => handleDotClick(1)} active={activeDot === 1}></DotButton>
            DHL with price
          </div>
          <p className='font-semibold text-[#000034]'>$20</p>
        </div>
      </div>
    </div>
  );
};

export default App;
