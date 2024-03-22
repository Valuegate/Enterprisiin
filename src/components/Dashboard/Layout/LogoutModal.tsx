import React, {FC} from 'react';


import Image from "next/image";
import Ask from "@/public/assets/ask.png";

import { iModalLogoutProp } from '../types';

const LogoutModal:FC<iModalLogoutProp> = ({onCancel, onProceed}) => {
  return (
    <div className='flex flex-col items-center '>
        <Image src={Ask} alt='ask'/> 
        <h2 className='bold-2 mt-5 text-contrast-100'>Logout?</h2>
        <p className='med-3 mt-5 text-contrast-base'>Are you sure you want to log out?</p>
    </div>
  )
}

export default LogoutModal