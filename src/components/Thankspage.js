import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import thanksthumb from "/public/Assets/thanksthumb.png";
import Nikesneakers from './Nikesneakers';

export default function Thankspage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [lastName, setLastName] = useState('');

  const handleBackToShop = () => {
    router.push('/');
  };

  useEffect(() => {
    // Retrieve form data from localStorage
    const storedName = localStorage.getItem('name');
    const storedEmail = localStorage.getItem('email');
    const storedAddress = localStorage.getItem('address');
    const storedLastName = localStorage.getItem('lastName');

    // Update state variables with the retrieved data
    setName(storedName);
    setEmail(storedEmail);
    setAddress(storedAddress);
    setLastName(storedLastName);
  }, []);

  return (
    <div className='lg:grid grid-cols-2 gap-10 justify-end items-center max-w-[1400px] mx-auto'>
      <div className=' flex flex-col lg:pl-10 items-center justify-center gap-6'>
        <Image className='w-[100px] h-[100px]' src={thanksthumb} />
        <div className='flex flex-col items-center justify-center'>
          <p className='text-[24px] font-bold text-[#000034]'>Thank you for your order</p>
          <p className='text-[#4B4E68] font-semibold'>Your order is confirmed</p>
        </div>
        <p className='text-[#7782F1] text-[14px] px-2 py-1 border border-[#7782F1] rounded-lg bg-[#E4E4FF] text-center max-w-[28%]'>Order ID: #10040</p>


        <button className='flex flex-row-reverse items-center gap-1 px-6 bg-black rounded-3xl' onClick={handleBackToShop}>
          <p className='text-white'>Back to Shop</p>
          <p className='text-[24px] text-center text-white'>←</p>
        </button>

        <div className='grid grid-cols-2 gap-8 lg:gap-3 gap-y-3 p-8 border border-[#D6D8EE] rounded-2xl w-[90%] lg:w-[100%]'>
          <p className=' text-[#4B4E68]'>Name: <br></br> <span className='text-[#000034] font-semibold '>{name} {lastName}</span></p>
          <p className=' text-[#4B4E68]'>Email: <br></br> <span className='text-[#000034] font-semibold'>{email}</span></p>
          <p className=' text-[#4B4E68]'>Shipping Address: <br></br> <span className='text-[#000034] font-semibold'>{address}</span></p>
          <p className=' text-[#4B4E68]'>Billing Address:<br></br> <span className='text-[#000034] font-semibold'>Same as shipping</span></p>
          <p className=' text-[#4B4E68]'>Shipping:<br></br><span className='text-[#000034] font-semibold'>Free</span></p>
          <p className=' text-[#4B4E68]'>Payment Method:<br></br><span className='text-[#000034] font-semibold'>Credit Card</span></p>
        </div>
      </div>
      <div className='hidden lg:block'>
      <Nikesneakers isThankupage={false} />
      </div>
    </div>
  );
}
