import Image from "next/image";
import React from "react";
import logo from "@/public/assets/enterprisiin-logo.png";

const Logo = () => {
  return (
    <>
      <div className="flex items-center gap-1 w-fit">
        <div>
          <Image src={logo} alt={""} />
        </div>
        <div>
          <h1 className="semi-1 text-blue-base md:text-[18.53px] md:leading-[27.8px]">
            enterprisiin
          </h1>
        </div>
      </div>
    </>
  );
};

export default Logo;
