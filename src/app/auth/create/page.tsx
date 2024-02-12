"use client";
import Button from "@/public/components/Button";
import InputField from "@/public/components/InputField/InputField";
import { GoogleIcon } from "@/public/icons";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

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
    <Suspense fallback={<Fallback />}>
      <div className="m-auto px-24 pt-24">
        <h1 className="font-bold text-3xl pb-4">Create Account</h1>
        <p className="text-base font-medium text-lightblack pb-4">
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
          //   handleClick={() => setLoad(!load)}
        >
          <span>
            <GoogleIcon color="#3399FF" />
          </span>
          Create with Google
        </Button>

        <div className="flex justify-center gap-1 pt-8 pb-12">
          <h1 className="text-center font-medium text-l">
            Already have an account?
          </h1>
          <Link href="../../auth/login">
            <h1 className="text-center font-semibold text-l text-light-blue">
              Login
            </h1>
          </Link>
        </div>
      </div>
    </Suspense>
  );
};

export default CreateAccount;
