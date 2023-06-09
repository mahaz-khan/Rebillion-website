import React, { useState } from 'react';
import { MdDone } from 'react-icons/md';

const Checkbox = () => {
  const [checked, setChecked] = useState(true);

  const handleClick = () => {
    setChecked(!checked);
  };

  return (
    <label className="flex cursor-pointer gap-2 max-w-[94%]">
      <div className={`relative mt-1 w-5 h-5 rounded border border-gray-400 transition-colors ${checked ? 'bg-black border-black' : ''}`}>
        <input type="checkbox" className="absolute w-full h-full opacity-0 cursor-pointer" onClick={handleClick} />
        {checked && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <MdDone className="text-white w-5 h-5" />
          </div>
        )}
      </div>
      <div className='max-w-[93%] text-[14px] text-[#4B4E68]'>By checking this box, I acknowledge that I have read and agree to the <span className='font-bold text-[#000034]'>Terms of Service,</span> and <span className='font-bold'>Monthly Billing Terms </span>of this website and want to opt-in for the monthly billed Dream Collection Club®</div>
    </label>
  );
};

export default Checkbox;

