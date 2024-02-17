"use client";

import PasswordInput from "@/public/components/PasswordInput/PasswordInput";
import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";
import { useState } from "react";

const PasswordReset = () => {
  const [isPasswordFilled, setPasswordFilled] = useState<boolean>(false);
  const [isConfirmFilled, setConfirmFilled] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col w-[500px] md:w-full md:px-5 items-start">
        <div className="md:flex md:flex-row justify-between items-center w-full md:pt-6 pb-6 md:pb-4 md:relative">
          <div className="hidden md:block">
            <GoArrowLeft fill="#000000" size={"25px"} />
          </div>
          <h1 className="font-bold md:text-[20px] md:leading-[30px] text-[32px] leading-[42px] md:text-center w-full md:absolute">
            Reset Password
          </h1>
        </div>
        <p className="med-3 md:text-[14px] md:leading-[24px] text-light-black-4 pb-4 md:pb-10 md:text-center md:w-full">
          Reset your password and reclaim control
        </p>

        <div className="mb-4 w-full gap-4 flex flex-col">
          <PasswordInput
            label={"New Password"}
            onChange={(e) => {
              setPasswordFilled(e.target.value.length !== 0);
            }}
          />
          <PasswordInput
            label={"Confirm Password"}
            onChange={(e) => {
              setConfirmFilled(e.target.value.length !== 0);
            }}
          />
        </div>

        <div className="mt-12 md:mt-72 w-full">
          <button
            type="submit"
            className={`${
              isConfirmFilled && isPasswordFilled
                ? "bg-blue-base"
                : "bg-blue-20"
            } rounded w-full h-12 text-white font-medium text-[16px] leading-[24px] md:leading-[25.6px]`}
            onClick={() => {
              window.location.href = "/onboard";
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
