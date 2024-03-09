import BusinessCard from "@/public/components/BusinessCard/BusinessCard";
import Image from "next/image";
import React, { useState } from "react";
import BusinessMan from "@/public/assets/Businessman-amico1.png";

const Consult = () => {
  const [userState, setUserState] = useState<number>(-1);

  return (
    <div className="h-[90vh] md:h-auto pt-4 pb-6 px-6">
      <div className="flex gap-7">
        <div className="w-[35%] md:w-full h-[90vh] md:h-auto pb-10 flex flex-col">
          <div className="h-[20vh] md:h-auto flex flex-col">
            <h2 className="text-[32px] md:text-[20px] leading-[42px] md:leading-[30px] font-bold pb-2 text-contrast-100 md:mt-12 mt-0">
              Consult Expertee
            </h2>
            <p className="text-base font-medium text-contrast-base">
              Paggico is a growing car wash and cleaning service segment
              operational across India.
            </p>
            <h5 className="text-base font-semibold text-contrast-80 mt-6">
              Business Types
            </h5>
          </div>

          <div className="pt-6 w-full h-[65vh] md:h-auto overflow-y-scroll md:overflow-y-visible scrollbar-custom">
            <BusinessCard
              currentState={userState}
              setCurrentState={(val: number) => setUserState(val)}
            />
          </div>
        </div>
        <div className="w-[65%] md:hidden h-[85vh] bg-white">
          <div className="flex justify-center items-center w-full h-full">
            <Image src={BusinessMan} alt={"Business Man"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consult;
