import React from 'react'
import Image from 'next/image'
import redsneakers from "../../public/Assets/redsneakers.png"
import greensneakers from "../../public/Assets/greensneakers.png"
import orangesneakers from "../../public/Assets/orangesneakers.png"
import payicon from "../../public/Assets/payicon.png"
import visaicon from "../../public/Assets/visaicon.png"
import Paypal from "../../public/Assets/Paypal.svg"
import amex from "../../public/Assets/amex.png"
import jcb from "../../public/Assets/jcb.png"
import odd from "../../public/Assets/odd.png"
import tick from "../../public/Assets/tick.png"
export default function Nikesneakers() {

    return (
        <div className='bg-[#fafbfc] p-10'>

            <div className='flex items-center gap-40'>
                <div className='flex items-center gap-3'>
                    <Image className='w-[60px] h-[60px]' src={redsneakers} />
                    <p className='font-semibold text-[14px]'>Nike sneakers</p>
                </div>
                <p className='font-semibold text-[14px]'>$120.90</p>
            </div>

            <div className='flex items-center gap-40'>
                <div className='flex items-center gap-3'>
                    <Image className='w-[60px] h-[60px]' src={greensneakers} />
                    <p className='font-semibold text-[14px]'>Nike sneakers</p>
                </div>
                <p className='font-semibold text-[14px]'>$120.90</p>
            </div>

            <div className='flex items-center gap-40'>
                <div className='flex items-center gap-3'>
                    <Image className='w-[60px] h-[60px]' src={orangesneakers} />
                    <p className='font-semibold text-[14px]'>Nike sneakers</p>
                </div>
                <p className='font-semibold text-[14px]'>$120.90</p>
            </div>

            <div className='flex flex-col gap-2 pt-3'>

                <p className='w-[370px] h-[1px]  bg-[#D6D8EE]'></p>

                <div className='flex items-center gap-[265px] text-[14px] '>
                    <p>Subtotal:</p>
                    <p>$362.70</p>
                </div>

                <div className='flex items-center gap-[283px] text-[14px] '>
                    <p>Shipping:</p>
                    <p>Free</p>
                </div>

                <p className='w-[370px] h-[1px]  bg-[#D6D8EE]'></p>

                <div className='flex items-center gap-[285px] text-[14px]'>
                    <p className='font-semibold'>Total</p>
                    <p className='font-bold'>$362.70</p>
                </div>

            </div>

            <div className='mt-7 flex flex-col gap-2 justify-center items-center p-5 rounded-3xl border border-[#EBECF3] bg-[#FFFFFF]'>

                <p className=' text-[14px] text-center text-[#4B4E68]'>Secure SSL Encryption & Guaranteed Safe Checkout</p>

                <div className='flex gap-2'>
                    <Image className='w-[40px] h-[24px]' src={payicon} />
                    <Image className='w-[40px] h-[24px]' src={visaicon} />
                    <Image className='w-[40px] h-[24px]' src={Paypal} />
                    <Image className='w-[40px] h-[24px]' src={amex} />
                    <Image className='w-[40px] h-[24px]' src={jcb} />
                    <Image className='w-[40px] h-[24px]' src={odd} />
                </div>
            </div>

            <div className='flex flex-col gap-3 p-5 rounded-3xl border border-[#EBECF3] mt-4 bg-[#FFFFFF]'>
                <p className='text-[18px] font-semibold'>The ultimate jewellery club</p>
                <p className='text-[14px] text-[#4B4E68]'>Ornare rhoncus nunc ut felis. Faucibus dolor at ultrices tincidunt. Pulvinar sed justo et viverra pellentesque.</p>

                <div>
                    <div className='flex items-center gap-2'>
                        <Image className='w-[16px] h-[11px]' src={tick} />
                        <p className='text-[#4B4E68] text-[14px]'>Extra 10$ off!</p>
                    </div>

                    <div className='flex items-center gap-2'>
                        <Image className='w-[16px] h-[11px]' src={tick} />
                        <p className='text-[#4B4E68] text-[14px]'>Free shipping on marked club items!</p>
                    </div>

                    <div className='flex items-center gap-2'>
                        <Image className='w-[16px] h-[11px]' src={tick} />
                        <p className='text-[#4B4E68] text-[14px]'>Free returns on marked club items!</p>
                    </div>
                </div>

            </div>

        </div>
    )
}
