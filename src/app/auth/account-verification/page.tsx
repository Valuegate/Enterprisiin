import Image from "next/image";
import Verify from "../../../assets/Screenshot 2023-07-28 at 12.31 1.png";
import { GoArrowLeft } from "react-icons/go";

const EmailVerification = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col w-[450px] md:w-full md:px-5 items-start">
        <div className="md:flex md:flex-row justify-between items-center w-full md:pt-6 pb-6 md:pb-4 md:relative">
          <div className="hidden md:block">
            <GoArrowLeft fill="#000000" size={"25px"} />
          </div>
          <h1 className="font-bold md:text-[20px] md:leading-[30px] text-[32px] leading-[42px] md:text-center w-full md:absolute">
            Account Verification
          </h1>
        </div>
        <p className="med-3 md:text-[14px] md:leading-[24px] text-light-black-4 pb-4 md:pb-10 md:text-center md:w-full">
          Account activation link has been sent to the email address{" "}
          <span className="font-bold">ajeigbetaiwomatthew@gmail.com</span>{" "}
          provided
        </p>

        <div className="flex justify-center mt-5 w-full">
          <Image src={Verify} alt={""} />
        </div>
        <p className="text-center mt-5 md:mt-10 med-3 md:text-[14px] md:leading-[22.5px] w-full">
          Didn&apos;t get email?
        </p>
        <div className="mt-10 md:mt-24 w-full">
          <button
            type="submit"
            className="rounded w-full h-12 text-white font-medium text-[16px] leading-[24px] md:leading-[25.6px] bg-blue-base"
          >
            Resend
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
