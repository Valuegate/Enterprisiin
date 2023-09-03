import Link from 'next/link';
import React, { useState, useRef, useEffect, FC } from 'react';
import { MdOutlineArrowDropDown } from 'react-icons/md';

interface iDropdownButton {
    title: string;
    menu1: string;
    menu2: string;
    menu3: string;
    menu4?: string;
  }

const DropdownButton: FC<iDropdownButton> = ({ title, menu1, menu2, menu3, menu4 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event: { target: any; }) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative inline-block text-center" ref={dropdownRef}>
      <button
        className="flex justify-center items-center w-[143px] h-[40px] border-none rounded bg-light-black text-center text-base"
        onClick={handleButtonClick}
      >
        {title}<span className='text-light-green-9'>All</span>
        <MdOutlineArrowDropDown className={`w-8 h-8 fill-current ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-[220px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-4 px-2 text-left" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <Link href="#" className="block px-4 py-2 text-base leading-8 text-light-black-5 hover:bg-green hover:text-white hover:rounded" role="menuitem">
            {menu1}
            </Link>
            <Link href="#" className="block px-4 py-2 text-base leading-8 text-light-black-5 hover:bg-green hover:text-white hover:rounded" role="menuitem">
            {menu2}
            </Link>
            <Link href="#" className="block px-4 py-2 text-base leading-8 text-light-black-5 hover:bg-green hover:text-white hover:rounded" role="menuitem">
            {menu3}
            </Link>
            <Link href="#" className="block px-4 py-2 text-base leading-8 text-light-black-5 hover:bg-green hover:text-white hover:rounded" role="menuitem">
            {menu4}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;