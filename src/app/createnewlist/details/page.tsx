"use client";
import NextButton from "@/public/components/NextButton/NextButton";
import ProgressBar from "@/public/components/ProgressBar/ProgressBar";
import IBackButton from "@/public/components/iBackButton/IBackButton";
import { InfoIcon, SearchIcon } from "@/public/icons";
import * as RadioGroup from "@radix-ui/react-radio-group";
import Link from "next/link";

const Details = () => {
  return (
    <>
      <div className="">
        <ProgressBar progress={20} />
      </div>

      <div className="pt-8 overflow-y-scroll h-[85vh]">
        <div className="text-center px-[12rem]">
          <h1 className="text-[36px] font-semibold leading-[54px] pb-2">
            Tell us about your business
          </h1>
          <p className="text-base font-medium">
            Share the unique story of your business and its offerings to the
            buyers
          </p>
        </div>

        <div className="pt-6 px-40 pb-20">
          <div className="pb-4">
            <label
              htmlFor="business-name"
              className="font-semibold text-base text-light-green-17"
            >
              Business Name
            </label>
            <p className="font-medium text-[16px] leading-[32px] text-light-green-17">
            Make sure the picture is an overview of.
            </p>
            <input
              type="text"
              id="business-name"
              name="business-name"
              placeholder="Business identity name"
              className="placeholder-italic mt-1 p-3 border-none bg-white-1 rounded w-full"
            />
          </div>

          <div className="pb-4">
            <label
              htmlFor="business-location"
              className="font-semibold text-base text-light-green-17"
            >
              Business Location
            </label>
            <p className="font-medium text-[16px] leading-[32px] text-light-green-17">
              Location should be written in form of state and country.
            </p>
            <input
              type="text"
              id="business-location"
              name="business-location"
              placeholder="Location"
              className="placeholder-italic mt-1 p-3 border-none bg-white-1 rounded w-[632px]"
            />
          </div>

          <div className="pb-4">
            <label
              htmlFor="industry"
              className="font-semibold text-base text-light-green-17"
            >
              Industry and Niche
            </label>
            <p className="font-medium text-[16px] leading-[32px] text-light-green-17">
              Specify the industry and niche in which their business operates.
            </p>
            <div className="relative flex items-center w-[631px]">
              <input
                type="text"
                id="industry"
                name="industry"
                placeholder="Add industry"
                className="placeholder-italic mt-1 p-3 border-none bg-white-1 rounded w-[631px]"
              />
              <span className="absolute right-4 cursor-pointer">
                <SearchIcon />
              </span>
            </div>
          </div>

          <div className="pb-2">
            <h2 className="font-semibold text-base text-light-green-17">
              Legal Entity
            </h2>
            <p className="font-medium text-[16px] leading-[32px] text-light-green-17">
              Location should be written in form of state and country.
            </p>
            <div className="flex flex-col gap-1 pt-2">
              <div className="flex gap-2 items-center">
                <input
                  id={"r1"}
                  type="radio"
                  value="Buyer"
                  name="default-radio"
                  className="custom w-4 h-4"
                  // checked={selectedOption === "Buyer"}
                  // onChange={handleOptionChange}
                />
                <label
                  className="font-medium text-[16px] leading-[32px] text-light-green-17"
                  htmlFor="r1"
                >
                  Sole Proprietorship
                </label>
                <span>
                  <InfoIcon />
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  id={"r2"}
                  type="radio"
                  value="Buyer"
                  name="default-radio"
                  className="custom w-4 h-4"
                  // checked={selectedOption === "Buyer"}
                  // onChange={handleOptionChange}
                />
                <label
                  className="font-medium text-[16px] leading-[32px] text-light-green-17"
                  htmlFor="r2"
                >
                  Partnership
                </label>
                <span>
                  <InfoIcon />
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  id={"r3"}
                  type="radio"
                  value="Buyer"
                  name="default-radio"
                  className="custom w-4 h-4"
                  // checked={selectedOption === "Buyer"}
                  // onChange={handleOptionChange}
                />
                <label
                  className="font-medium text-[16px] leading-[32px] text-light-green-17"
                  htmlFor="r3"
                >
                  Limited Liability Company (LLC)
                </label>
                <span>
                  <InfoIcon />
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  id={"r4"}
                  type="radio"
                  value="Buyer"
                  name="default-radio"
                  className="custom w-4 h-4"
                  // checked={selectedOption === "Buyer"}
                  // onChange={handleOptionChange}
                />
                <label
                  className="font-medium text-[16px] leading-[32px] text-light-green-17"
                  htmlFor="r4"
                >
                  Corporation
                </label>
                <span>
                  <InfoIcon />
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  id={"r5"}
                  type="radio"
                  value="Buyer"
                  name="default-radio"
                  className="custom w-4 h-4"
                  // checked={selectedOption === "Buyer"}
                  // onChange={handleOptionChange}
                />
                <label
                  className="font-medium text-[16px] leading-[32px] text-light-green-17"
                  htmlFor="r5"
                >
                  Nonprofit Organization
                </label>
                <span>
                  <InfoIcon />
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  id={"r6"}
                  type="radio"
                  value="Buyer"
                  name="default-radio"
                  className="custom w-4 h-4"
                  // checked={selectedOption === "Buyer"}
                  // onChange={handleOptionChange}
                />
                <label
                  className="font-medium text-[16px] leading-[32px] text-light-green-17"
                  htmlFor="r6"
                >
                  Cooperative
                </label>
                <span>
                  <InfoIcon />
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  id={"r7"}
                  type="radio"
                  value="Buyer"
                  name="default-radio"
                  className="custom w-4 h-4"
                  // checked={selectedOption === "Buyer"}
                  // onChange={handleOptionChange}
                />
                <label
                  className="font-medium text-[16px] leading-[32px] text-light-green-17"
                  htmlFor="r7"
                >
                  Limited Partnership (LP)
                </label>
                <span>
                  <InfoIcon />
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  id={"r8"}
                  type="radio"
                  value="Buyer"
                  name="default-radio"
                  className="custom w-4 h-4"
                  // checked={selectedOption === "Buyer"}
                  // onChange={handleOptionChange}
                />
                <label
                  className="font-medium text-[16px] leading-[32px] text-light-green-17"
                  htmlFor="r8"
                >
                  Limited Liability Partnership (LLP)
                </label>
                <span>
                  <InfoIcon />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <hr className="border-none bg-light-black-1 h-[1px] w-full absolute bottom-[3.5rem]" />
      </div>

      <div className="pl-6 top-auto fixed bottom-0 pb-4">
        <div className="flex justify-between">
          <Link href="../../createnewlist/newlist">
            <IBackButton />
          </Link>
          <Link href="../../createnewlist/description">
            <NextButton />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Details;
