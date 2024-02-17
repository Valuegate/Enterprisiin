import Image from "next/image";
import React from "react";
import logo from "@/public/assets/white-logo.png";

const WhiteLogo = () => {
  return (
    <>
      <div className="flex items-center gap-1">
        <div>
          <Image src={logo} alt={""} />
        </div>
        <div>
          <h1 className="text-2xl text-white font-semibold">enterprisiin</h1>
        </div>
      </div>
    </>
  );
};

export default WhiteLogo;
