import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(600);

  useEffect(() => {
    const timer =
      timeLeft > 0 && setInterval(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className='pt-4'>
      <span className='px-2 py-1 rounded-xl font-semibold bg-white'>{hours < 10 ? `0${hours}` : hours}</span> : {}
      <span className='px-2 py-1 rounded-xl font-semibold bg-white'>{minutes < 10 ? `0${minutes}` : minutes}</span> : {}
      <span className='px-2 py-1 rounded-xl font-semibold bg-white'> {seconds < 10 ? `0${seconds}` : seconds}</span>
    </div>
  );
};

export default CountdownTimer;
