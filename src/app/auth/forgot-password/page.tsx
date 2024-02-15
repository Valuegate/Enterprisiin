"use client";
import { IoMdArrowBack } from "react-icons/io";
import Link from "next/link";

const ForgotPassword = () => {
  return (
    <>
      <div className="px-10 md:px-5 flex flex-col md:mb-10">
        <div className="md:flex md:flex-row justify-between items-center w-full md:pt-6 pb-4">
          <div className="hidden md:block">
            <IoMdArrowBack fill="#000000" size={"25px"} />
          </div>
          <h1 className="font-bold md:text-xl text-3xl md:text-center w-full">
            Forgot Password
          </h1>
        </div>
        <p className="text-base md:text-sm font-medium text-light-black-4 pb-4 md:pb-10 md:text-center">
          Input your registered email below
        </p>

        <div className="">
          <label
            htmlFor="email"
            className="block text-base font-medium text-light-black-6"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            className="placeholder-italic placeholder:pl-0 mt-1 p-3 border-none bg-white-1 rounded w-full"
          />
        </div>
        <div className="mt-12 md:mt-96 flex flex-col w-full">
          <Link href="/auth/email-verification">
            <button
              type="submit"
              className="border-r-amber-400 bg-light-blue rounded w-full h-12 text-white"
            >
              Send
            </button>
          </Link>

          <div className="flex md:hidden gap-3 mt-16 items-center justify-center text-light-blue">
            <IoMdArrowBack fill="#3399FF" size={"25px"} />
            Back
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
