import Image from "next/image";
import { GoArrowLeft } from "react-icons/go";
import Verify from "../../../assets/Screenshot 2023-07-28 at 12.31 1.png";

const EmailSent = () => {
  return (
    <>
      <div className="px-10 md:px-5 flex flex-col md:mb-10">
        <div className="md:flex md:flex-row justify-between items-center w-full md:pt-6 pb-4">
          <div className="hidden md:block">
            <GoArrowLeft fill="#000000" size={"25px"} />
          </div>
          <h1 className="font-bold md:font-semibold md:text-xl text-3xl md:text-center w-full">
            Email Verification
          </h1>
        </div>
        <p className="text-base md:text-sm font-medium text-light-black-4 pb-4 md:pb-10 md:text-center">
          Account activation link has been sent to the email address{" "}
          <span className="font-bold">ajeigbetaiwomatthew@gmail.com</span>{" "}
          provided
        </p>

        <div className="flex justify-center mt-5">
          <Image src={Verify} alt={""} />
        </div>
        <p className="text-center mt-5 md:mt-10 text-light-black-4 text-base md:text-sm">
          Didn&apos;t get email?
        </p>
        <div className="mt-10 md:mt-24">
          <button
            type="submit"
            className="border-r-amber-400 bg-light-blue rounded w-full h-12 text-white"
          >
            Resend
          </button>
        </div>
      </div>
    </>
  );
};

export default EmailSent;
