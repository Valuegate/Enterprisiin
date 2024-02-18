"use client";
import Button from "@/public/components/Button";
import InputField from "@/public/components/InputField/InputField";
import { GoogleIcon } from "@/public/icons";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { GoArrowLeft } from "react-icons/go";
import React, { Suspense } from "react";

const Fallback = () => <div>Loading...</div>;

const CreateAccount = () => {
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
      ? "Join us today and unlock new opportunities!"
      : "Get started to start your selling journey";
  };

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col w-[395px] md:w-full md:px-5 items-start">
        <div className="md:flex md:flex-row justify-between items-center w-full md:pt-6 pb-6 md:pb-4 md:relative">
          <div className="hidden md:block">
            <GoArrowLeft fill="#000000" size={"25px"} />
          </div>
          <h1 className="font-bold md:text-[20px] md:leading-[30px] text-[32px] leading-[42px] md:text-center w-full md:absolute">
            Create Account
          </h1>
        </div>

        <p className="med-3 md:text-[14px] md:leading-[24px] text-light-black-4 pb-4 md:pb-10 md:text-center md:w-full">
          {displayText(role as string)}
        </p>
        <InputField />

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

        <h1 className="text-center flex justify-center gap-2 med-3 mt-5 w-full md:mb-5">
          Already have an account?{" "}
          <span>
            <Link href="/auth/login">
              <h1 className="text-center text-blue-base">Login</h1>
            </Link>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default CreateAccount;
