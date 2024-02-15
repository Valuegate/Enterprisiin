"use client";
import { useState } from "react";
import Button from "@/public/components/Button";
import { GoogleIcon } from "@/public/icons";
import Link from "next/link";
import PasswordInput from "@/public/components/PasswordInput/PasswordInput";
import { useSearchParams } from "next/navigation";
import { IoMdArrowBack } from "react-icons/io";
import React, { Suspense } from "react";

const Fallback = () => <div>Loading...</div>;

const Login = () => {
  return (
    <Suspense fallback={<Fallback />}>
      <Content />
    </Suspense>
  );
};

const Content = () => {
  const searchParams = useSearchParams();
  const role = searchParams.get("role");

  const displayText = (role: string): string => {
    return role === "Buyer"
      ? "Ready to buy? Let's reconnect!"
      : "Ready to sell? Let's reconnect!";
  };

  return (
    <div className="px-10 md:px-5 flex flex-col md:mb-10">
      <div className="md:flex md:flex-row justify-between items-center w-full md:pt-6 pb-4">
        <div className="hidden md:block">
          <IoMdArrowBack fill="#000000" size={"25px"} />
        </div>
        <h1 className="font-bold md:text-xl text-3xl md:text-center w-full">
          Welcome Back!
        </h1>
      </div>
      <p className="text-base md:text-sm font-medium text-light-black-4 pb-4 md:pb-10 md:text-center">
        {displayText(role as string)}
      </p>

      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium text-md"
          htmlFor="email"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email address"
          className="placeholder-italic placeholder:pl-0 mt-1 p-3 border-none bg-white-1 rounded w-full"
        />
      </div>

      <PasswordInput label={"Password"} />

      <div className="mb-8 mt-4">
        <div className="flex items-center justify-between">
          <label
            className="flex gap-2 items-center text-base text-light-black-4"
            htmlFor="remember"
          >
            <input type="checkbox" id="remember" className="custom mr-1 " />
            Remember me
          </label>
          <Link
            href="/auth/forgot-password"
            className="text-light-blue text-sm font-medium"
          >
            Forgot password?
          </Link>
        </div>
      </div>

      <div className="pb-12">
        <div className="mt-4">
          <Link href="../../onboard/profileupload">
            <button
              type="submit"
              className="border-r-amber-400 bg-light-blue rounded w-full h-12 text-white"
            >
              Login
            </button>
          </Link>
        </div>

        <div className="flex gap-4 items-center pt-4 pb-4">
          <hr className="border-none bg-light-black-1 h-[1px] w-full" />
          <div className="text-center font-base text-xl ">OR</div>
          <hr className="border-none bg-light-black-1 h-[1px] w-full" />
        </div>

        <Button
          type="button"
          className="rounded w-full text-light-blue flex justify-center items-center gap-4 font-medium"
          // disabled={true}
          colorType="secondary"
          // loading={load}
          //   handleClick={() => setLoad(!load)}
        >
          <span>
            <GoogleIcon color="#3399FF" />
          </span>
          Create with Google
        </Button>

        <div className="flex justify-center gap-1 pt-8">
          <h1 className="text-center font-medium text-l text-light-black-5">
            Don&apos;t have an account?
          </h1>
          <Link href="/auth/create">
            <h1 className="text-center font-medium text-l text-light-blue">
              Sign Up
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
