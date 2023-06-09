import React, { useState } from 'react';
import Country from "../../public/Assets/Country.png"
import Oleo from "../../public/Assets/Oleo.png"
import Address from "../../public/Assets/Address.png"
import Image from 'next/image';

const DotButton = ({ isActive, onClick }) => {
  return (
    <button
      className={`w-6 h-6 bg-white border rounded-full focus:outline-none ${isActive ? 'border-black' : 'border-gray-400'}`}
      onClick={onClick}
    >
      {isActive && <p className="w-3 h-3 bg-black rounded-full mx-auto" />}
    </button>
  );
};

const ButtonGroup = () => {
  const [button1Clicked, setButton1Clicked] = useState(true);
  const [button2Clicked, setButton2Clicked] = useState(false);

  const handleButton1Click = () => {
    setButton1Clicked(true);
    setButton2Clicked(false);
  };

  const handleButton2Click = () => {
    setButton1Clicked(false);
    setButton2Clicked(!button2Clicked);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className='flex gap-2' >
        <DotButton isActive={button1Clicked} onClick={handleButton1Click} />
        <span className='text-[#4B4E68] font-semibold'>Same as shipping address</span>
      </div>
      <div className=''>
        <DotButton isActive={button2Clicked} onClick={handleButton2Click} />
        <span className='text-[#4B4E68] font-semibold pl-2 '>Use a different billing address</span>
        {button2Clicked && (
          <div className="block">
            <form className='flex flex-col gap-7 pt-5' action="">
              <div className=''>
              

                <div className=' px-8 border border-[#D6D8EE] rounded-3xl max-w-[90%] mt-4'>

                  <div className='flex items-center gap-2  py-3'>

                    <Image className='w-[20px] h-[18px]' src={Country} />
                    <input className='outline-none' type="text" id="location" name="location" placeholder="Country" required />
                  </div>
                </div>

              </div>


              <div className='grid grid-cols-2 max-w-[90%] lg:max-w-[90%] gap-3'>
                <div className=' px-2 border border-[#D6D8EE] rounded-3xl  '>
                  <label for="email" className='text-[14px] text-[#84849A] relative bottom-[14px] bg-[white] px-2 pl-4'>First Name</label>
                  <div className='flex items-center gap-2 mt-[-20px] py-3 px-4 w-[100%] '>
                    <Image className='w-[20px] h-[18px]' src={Oleo} />
                    <input className='outline-none ' type="text" id="name" name="name" placeholder="Oleo" required />
                  </div>
                </div>

                <div className=' px-2 border border-[#D6D8EE] rounded-3xl '>
                  <label for="email" className='text-[14px] text-[#84849A] relative bottom-[14px] bg-[white] px-2 pl-4'>Last Name</label>
                  <div className='flex items-center gap-2 mt-[-20px] py-3 px-4  '>
                    <Image className='w-[20px] h-[18px]' src={Oleo} />
                    <input className='outline-none' type="text" id="lastname" name="lastname" placeholder="Bone" onChange={(e) => setLastName(e.target.value)} required />
                  </div>
                </div>
              </div>

              <div className=' px-8 border border-[#D6D8EE] rounded-3xl max-w-[90%]'>

                <div className='flex items-center gap-2  py-3'>
                  <Image className='w-[20px] h-[18px]' src={Address} />
                  <input className='outline-none' type="text" id="location" name="location" placeholder="Address" required />
                </div>
              </div>


              <div className='grid grid-cols-2 max-w-[90%] gap-4'>
                <div className=' px-2 border border-[#D6D8EE] rounded-3xl'>

                  <div className='flex items-center gap-2 py-3 px-4 '>
                    <input className='outline-none' type="text" id="location" name="location" placeholder="City" required />
                  </div>
                </div>

                <div className=' px-2 border border-[#D6D8EE] rounded-3xl'>

                  <div className='flex items-center gap-2  py-3 px-4 '>
                    <input className='outline-none' type="text" id="location" name="location" placeholder="Postal Code" required />
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ButtonGroup;
