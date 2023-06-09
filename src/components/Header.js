import React from 'react'
import Image from 'next/image'
import Logo from "../../public/Assets/Logo.png"
export default function header() {
  return (
    <div className='w-full '>
         <div className='bg-black p-5 pl-40'>
          <Image className='w-[171px] h-[36px] ' src={Logo} />
        </div>
    </div>
  )
}
