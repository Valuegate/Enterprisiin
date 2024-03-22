import React, {FC} from 'react';


import Image from "next/image";
import Ask from "@/public/assets/ask.png";

import { iModalLogoutProp } from '../types';

const LogoutModal:FC<iModalLogoutProp> = ({onCancel, onProceed}) => {
  return (
    <div className='flex flex-col items-center mb-8 w-full'>
        <Image src={Ask} alt='ask' className='w-[125px] h-[113px] md:w-[108px] md:h-[98px]'/> 
        <h2 className='bold-2 mt-5 text-contrast-100'>Logout?</h2>
        <p className='med-3 md:text-[14px] mt-5 text-contrast-base'>Are you sure you want to log out?</p>
        <div className='mt-11 md:mt-8 flex md:flex-col  items-center justify-center gap-5'>
          <button onClick={onCancel} className='bg-blue-10 text-blue-base w-[135px] md:w-[320px] h-14 rounded med-3'>Cancel</button>
          <button onClick={onProceed} className='bg-blue-base text-white w-[135px] md:w-[320px] h-14 rounded med-3'>Yes, Logout</button>
        </div>
    </div>
  )
}

export default LogoutModal