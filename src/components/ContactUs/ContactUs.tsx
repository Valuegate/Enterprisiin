import {
  CopyIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "@/public/icons";
import Link from "next/link";
import { useRef } from "react";import { FC } from "react";

interface iContactUs {
  heading: string;
  subHeading: string;
}

const ContactUs: FC<iContactUs> = ({ heading, subHeading}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCopyClick = () => {
    const input = inputRef.current;
    if (input) {
      input.select();
      document.execCommand("copy");
    }
  };

  const inputRef1 = useRef<HTMLInputElement>(null);

  const handleCopyClick1 = () => {
    const input = inputRef1.current;
    if (input) {
      input.select();
      document.execCommand("copy");
    }
  };

  return (
    <>
      <div className="pl-4">
        <h2 className="text-xl font-semibold text-black pb-4">
          {heading}
        </h2>
        <p className="text-base font-medium text-light-black-5 pb-6">
          {subHeading}
        </p>

        <div className="w-[400px]">
          <label
            htmlFor="phone"
            className="block text-base font-semibold text-light-black-6"
          >
            Phone Number
          </label>
          <div className="relative">
            <input
              ref={inputRef1}
              type="text"
              className="flex items-center text-base text-light-black-5 font-medium mt-1 p-3 border-none bg-white-1 rounded w-full"
              value="+234 811 241 6080"
              readOnly
            />
            <button
              className="bg-light-black-1 p-3 absolute top-1/2 right-0 transform -translate-y-1/2 rounded-r-[3px]"
              onClick={handleCopyClick1}
            >
              <CopyIcon />
            </button>
          </div>

          <div className="mt-4">
            <label
              htmlFor="email"
              className="block text-base font-semibold text-light-black-6"
            >
              Email Address
            </label>
            <div className="relative">
              <input
                ref={inputRef}
                type="text"
                className="flex items-center text-base text-light-black-5 font-medium mt-1 p-3 border-none bg-white-1 rounded w-full"
                value="valuegate@gmail.com"
                readOnly
              />
              <button
                className="bg-light-black-1 p-3 absolute top-1/2 right-0 transform -translate-y-1/2 rounded-r-[3px]"
                onClick={handleCopyClick}
              >
                <CopyIcon />
              </button>
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="email"
              className="block text-base font-semibold text-light-black-6"
            >
              Twitter Page
            </label>
            <div className="relative">
              <input
                type="text"
                className="placeholder-left flex items-center text-base text-light-black-5 font-medium mt-1 p-3 border-none bg-white-1 rounded w-full"
                value="@_valuegateconsulting_"
                readOnly
              />
              <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 rounded-r-[3px]"
                onClick={handleCopyClick}
              >
                <Link href="#">
                  <TwitterIcon />
                </Link>
              </button>
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="email"
              className="block text-base font-semibold text-light-black-6"
            >
              Facebook Page
            </label>
            <div className="relative">
              <input
                type="text"
                className="placeholder-left flex items-center text-base text-light-black-5 font-medium mt-1 p-3 border-none bg-white-1 rounded w-full"
                value="@_valuegateconsulting_"
                readOnly
              />
              <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 rounded-r-[3px]"
                onClick={handleCopyClick}
              >
                <Link href="#">
                  <FacebookIcon />
                </Link>
              </button>
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="email"
              className="block text-base font-semibold text-light-black-6"
            >
              Instagram Page
            </label>
            <div className="relative">
              <input
                type="text"
                className="placeholder-left flex items-center text-base text-light-black-5 font-medium mt-1 p-3 border-none bg-white-1 rounded w-full"
                value="@_valuegateconsulting_"
                readOnly
              />
              <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 rounded-r-[3px]"
                onClick={handleCopyClick}
              >
                <Link href="#">
                  <InstagramIcon />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
