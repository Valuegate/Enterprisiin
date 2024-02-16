"use client";
import Image from "next/image";
import RadioButton from "../RadioButton/RadioButton";
import { ReactNode, FC, useState } from "react";
import WT from "../../assets/Work time-amico 1.png";
import MM from "../../assets/Manage money-bro 1.png";

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
          className={`bg-gray-light rounded mb-6 container ${
            activeContainer === "first"
              ? "border-color-light-blue bg-selection"
              : ""
          }`}
          onClick={() => setActiveContainer("first")}
        >
          <div className="flex gap-4 pt-4 pb-4 justify-between items-start px-4">
            <div className="bg-white border border-white rounded-full flex items-center justify-center w-[50px] h-[50px]">
              <Image src={WT} alt={"Work time-amico"} width={40} height={40} />
            </div>

            <div className="flex flex-col w-[80%]">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-lg md:text-[16px] mb-2">
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
              <p className="font-medium text-light-black-4 text-base md:text-[14px] md:leading-6 leading-8 mb-2">
                Become the new owner by acquiring assets, domains and companies.
              </p>
            </div>
          </div>
        </div>
      </label>

      <label htmlFor="seller">
        <div
          className={`bg-gray-light rounded mb-6 container ${
            activeContainer === "second"
              ? "border-color-light-blue bg-selection"
              : ""
          }`}
          onClick={() => setActiveContainer("second")}
        >
          <div className="flex gap-4 pt-4 pb-4 justify-between items-start px-4">
            <div className="bg-white border border-white rounded-full flex items-center justify-center w-[50px] h-[50px]">
              <Image src={MM} alt={"Work time-amico"} width={40} height={40} />
            </div>

            <div className="flex flex-col w-[80%]">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-lg md:text-[16px] mb-2">
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
              <p className="font-medium text-light-black-4 text-base md:text-[14px] md:leading-6 leading-8 mb-2">
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
