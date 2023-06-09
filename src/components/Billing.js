import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Country from '../../public/Assets/Country.png';
import Shoppay from "../../public/Assets/Shoppay.png"
import expressPaypal from "../../public/Assets/expresspaypal.png"
import Gpay from "../../public/Assets/Gpay.png"
import email from "../../public/Assets/email.png"
import Oleo from "../../public/Assets/Oleo.png"
import Address from "../../public/Assets/Address.png"
import Transactioncard from "../../public/Assets/Transactions.png"
import DotButton from './Dotbutton'
import Checkbox from './Checkbox'
import ButtonGroup from './Buttongroup'
import Timerclock from './Timerclock'
import fwdarrow from "../../public/Assets/fwdarrow.png"
import Nikesneakers from './Nikesneakers'
import Header from '../components/Header'
import CountrySelect from './CountrySelect'

export default function Billing() {
  const router = useRouter();
  const [address, setAddress] = useState('');
  const [lastName, setLastName] = useState('');

  const handleCountryChange = (selectedOption) => {
    // Handle the selected country option
    console.log(selectedOption);
  }
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  }

  function validateName(name) {
    const re = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    return re.test(String(name));
  }

  function validateCardNumber(cardNumber) {
    // Remove all spaces from the card number string
    cardNumber = cardNumber.replace(/\s/g, '');

    // Check that the card number contains only digits
    if (!/^\d+$/.test(cardNumber)) {
      return false;
    }

    // Apply the Luhn algorithm to validate the card number
    let sum = 0;
    let doubleUp = false;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumber.charAt(i));
      if (doubleUp) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
      doubleUp = !doubleUp;
    }
    return (sum % 10) == 0;
  }

  function handleSubmit(event) {

    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const nameInput = document.getElementById('name');
    const nameParent = nameInput.parentElement.parentElement;
  
    const email = document.getElementById('email').value;
    const emailInput = document.getElementById('email');
    const emailParent = emailInput.parentElement.parentElement;
  
    const lastname = document.getElementById('lastname').value;
    const lastnameInput = document.getElementById('lastname');
    const lastnameParent = lastnameInput.parentElement.parentElement;
  
    const cardNumber = document.getElementById('number').value;
    const cardInput = document.getElementById('number');
    const cardParent = cardInput.parentElement.parentElement;
  
    let isValid = true; // Track the overall form validity
  
    if (!validateName(name)) {
      
      // Invalid name
      nameParent.style.border = "1px solid red";
      isValid = false;
  
      if (!document.getElementById("name-error")) {
        const nameError = document.createElement("p");
        nameError.id = "name-error";
        nameError.style.color = "red";
        nameParent.appendChild(nameError);
      }
  
      document.getElementById("name-error").innerHTML = "Enter a first name.";
      
    } else {
      // Valid name
      nameParent.style.border = "1px solid blue";
  
      if (document.getElementById("name-error")) {
        document.getElementById("name-error").innerHTML = "";
      }
    }
  
    if (!validateEmail(email)) {
      // Invalid email address
      emailParent.style.border = "1px solid red";
      isValid = false;
  
      if (!document.getElementById("email-error")) {
        const emailError = document.createElement("p");
        emailError.id = "email-error";
        emailError.style.color = "red";
        emailParent.appendChild(emailError);
      }
  
      document.getElementById("email-error").innerHTML = "Enter a valid email address.";
    } else {
      // Valid email address
      emailParent.style.border = "1px solid blue";
  
      if (document.getElementById("email-error")) {
        document.getElementById("email-error").innerHTML = "";
      }
    }
  
    if (lastname === '') {
      // Last name is empty
      lastnameParent.style.border = "1px solid red";
      isValid = false;
  
      if (!document.getElementById("last-name-error")) {
        const lastNameError = document.createElement("p");
        lastNameError.id = "last-name-error";
        lastNameError.style.color = "red";
        lastnameParent.appendChild(lastNameError);
      }
  
      document.getElementById("last-name-error").innerHTML = "Enter a last name.";
    } else {
      // Last name is not empty
      lastnameParent.style.border = "1px solid blue";
  
      if (document.getElementById("last-name-error")) {
        document.getElementById("last-name-error").innerHTML = "";
      }
    }
  
    if (!validateCardNumber(cardNumber)) {
      // Invalid card number
      cardParent.style.border = "1px solid red";
      isValid = false;
  
      if (!document.getElementById("card-error")) {
        const cardError = document.createElement("p");
        cardError.id = "card-error";
        cardError.style.color = "red";
        cardParent.appendChild(cardError);
      }
  
      document.getElementById("card-error").innerHTML = "Please enter a valid 16-digit card number.";
    } else {
      // Valid card number
      cardParent.style.border = "1px solid blue";
  
      if (document.getElementById("card-error")) {
        document.getElementById("card-error").innerHTML = "";
      }
    }
  
    if (isValid) {
      // All form fields are valid
  
      // Store form data in localStorage
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('address', address);
      localStorage.setItem('lastName', lastName);
  
      // Navigate to the upsell page
      router.push('/upsellpage'); // Replace '/upsellpage' with the actual URL of your upsell page
    }

  
  }
  




  return (

    <div className=''>

<Header />
      <div className='flex justify-end max-w-[990px] mx-auto'>
      <div className='pb-28 px-20 lg:px-0'>

<div>
  <p className='text-[32px] font-bold text-[#000034] pt-10'>Checkout</p>
  <div className='flex gap-3'>
    <p className='text-[14px] text-[#84849A]'>Cart </p>
    <p className='text-[14px] text-[#000034] font-semibold'>Shipping & Billing</p>
  </div>
</div>

<div className='pt-10 pb-5'>
  <div className='p-6 bg-[#f5f5f8] rounded-3xl max-w-[90%]'>
    <p className='text-[16px] leading-[27px] font-semibold'>
      🔥 Your cart is reserved for{' '}
      <span className='font-bold'>10:00 </span> minutes
    </p>
    <Timerclock />

  </div>
</div>

<div className='px-5 py-3 border rounded-2xl max-w-[90%]'>
  <p className='text-[16px] font-bold px-2'>Express Checkout</p>


  <button className='flex gap-3 px-2 py-3'>
    <Image className='w-[130px] h-[42px]' src={Shoppay} />
    <Image className='w-[130px] h-[42px]' src={expressPaypal} />
    <Image className='w-[130px] h-[42px]' src={Gpay} />
  </button>

</div>

<div className='pt-10'>
  <p className='text-[20px] font-bold'>Contact Information</p>

  <div className='px-8 border border-[#f8f8fc] rounded-3xl max-w-[90%] mt-7'>
    <label for="email" className='text-[14px] text-[#84849A] relative bottom-[14px] bg-[white] px-1'>Email Address</label>
    <div className='flex items-center gap-2 mt-[-20px] py-3'>
      <Image className='w-[20px] h-[18px]' src={email} />
      <input className='outline-none w-[100%]' type="email" id="email" name="email" placeholder="oleo_bone@gmail.com" required />

    </div>
  </div>
  <div id="email-error" class="error"></div>

</div>

<form className='flex flex-col gap-7 pt-10' action="">
  <div className=''>
    <p className='text-[20px] font-bold'>Shipping Address</p>

    <div className='px-8 border border-[#D6D8EE] rounded-3xl max-w-[90%] mt-4'>
    <div className='flex items-center  gap-2 py-3'>
        <Image className='w-[20px] h-[18px] ' src={Country} />
       <CountrySelect handleCountryChange={handleCountryChange} />
    </div>  
    </div>
  </div>


  <div className='grid grid-cols-2 max-w-[93%] lg:max-w-[90%] gap-3'>
    <div style={{ border: 'none' }}>
      <div className=' px-2 border border-[#D6D8EE] rounded-3xl  '>
        <label for="email" className='text-[12px] text-[#84849A] relative bottom-[14px] bg-[white] px-2 pl-4'>First Name</label>
        <div className='flex items-center gap-2 mt-[-20px] py-3 px-4 w-[100%] '>
          <Image className='w-[20px] h-[18px]' src={Oleo} />
          <input className='outline-none ' type="text" id="name" name="name" placeholder="Oleo" required />
        </div>
      </div>
      <div id="name-error" class="error"></div>
    </div>
    <div>
      <div className=' px-2 border border-[#D6D8EE] rounded-3xl '>
        <label for="email" className='text-[12px] text-[#84849A] relative bottom-[14px] bg-[white] px-2 pl-4'>Last Name</label>
        <div className='flex items-center gap-2 mt-[-20px] py-3 px-4  '>
          <Image className='w-[20px] h-[18px]' src={Oleo} />
          <input className='outline-none' type="text" id="lastname" name="lastname" placeholder="Bone" onChange={(e) => setLastName(e.target.value)} required />
        </div>
      </div>
      <div id="last-name-error" class="error"></div>
    </div>
  </div>

  <div className=' px-8 border border-[#D6D8EE] rounded-3xl max-w-[90%]'>

    <div className='flex items-center gap-2  py-3'>
      <Image className='w-[20px] h-[18px]' src={Address} />
      <input className='outline-none' type="text" id="location" name="location" placeholder="Address"   onChange={(e) => setAddress(e.target.value)} required />
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

<div className='flex flex-col gap-3 pt-8'>
  <p className='text-[20px] text-[#000034] font-semibold'>Shipping method</p>
  <DotButton />
</div>

<div className='pt-10'>
  <p className='text-[20px] font-bold'>Payment Method</p>
  <p className='text-[14px] text-[#84849A]'>All transaction are secured and encryted</p>

  <form className='flex flex-col gap-6' action="">

    <div class='px-8 border border-[#D6D8EE] rounded-3xl max-w-[90%] mt-7'>
      <label for="number" class='text-[14px] text-[#84849A] relative bottom-[14px] bg-[white] px-1'>Card Number</label>
      <div class='flex items-center gap-2 mt-[-20px] py-3'>
        <Image class='w-[20px] h-[18px]' src={Transactioncard} alt='Transaction' />
        <input class='outline-none' type='text' id='number' name='number' placeholder='2587 9860 2354' required />
      </div>
    </div>
    <div id='card-error' class=' text-red-500 mt-[-20px]'></div>

    <div className=' px-8 border border-[#D6D8EE] rounded-3xl max-w-[90%]'>
      <div className='flex items-center gap-2  py-3'>
        <Image className='w-[20px] h-[18px]' src={Oleo} />
        <input className='outline-none' type="text" id="name" name="name" placeholder="Name on Card" required />
      </div>
    </div>

    <div className='grid grid-cols-2 max-w-[90%] gap-4'>
      <div className=' px-2 border border-[#D6D8EE] rounded-3xl'>

        <div className='flex items-center gap-2 py-3 px-4 '>
          <input className='outline-none' type="text" id="location" name="location" placeholder="MM/YY" required />
        </div>
      </div>

      <div className=' px-2 border border-[#D6D8EE] rounded-3xl'>

        <div className='flex items-center gap-2  py-3 px-4 '>
          <input className='outline-none' type="text" id="location" name="location" placeholder="CVV" required />
        </div>
      </div>
    </div>
  </form>

  <div className='pt-6'><Checkbox /></div>
</div>

<div className='pt-10'>
  <p className='text-[20px] font-bold'>Billing Address</p>
  <p className='text-[14px] text-[#84849A]'>Specify the address for your payment option</p>

  <div className='pt-5'><ButtonGroup /></div>

  <button className='flex justify-center  lg:justify-start gap-2 items-center mt-10 bg-black rounded-3xl max-w-[93%] w-auto md:w-full lg:w-auto lg:px-8 py-2' onClick={handleSubmit}>
  <p className='text-white font-semibold text-[16px]'>Complete Order</p>
  <Image className='w-[20px] h-[10px]' src={fwdarrow} />
</button>

</div>

</div>

        <div className='hidden lg:block'><Nikesneakers /></div>

      </div>
    </div>
  )
}
