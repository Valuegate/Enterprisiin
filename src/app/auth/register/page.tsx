"use client";
import { useState } from "react";
import GetStartedCard from "@/public/components/Card/GetStartedCard";
import Button from "@/public/components/Button";
import { useRouter } from "next/navigation";
import { IoMdArrowBack } from "react-icons/io";

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
    <>
      <div className="px-10 md:px-5 flex flex-col">
        <div className="md:flex md:flex-row justify-between items-center w-full md:pt-6 pb-4">
          <div className="hidden md:block">
            <IoMdArrowBack fill="#000000" size={"25px"} />
          </div>
          <h1 className="font-bold md:text-xl text-3xl md:text-center w-full">
            Get Started
          </h1>
        </div>
        <p className="text-base md:text-sm font-medium text-light-black-4 pb-4 md:pb-10 md:text-center">
          Select your perfect match
        </p>
        <div
        // className={`box ${isClicked ? "clicked" : ""}`}
        // onClick={handleClick}
        >
          <GetStartedCard getSelectedOption={handleSelectOption} />
        </div>
        <Button
          type="button"
          className="border rounded w-full h-12 text-white"
          colorType="primary"
          handleClick={handleProceed}
        >
          Proceed
        </Button>
      </div>
    </>
  );
};

export default Register;
