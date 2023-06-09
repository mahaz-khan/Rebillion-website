import React, { useState } from 'react';

export default function PriceComponent() {
  const [price, setPrice] = useState(50);
  const [quantity, setQuantity] = useState(1);

  const handlePlusClick = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
    setPrice(prevPrice => prevPrice + 50);
  };

  const handleMinusClick = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
      setPrice(prevPrice => prevPrice - 50);
    }
  };

  return (
    <div className='flex flex-col gap-5 items-center px-16 py-8 border border-[#DADDF5] rounded-2xl mt-5'>
      <div className="flex gap-2 text-2xl font-bold text-[#000034]">
        <span className='text-[18px] font-semibold'>Price: </span>${price}
        <p className='text-[16px] font-semibold px-3 py-0 bg-[#EFF0F5] rounded'>-80%</p>
      </div>
      <div className='flex items-center gap-5 px-20 py-2 rounded-xl bg-[#EFF0F5]'>
        <p className='text-[#4B4E68]'>Quantity:</p>
        <button className='text-[20px] px-3 py-1 rounded-md bg-white' onClick={handleMinusClick}>-</button>
        <div className='font-bold'>{quantity}</div>
        <button className='text-[20px] px-3 py-1 rounded-md bg-white' onClick={handlePlusClick}>+</button>
      </div>
    </div>
  );
}
