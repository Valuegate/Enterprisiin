"use client";
import { useState } from "react";
import GetStartedCard from "@/public/components/Card/GetStartedCard";
import Button from "@/public/components/Button";
import { useRouter } from "next/navigation";

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
      <div className="m-auto px-24 pt-24">
        <h1 className="font-bold text-3xl pb-4">Get Started</h1>
        <p className="text-base font-medium text-light-black-4 pb-4">
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
