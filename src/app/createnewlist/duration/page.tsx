"use client";
import NextButton from "@/public/components/NextButton/NextButton";
import ProgressBar from "@/public/components/ProgressBar/ProgressBar";
import IBackButton from "@/public/components/iBackButton/IBackButton";
import Link from "next/link";

const Duration = () => {
  return (
    <div className="relative">
      <div className="">
        <ProgressBar progress={50} />
      </div>

      <div className="pt-8 pb-32 overflow-y-scroll h-[85vh]">
        <div className="text-center px-[12rem]">
          <h1 className="text-[36px] font-semibold leading-[52px] pb-2">
            When is your business established?
          </h1>
          <p className="text-base font-medium">
            Make sure the picture is an overview of the business you want to
            sell.
          </p>
        </div>

        <div className="pt-6 px-40 pb-20">
          <div className="pb-4">
            <label
              htmlFor="period"
              className="font-semibold text-base text-light-green-17"
            >
              Period of Existence
            </label>
            <p className="font-medium text-[16px] leading-[32px] text-light-black-5">
              How long has this business been existed?
            </p>
            <input
              type="text"
              id="period"
              name="period"
              placeholder="00 - 00"
              className="placeholder-italic mt-1 p-3 border-none bg-white-1 rounded w-full"
            />
            <div className="pt-1 flex gap-2 items-center">
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
                Days ago
              </label>
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
                Months ago
              </label>
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
                Years ago
              </label>
            </div>
          </div>

          <div className="pb-4">
            <label
              htmlFor="employees"
              className="font-semibold text-base text-light-green-17"
            >
              Number of Employees
            </label>
            <p className="font-medium text-[16px] leading-[32px] text-light-black-5">
              How many co-workers are in this business?
            </p>
            <input
              type="text"
              id="employees"
              name="employees"
              placeholder="00 - 00"
              className="placeholder-italic mt-1 p-3 border-none bg-white-1 rounded w-full"
            />
          </div>
        </div>
      </div>

      <div className="w-full absolute bottom-0 right-0 left-0 h-[50px] bg-light-black-12 border-t-[1px] border-t-light-black-1">
        <div className="flex justify-between pt-3 px-6">
          <Link href="../../createnewlist/description">
            <IBackButton />
          </Link>
          <Link href="../../createnewlist/upload">
            <NextButton />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Duration;
