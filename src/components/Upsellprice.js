import React from 'react'
import Image from 'next/image'
import {useRouter} from 'next/router';
import Plusminus from './Plusminus'
import Slider from '../components/Slider'
import payicon from "/public/Assets/payicon.png"
import visaicon from "/public/Assets/visaicon.png"
import Paypal from "/public/Assets/Paypal.svg"
import amex from "/public/Assets/amex.png"
import jcb from "/public/Assets/jcb.png"
import odd from "/public/Assets/odd.png"
import focalperson from "/public/Assets/focalperson.png"
export default function Upsellprice() {



  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/thankupage'); 
  };

  const handleNoButtonClick = () => {
    router.push('/'); // Replace '/landingpage' with the actual route/path of your landing page
  };

  return (
    <div className='max-w-[1400px] mx-auto'>
      <div className='flex flex-col items-center   pt-10 '>
        <Slider />
        <Plusminus/>
        <div className='max-w-[50%] text-[#4B4E68] mt-5 '>Ornare rhoncus nunc ut felis. Faucibus dolor at ultrices tincidunt. Pulvinar sed justo et viverra pellentesque.<br></br><br></br>
          Mauris augue nulla proin vel a. Facilisis fringilla molestie dignissim elit orci malesuada. Lorem sit sagittis vitae nulla id. Mauris ipsum sed sed faucibus. Nulla amet metus gravida orci faucibus nisl eros arcu lorem. Nullam ornare molestie nam id gravida volutpat bibendum sem feugiat. Neque vulputate in et maecenas porta mi tellus. In massa porttitor urna quis volutpat at.
        </div>

        <div className='flex  mt-5 gap-4'>
          <div className='px-8 py-2 flex flex-col gap-3 border border-[#DADDF5] rounded-xl'>
            <p className=' text-[14px] text-center text-[#4B4E68]'>Guaranteed <span className='text-black font-bold'>Safe</span> & <span className='text-black font-bold'>Secure</span> Checkout</p>
            <div className='flex gap-2'>
              <Image className='w-[40px] h-[24px]' src={payicon} />
              <Image className='w-[40px] h-[24px]' src={visaicon} />
              <Image className='w-[40px] h-[24px]' src={Paypal} />
              <Image className='w-[40px] h-[24px]' src={amex} />
              <Image className='w-[40px] h-[24px]' src={jcb} />
              <Image className='w-[40px] h-[24px]' src={odd} />
            </div>
          </div>

          <div className='flex items-center gap-3 px-8 py-2 border border-[#DADDF5] rounded-xl'>
            <Image className='w-[40px] h-[50px]' src={focalperson} />
            <p className='font-bold'>24/7 <br></br> <span className='font-normal text-[#4B4E68]'>Support</span></p>
          </div>
        </div>

        <div className='flex flex-col gap-3 pt-10 pb-28 '>
          <button className='flex items-center gap-1 px-6 bg-black rounded-3xl' onClick={handleButtonClick}>
            <p className='text-white'>Yes, I want</p>
            <p className='text-[24px] text-center text-white'>→</p>
          </button>
          <button className='text-[12px] font-bold text-[#4B4E68]' onClick={handleNoButtonClick}>
            No, Thanks
          </button>
        </div>
      </div>
    </div>
  )
}
