import {
  CopyIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "@/public/icons";
import Link from "next/link";
import { useRef } from "react";
import { FC } from "react";

interface iContactUs {
  heading: string;
  subHeading: string;
}

const ContactUs: FC<iContactUs> = ({ heading, subHeading }) => {
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
      <div className="px-4 ">
        <h2 className="text-[20px] md:text-[16px] leading-[36px] md:leading-[24px] font-bold text-contrast-100">
          {heading}
        </h2>
        <p className="med-3 md:text-[14px] md:leading-[24px] text-contrast-base mb-5 mt-2">
          {subHeading}
        </p>

        <div className="w-[400px]">
          <label
            htmlFor="phone"
            className="semi-3 text-contrast-80 md:text-[14px] md:leading-[22.4px]"
          >
            Phone Number
          </label>
          <div className="relative">
            <input
              ref={inputRef1}
              type="text"
              className="flex items-center med-3 md:text-[14px] md:leading-[22.4px] placeholder:text-contrast-base text-contrast-100 mt-1 p-3 border-none bg-input rounded w-full"
              value="+234 811 241 6080"
              readOnly
            />
            <button
              className="bg-contrast-10 p-3 absolute top-1/2 right-0 transform -translate-y-1/2 rounded-r-[3px]"
              onClick={handleCopyClick1}
            >
              <CopyIcon />
            </button>
          </div>

          <div className="mt-4">
            <label
              htmlFor="email"
              className="semi-3 text-contrast-80 md:text-[14px] md:leading-[22.4px]"
            >
              Email Address
            </label>
            <div className="relative">
              <input
                ref={inputRef}
                type="text"
                className="flex items-center med-3 md:text-[14px] md:leading-[22.4px] placeholder:text-contrast-base text-contrast-100 mt-1 p-3 border-none bg-input rounded w-full"
                value="valuegate@gmail.com"
                readOnly
              />
              <button
                className="bg-contrast-10 p-3 absolute top-1/2 right-0 transform -translate-y-1/2 rounded-r-[3px]"
                onClick={handleCopyClick}
              >
                <CopyIcon />
              </button>
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="email"
              className="semi-3 text-contrast-80 md:text-[14px] md:leading-[22.4px]"
            >
              Twitter Page
            </label>
            <div className="relative">
              <input
                type="text"
                className="flex items-center med-3 md:text-[14px] md:leading-[22.4px] pl-14 placeholder:text-contrast-base text-contrast-100 mt-1 p-3 border-none bg-input rounded w-full"
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
              className="semi-3 text-contrast-80 md:text-[14px] md:leading-[22.4px]"
            >
              Facebook Page
            </label>
            <div className="relative">
              <input
                type="text"
                className="flex items-center med-3 md:text-[14px] md:leading-[22.4px] pl-14 placeholder:text-contrast-base text-contrast-100 mt-1 p-3 border-none bg-input rounded w-full"
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
              className="semi-3 text-contrast-80 md:text-[14px] md:leading-[22.4px]"
            >
              Instagram Page
            </label>
            <div className="relative">
              <input
                type="text"
                className="flex items-center med-3 md:text-[14px] md:leading-[22.4px] pl-14 placeholder:text-contrast-base text-contrast-100 mt-1 p-3 border-none bg-input rounded w-full"
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
