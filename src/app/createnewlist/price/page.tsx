"use client";
import NextButton from "@/public/components/NextButton/NextButton";
import ProgressBar from "@/public/components/ProgressBar/ProgressBar";
import TextAreaWithCounter from "@/public/components/TextAreaWithCounter/TextAreaWithCounter";
import UploadBtn from "@/public/components/UploadBtn/UploadBtn";
import IBackButton from "@/public/components/iBackButton/IBackButton";
import Link from "next/link";
import { useState } from "react";

const Price = () => {
  const [text, setText] = useState("");
  const maxLength = 30; // Define your desired maximum character limit

  const handleChange = (e: { target: { value: any } }) => {
    const newText = e.target.value;
    if (newText.length <= maxLength) {
      setText(newText);
    }
  };

  return (
    <div className="relative">
      <div className="">
        <ProgressBar progress={100} />
      </div>

      <div className="pt-8 overflow-y-scroll h-[85vh]">
        <div className="text-center px-[12rem]">
          <h1 className="text-[34px] font-semibold leading-[52px] pb-2">
            How much does your business worth?
          </h1>
          <p className="text-base font-medium">
            Make sure the picture is an overview of the business you want to
            sell.
          </p>
        </div>

        <div className="pt-6 px-40 pb-20">
          <div className="pb-4">
            <label
              htmlFor="headline"
              className="font-semibold text-base text-light-green-17"
            >
              Sale Amount
            </label>
            <p className="font-medium text-[16px] leading-[32px] text-light-black-5">
              What’s your desire or estimated value of your business?
            </p>
            <input
              type="text"
              id="price"
              name="price"
              placeholder="NGN 00.00"
              className="search placeholder-italic mt-1 p-3 border-none bg-white-1 rounded w-full"
            />
          </div>

          <div className="pb-4">
            <label
              htmlFor="business"
              className="font-semibold text-base text-light-green-17"
            >
              Give the reasons for selling this business
            </label>
            <p className="font-medium text-[16px] leading-[32px] text-light-black-5">
              Explain briefly why you need to sell this business.
            </p>
            <TextAreaWithCounter placeholder={"Explain here..."} />
          </div>

          <div className="pb-1">
            <label
              htmlFor="period"
              className="font-semibold text-base text-light-green-17"
            >
              Reported Sales Amount
            </label>
            <p className="font-medium text-[16px] leading-[32px] text-light-black-5">
              Make sure the picture is an overview of.
            </p>
            <input
              type="text"
              id="period"
              name="period"
              placeholder="NGN 00.00"
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
                Daily
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
                Monthly
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
                Yearly
              </label>
            </div>
          </div>

          <label
            className="flex items-center text-base font-medium text-light-black-13 mb-8"
            htmlFor="remember"
          >
            <input
              type="checkbox"
              id="remember"
              className="custom mr-2 text-green w-4 h-4"
            />
            I agree to the Selling Policy by selling this business.
          </label>
        </div>
      </div>

      <div className="w-full absolute bottom-0 right-0 left-0 h-[50px] bg-light-black-12 border-t-[1px] border-t-light-black-1">
        <div className="flex justify-between pt-3 px-6">
          <Link href="../../createnewlist/imagesupload">
            <IBackButton />
          </Link>
          <Link href="../../createnewlist/review">
            <NextButton />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Price;
