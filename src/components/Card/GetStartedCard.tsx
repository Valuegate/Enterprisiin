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

  const [activeContainer, setActiveContainer] = useState<"first" | "second" | null>(null);
  return (
    <>
      <label htmlFor="buyer">
        <div
          className={`bg-gray-light rounded mb-6 relative container ${
            activeContainer === "first" ? "border-color-light-blue bg-selection" : ""
          }`}
          onClick={() => setActiveContainer("first")}
        >
          <input
            id={"buyer"}
            type="radio"
            value="Buyer"
            name="default-radio"
            className="custom w-4 h-4 flex float-right mr-4 mt-6 absolute right-4"
            checked={selectedOption === "Buyer"}
            onChange={handleOptionChange}
          />
          <div className="flex gap-4 pt-4 pb-4">
            <div className="ml-6 bg-white border-2 border-white rounded-full p-1.5 w-[3.7rem] h-[2.75rem] mt-4">
              <Image src={WT} alt={"Work time-amico"} width={30} height={30} />
            </div>
            <div className="">
              <h2 className="font-semibold text-lg mb-2">
                I’m a Business Buyer
              </h2>
              <p className="font-medium text-light-black-4 text-base leading-8 mb-2 w-11/12">
                Become the new owner by acquiring assets, domains and companies.
              </p>
            </div>
          </div>
        </div>
      </label>

      <label htmlFor="seller">
        <div
          className={`bg-gray-light rounded mb-6 relative container ${
            activeContainer === "second" ? "border-color-light-blue bg-selection" : ""
          }`}
          onClick={() => setActiveContainer("second")}
        >
          <input
            id="seller"
            type="radio"
            value="Seller"
            name="default-radio"
            className="custom w-4 h-4 flex float-right mr-4 mt-6 absolute right-4"
            checked={selectedOption === "Seller"}
            onChange={handleOptionChange}
          />
          <div className="flex gap-4 pt-4 pb-4">
            <div className="ml-6 bg-white border border-white rounded-full p-1.5 w-16 h-11 mt-4">
              <Image src={MM} alt={"Work time-amico"} width={30} height={30} />
            </div>
            <div className="">
              <h2 className="font-semibold text-lg mb-2">
                I’m a Business Seller
              </h2>
              <p className="font-medium text-light-black-4 text-base leading-8 mb-2 w-11/12">
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
