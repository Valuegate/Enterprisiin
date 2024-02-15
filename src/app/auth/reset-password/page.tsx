import PasswordInput from "@/public/components/PasswordInput/PasswordInput";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";

const PasswordReset = () => {
  return (
    <>
      <div className="px-10 md:px-5 flex flex-col md:mb-10">
        <div className="md:flex md:flex-row justify-between items-center w-full md:pt-6 pb-4">
          <div className="hidden md:block">
            <IoMdArrowBack fill="#000000" size={"25px"} />
          </div>
          <h1 className="font-bold md:text-xl text-3xl md:text-center w-full">
            Reset Password
          </h1>
        </div>
        <p className="text-base md:text-sm font-medium text-light-black-4 pb-4 md:pb-10 md:text-center">
          Reset your password and reclaim control
        </p>

        <div className="mb-5">
          <PasswordInput label={"New Password"} />
        </div>
        <div>
          <PasswordInput label={"Confirm Password"} />
        </div>

        <div className="mt-12 md:mt-72">
          <Link href="/onboard/upload-profile-picture">
            <button
              type="submit"
              className="border-r-amber-400 bg-light-blue rounded w-full h-12 text-white"
            >
              Login
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PasswordReset;
