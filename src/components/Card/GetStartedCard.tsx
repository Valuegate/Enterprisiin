"use client";
import Image from "next/image";
import { FC, useState } from "react";
import WT from "../../assets/Work time-amico 1.png";
import MM from "../../assets/Manage money-bro 1.png";
import WTA from "../../assets/Work time-amico Active.png";
import MMA from "../../assets/Manage money-bro Active.png";

interface iGetStartedCard {
  getSelectedOption: (data: string) => void;
}

const GetStartedCard: FC<iGetStartedCard> = ({ getSelectedOption }) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const handleOptionChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedOption(event.target.value);
    getSelectedOption(event.target.value as string);
  };

  const [activeContainer, setActiveContainer] = useState<
    "first" | "second" | null
  >(null);
  return (
    <>
      <label htmlFor="buyer">
        <div
          className={`rounded mb-6 w-full border-[1.5px] ${
            activeContainer === "first"
              ? "border-blue-base bg-selection"
              : "border-contrast-10 bg-default"
          }`}
          onClick={() => setActiveContainer("first")}
        >
          <div className="flex gap-4 pt-4 pb-4 justify-between items-start px-4">
            <div className="bg-white rounded-full flex items-center justify-center w-[50px] h-[50px] md:h-[45px] md:w-[45px]">
              <Image
                src={activeContainer === "first" ? WTA : WT}
                alt={"Work time-amico"}
                width={40}
                height={40}
                className="w-[40px] h-[40px] md:h-[32px] md:w-[32px]"
              />
            </div>

            <div className="flex flex-col w-[80%] gap-2">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-[20px] leading-[36px] md:text-[16px] md:leading-[25.6px]">
                  I&apos;m a Business Buyer
                </h2>

                <input
                  id={"buyer"}
                  type="radio"
                  value="Buyer"
                  name="default-radio"
                  className="w-4 h-4"
                  checked={selectedOption === "Buyer"}
                  onChange={handleOptionChange}
                />
              </div>
              <p className="font-medium text-[16px] leading-8 mb-2 md:text-[14px] md:leading-[22.4px]">
                Become the new owner by acquiring assets, domains and companies.
              </p>
            </div>
          </div>
        </div>
      </label>

      <label htmlFor="seller">
        <div
          className={`bg-gray-light rounded mb-6 border-[1.5px] ${
            activeContainer === "second"
              ? "border-blue-base bg-selection"
              : "border-contrast-10 bg-default"
          }`}
          onClick={() => setActiveContainer("second")}
        >
          <div className="flex gap-4 pt-4 pb-4 justify-between items-start px-4">
            <div className="bg-white rounded-full flex items-center justify-center w-[50px] h-[50px] md:h-[45px] md:w-[45px]">
              <Image
                src={activeContainer === "second" ? MMA : MM}
                alt={"Work time-amico"}
                width={40}
                height={40}
                className="w-[40px] h-[40px] md:h-[32px] md:w-[32px]"
              />
            </div>

            <div className="flex flex-col w-[80%] gap-2">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-[20px] leading-[36px] md:text-[16px] md:leading-[25.6px]">
                  I&apos;m a Business Seller
                </h2>

                <input
                  id={"seller"}
                  type="radio"
                  value="Seller"
                  name="default-radio"
                  className="w-4 h-4"
                  checked={selectedOption === "Seller"}
                  onChange={handleOptionChange}
                />
              </div>
              <p className="font-medium text-[16px] leading-8 mb-2 md:text-[14px] md:leading-[22.4px]">
                Sell out, request loan and investment in your assets, companies
                and domains.
              </p>
            </div>
          </div>
        </div>
      </label>
    </>
  );
};

export default GetStartedCard;
