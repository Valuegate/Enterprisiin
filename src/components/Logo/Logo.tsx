import Image from 'next/image';
import React from 'react';
import logo from "@/public/assets/entreprisiin-logo.png";

const Logo = () => {
  return (
    <>
    <div className="flex items-center gap-1 pt-4 pl-4">
        <div>
            <Image src={logo} alt={''} />
        </div>
        <div><h1 className="text-2xl text-light-blue font-semibold">enterprisiin</h1></div>
    </div>
    </>
  )
}

export default Logo;