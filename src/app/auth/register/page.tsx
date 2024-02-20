"use client";
import { useState } from "react";
import GetStartedCard from "@/public/components/Card/GetStartedCard";
import Button from "@/public/components/Button";
import { useRouter } from "next/navigation";
import { GoArrowLeft } from "react-icons/go";

const Register = () => {
  const router = useRouter();
  const [userState, setUserState] = useState<string | null>("");
  const handleSelectOption = (data: string) => {
    setUserState(data);
  };

  const handleProceed = () => {
    return router.push(`/auth/create?role=${userState}`);
  };

  // const [isClicked, setIsClicked] = useState(false);

  // const handleClick = () => {
  //   setIsClicked(!isClicked);
  // };

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col w-[450px] md:w-full md:px-5 items-start">
        <div className="md:flex md:flex-row justify-between items-center w-full md:pt-6 pb-6 md:pb-4 md:relative">
          <div className="hidden md:block">
            <GoArrowLeft fill="#000000" size={"25px"} />
          </div>
          <h1 className="font-bold md:text-[20px] md:leading-[30px] text-[32px] leading-[42px] md:text-center w-full md:absolute">
            Get Started
          </h1>
        </div>
        <p className="med-3 md:text-[14px] md:leading-[24px] text-light-black-4 pb-4 md:pb-10 md:text-center md:w-full">
          Select your perfect match
        </p>
        <GetStartedCard getSelectedOption={handleSelectOption} />
        <Button
          type="button"
          className="border rounded w-full h-12 text-white md:mt-36"
          colorType="primary"
          handleClick={handleProceed}
        >
          Proceed
        </Button>
      </div>
    </div>
  );
};

export default Register;
