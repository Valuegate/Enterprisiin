"use client";
import Button from "@/public/components/Button";
import InputField from "@/public/components/InputField/InputField";
import { GoogleIcon } from "@/public/icons";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { IoMdArrowBack } from "react-icons/io";
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
    <div className="px-10 md:px-5 flex flex-col md:mb-10">
      <div className="md:flex md:flex-row justify-between items-center w-full md:pt-6 pb-4">
        <div className="hidden md:block">
          <IoMdArrowBack fill="#000000" size={"25px"} />
        </div>
        <h1 className="font-bold md:text-xl text-3xl md:text-center w-full">
          Create Account
        </h1>
      </div>

      <p className="text-base md:text-sm font-medium text-light-black-4 pb-4 md:pb-10 md:text-center">
        {displayText(role as string)}
      </p>
      <InputField />

      <div className="flex gap-4 items-center pt-4 pb-4">
        <hr className="border-none bg-light-black-1 h-[1px] w-full" />
        <div className="text-center font-base text-xl ">OR</div>
        <hr className="border-none bg-light-black-1 h-[1px] w-full" />
      </div>

      <Button
        type="button"
        className="bg-light-green-2 text-light-blue rounded w-full h-12 flex justify-center items-center gap-4 font-medium"
        // disabled={true}
        colorType="secondary"
        // loading={load}
      >
        <span>
          <GoogleIcon color="#3399FF" />
        </span>
        Create with Google
      </Button>

      <h1 className="text-center flex justify-center gap-2 font-medium mt-5 w-full">
        Already have an account?{" "}
        <span>
          <Link href="/auth/login">
            <h1 className="text-center font-semibold text-light-blue">Login</h1>
          </Link>
        </span>
      </h1>
    </div>
  );
};

export default CreateAccount;
