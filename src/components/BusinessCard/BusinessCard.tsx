'use client';
import Image from 'next/image';
import { FC, useState } from 'react';
import BS from "@/public/assets/sale-black.png";
import BSA from "@/public/assets/sale-black.png";
import BI from '@/public/assets/investment-black.png';
import BIA from '@/public/assets/investment-black.png';
import BL from '@/public/assets/loan-black.png';
import BLA from '@/public/assets/loan-black.png';
import AS from '@/public/assets/asset-black.png';
import ASA from '@/public/assets/asset-black.png';

interface iGetStartedCard {
  getSelectedOption: (data: string) => void;
}

const BusinessCard: FC<iGetStartedCard> = ({ getSelectedOption }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const handleOptionChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedOption(event.target.value);
    getSelectedOption(event.target.value as string);
  };

  const [activeContainer, setActiveContainer] = useState<
    'first' | 'second' | 'third' | 'fourth' | null
  >(null);
  return (
    <>
      <label htmlFor='sale'>
        <div
          className={`rounded mb-6 w-full border-[1.5px] ${
            activeContainer === 'first'
              ? 'border-blue-base bg-selection'
              : 'border-contrast-10 bg-default'
          }`}
          onClick={() => setActiveContainer('first')}
        >
          <div className='flex gap-4 pt-4 pb-4 justify-between items-start px-4'>
            <div className='flex items-center justify-center w-[50px] h-[50px] md:h-[45px] md:w-[45px]'>
              <Image
                src={activeContainer === 'first' ? BSA : BS}
                alt={'Work time-amico'}
                width={40}
                height={40}
                className='w-[40px] h-[40px] md:h-[32px] md:w-[32px]'
              />
            </div>

            <div className='flex flex-col w-[80%] gap-2'>
              <div className='flex justify-between items-center'>
                <h2 className='font-semibold text-[20px] leading-[36px] md:text-[16px] md:leading-[25.6px]'>
                  Business for Sale
                </h2>

                <input
                  id={'sale'}
                  type='radio'
                  value='Sale'
                  name='default-radio'
                  className='w-4 h-4'
                  checked={selectedOption === 'Sale'}
                  onChange={handleOptionChange}
                />
              </div>
              <p className='font-medium text-[16px] leading-8 mb-2 md:text-[14px] md:leading-[22.4px]'>
                Pool Academy Aquatics is an inter national aquatics club.
              </p>
            </div>
          </div>
        </div>
      </label>

      <label htmlFor='investment'>
        <div
          className={`bg-gray-light rounded mb-6 border-[1.5px] ${
            activeContainer === 'second'
              ? 'border-blue-base bg-selection'
              : 'border-contrast-10 bg-default'
          }`}
          onClick={() => setActiveContainer('second')}
        >
          <div className='flex gap-4 pt-4 pb-4 justify-between items-start px-4'>
            <div className='flex items-center justify-center w-[50px] h-[50px] md:h-[45px] md:w-[45px]'>
              <Image
                src={activeContainer === 'second' ? BIA : BI}
                alt={'Work time-amico'}
                width={40}
                height={40}
                className='w-[40px] h-[40px] md:h-[32px] md:w-[32px]'
              />
            </div>

            <div className='flex flex-col w-[80%] gap-2'>
              <div className='flex justify-between items-center'>
                <h2 className='font-semibold text-[20px] leading-[36px] md:text-[16px] md:leading-[25.6px]'>
                  Business for Investment
                </h2>

                <input
                  id={'investment'}
                  type='radio'
                  value='Investment'
                  name='default-radio'
                  className='w-4 h-4'
                  checked={selectedOption === 'Investment'}
                  onChange={handleOptionChange}
                />
              </div>
              <p className='font-medium text-[16px] leading-8 mb-2 md:text-[14px] md:leading-[22.4px]'>
                Pool Academy Aquatics is an inter national aquatics club.
              </p>
            </div>
          </div>
        </div>
      </label>

      <label htmlFor='loan'>
        <div
          className={`bg-gray-light rounded mb-6 border-[1.5px] ${
            activeContainer === 'third'
              ? 'border-blue-base bg-selection'
              : 'border-contrast-10 bg-default'
          }`}
          onClick={() => setActiveContainer('third')}
        >
          <div className='flex gap-4 pt-4 pb-4 justify-between items-start px-4'>
            <div className='flex items-center justify-center w-[50px] h-[50px] md:h-[45px] md:w-[45px]'>
              <Image
                src={activeContainer === 'third' ? BLA : BL}
                alt={'Work time-amico'}
                width={40}
                height={40}
                className='w-[40px] h-[40px] md:h-[32px] md:w-[32px]'
              />
            </div>

            <div className='flex flex-col w-[80%] gap-2'>
              <div className='flex justify-between items-center'>
                <h2 className='font-semibold text-[20px] leading-[36px] md:text-[16px] md:leading-[25.6px]'>
                  Business for Loan
                </h2>

                <input
                  id={'loan'}
                  type='radio'
                  value='Loan'
                  name='default-radio'
                  className='w-4 h-4'
                  checked={selectedOption === 'Loan'}
                  onChange={handleOptionChange}
                />
              </div>
              <p className='font-medium text-[16px] leading-8 mb-2 md:text-[14px] md:leading-[22.4px]'>
                Pool Academy Aquatics is an inter national aquatics club.
              </p>
            </div>
          </div>
        </div>
      </label>

      <label htmlFor='asset'>
        <div
          className={`bg-gray-light rounded mb-6 border-[1.5px] ${
            activeContainer === 'fourth'
              ? 'border-blue-base bg-selection'
              : 'border-contrast-10 bg-default'
          }`}
          onClick={() => setActiveContainer('fourth')}
        >
          <div className='flex gap-4 pt-4 pb-4 justify-between items-start px-4'>
            <div className='flex items-center justify-center w-[50px] h-[50px] md:h-[45px] md:w-[45px]'>
              <Image
                src={activeContainer === 'fourth' ? ASA : AS}
                alt={'Work time-amico'}
                width={40}
                height={40}
                className='w-[40px] h-[40px] md:h-[32px] md:w-[32px]'
              />
            </div>

            <div className='flex flex-col w-[80%] gap-2'>
              <div className='flex justify-between items-center'>
                <h2 className='font-semibold text-[20px] leading-[36px] md:text-[16px] md:leading-[25.6px]'>
                  Asset for Sale
                </h2>

                <input
                  id={'asset'}
                  type='radio'
                  value='Asset'
                  name='default-radio'
                  className='w-4 h-4'
                  checked={selectedOption === 'Asset'}
                  onChange={handleOptionChange}
                />
              </div>
              <p className='font-medium text-[16px] leading-8 mb-2 md:text-[14px] md:leading-[22.4px]'>
                Pool Academy Aquatics is an inter national aquatics club.
              </p>
            </div>
          </div>
        </div>
      </label>
    </>
  );
};

export default BusinessCard;
