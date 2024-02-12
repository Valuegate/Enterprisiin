"use client";
//import BackButton from "@/public/components/BackButton/backButton";
import Link from "next/link";

const ForgotPassword = () => {
  return (
    <>
      <div className="m-auto px-24 pt-36">
        <h1 className="font-bold text-3xl pb-4">Forgot Password</h1>
        <p className="text-base font-medium text-light-black-4 pb-4">
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
            className="placeholder-italic mt-1 p-3 border-none bg-white-1 rounded w-full"
          />
        </div>
        <div className="mt-12">
          <Link href="/auth/passwordreset">
            <button
              type="submit"
              className="border-r-amber-400 bg-light-blue rounded w-full h-12 text-white"
            >
              Send
            </button>
          </Link>
        </div>

        {/* <Link href={"../../auth/login"}> */}
        {/* <BackButton /> */}
        {/* </Link> */}
      </div>
    </>
  );
};

export default ForgotPassword;
