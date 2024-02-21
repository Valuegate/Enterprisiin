"use client";
import { useState } from "react";
import Button from "@/public/components/Button";
import { GoogleIcon } from "@/public/icons";
import Link from "next/link";
import PasswordInput from "@/public/components/PasswordInput/PasswordInput";
import { useSearchParams } from "next/navigation";
import { GoArrowLeft } from "react-icons/go";
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

  const [isEmailFilled, setEmailFilled] = useState<boolean>(false);
  const [isPasswordFilled, setPasswordFilled] = useState<boolean>(false);

  const displayText = (role: string): string => {
    return role === "Buyer"
      ? "Ready to buy? Let's reconnect!"
      : "Ready to sell? Let's reconnect!";
  };

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col w-[450px] md:w-full md:px-5 items-start">
        <div className="md:flex md:flex-row justify-between items-center w-full md:pt-6 pb-6 md:pb-4 md:relative">
          <div className="hidden md:block">
            <GoArrowLeft fill="#000000" size={"25px"} />
          </div>
          <h1 className="font-bold md:text-[20px] md:leading-[30px] text-[32px] leading-[42px] md:text-center w-full md:absolute">
            Welcome Back!
          </h1>
        </div>
        <p className="med-3 md:text-[14px] md:leading-[24px] text-light-black-4 pb-4 md:pb-10 md:text-center md:w-full">
          {displayText(role as string)}
        </p>

        <div className="mb-4 w-full">
          <label
            className="semi-3 md:text-[14px] md:leading-[22.4px]"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            onChange={(e) => {
              setEmailFilled(e.target.value.length !== 0);
            }}
            className="placeholder-italic mt-1 p-3 placeholder:pl-0 border-none bg-default placeholder:text-contrast-30 pl:text-[16px] pl:leading-[24px] md:placeholder:text-[14px] md:placeholder:leading-[22.4px]  rounded w-full"
          />
        </div>

        <PasswordInput
          label={"Password"}
          onChange={(val) => setPasswordFilled(val.target.value.length !== 0)}
        />

        <div className="mb-8 mt-4 w-full">
          <div className="flex items-center justify-between">
            <label
              className="flex gap-2 items-center med-3 md:text-[14px] md:leading-[22.5px]"
              htmlFor="remember"
            >
              <input
                type="checkbox"
                id="remember"
                className="custom mr-2 md:mr-1"
              />
              Remember me
            </label>
            <Link
              href="/auth/forgot-password"
              className="text-blue-base med-3 md:text-[14px] md:leading-[22.5px]"
            >
              Forgot password?
            </Link>
          </div>
        </div>

        <div className="pb-2 mt-4 w-full">
          <button
            type="submit"
            className={`${
              isEmailFilled && isPasswordFilled ? "bg-blue-base" : "bg-blue-20"
            } rounded w-full h-12 text-white font-medium text-[16px] leading-[24px] md:leading-[25.6px]`}
            onClick={() => {
              window.location.href = "/onboard";
            }}
          >
            Login
          </button>
        </div>

        <div className="flex gap-4 justify-center items-center py-4 w-full">
          <div className="bg-contrast-10 h-[1px] w-[50%]" />
          <p className="text-center med-3">OR</p>
          <div className="bg-contrast-10 h-[1px] w-[50%]" />
        </div>

        <Button
          type="button"
          className="text-blue-base rounded w-full h-12 flex justify-center items-center gap-4"
          colorType="secondary"
        >
          <span>
            <GoogleIcon color="#3399FF" />
          </span>
          Create with Google
        </Button>

        <div className="flex justify-center gap-1 pt-4 w-full">
          <h1 className="text-center flex justify-center gap-2 med-3 mt-5 w-full md:mb-5">
            Don&apos;t have an account?{" "}
            <span>
              <Link href="/auth/create">
                <h1 className="text-center text-blue-base">Sign Up</h1>
              </Link>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
