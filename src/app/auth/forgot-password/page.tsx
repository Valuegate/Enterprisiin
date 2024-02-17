"use client";
import { GoArrowLeft } from "react-icons/go";
import Link from "next/link";

import React, { useState } from "react";

const ForgotPassword = () => {
  const [isFilled, setFilled] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col w-[395px] md:w-full md:px-5 items-start">
        <div className="md:flex md:flex-row justify-between items-center w-full md:pt-6 pb-6 md:pb-4 md:relative">
          <div className="hidden md:block">
            <GoArrowLeft fill="#000000" size={"25px"} />
          </div>
          <h1 className="font-bold md:text-[20px] md:leading-[30px] text-[32px] leading-[42px] md:text-center w-full md:absolute">
            Forgot Password
          </h1>
        </div>
        <p className="med-3 md:text-[14px] md:leading-[24px] text-light-black-4 pb-4 md:pb-10 md:text-center md:w-full">
          Input your registered email below
        </p>

        <div className="w-full">
          <label
            htmlFor="email"
            className="semi-3 md:text-[14px] md:leading-[22.4px]"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            onChange={(e) => setFilled(e.target.value.length !== 0)}
            className="placeholder-italic mt-1 p-3 placeholder:pl-0 border-none bg-input placeholder:text-contrast-30 pl:text-[16px] pl:leading-[24px] md:placeholder:text-[14px] md:placeholder:leading-[22.4px]  rounded w-full"
          />
        </div>
        <div className="mt-12 md:mt-96 flex flex-col w-full">
          <button
            type="submit"
            className={`${
              isFilled ? "bg-blue-base" : "bg-blue-20"
            } rounded w-full h-12 text-white font-medium text-[16px] leading-[24px] md:leading-[25.6px]`}
            onClick={() => {
              window.location.href = "/auth/email-verification";
            }}
          >
            Send
          </button>

          <div className="flex md:hidden gap-3 mt-16 items-center justify-center text-blue-base med-3 cursor-pointer ">
            <GoArrowLeft fill="#3399FF" size={"25px"} />
            Back
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
