import BusinessCard from '@/public/components/BusinessCard/BusinessCard';
import Image from 'next/image';
import React, { useState } from 'react'
import BusinessMan from "@/public/assets/Businessman-amico1.png"

const Consult = () => {
  const [userState, setUserState] = useState<string | null>("");
  const handleSelectOption = (data: string) => {
    setUserState(data);
  };
  
  return (
    <div className="md:h-[90vh] pt-6 pb-10 px-10">
      <div className="flex gap-7">
        <div className='w-[35%] overflow-y-scroll h-[90vh] pb-10'>
          <h2 className='text-[32px] leading-[42px] font-bold pb-2 text-contrast-100'>Consult Expertee</h2>
          <p className='text-base font-medium text-contrast-base'>Paggico is a growing car wash and cleaning service segment operational across India.</p>

          <div className='pt-6'>
            <h5 className='text-base font-semibold text-contrast-80'>Business Types</h5>
            <div className="pt-4">
            <BusinessCard getSelectedOption={handleSelectOption} />
            </div>
          </div>
        </div>
        <div className='w-[65%] h-[80vh] bg-white'>
          <div className='flex justify-center items-center'>
          <Image src={BusinessMan} alt={'Business Man'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Consult;