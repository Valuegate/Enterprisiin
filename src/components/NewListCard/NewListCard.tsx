"use client";
import Image from "next/image";
import { FC, useState } from "react";
import Home from "../../assets/Vector (2).png"
import FD from "../../assets/Group.png"
import BD from "../../assets/Group (1).png"
import AFS from "../../assets/Vector (3).png"

interface iNewListCardCard {
  getSelectedOption: (data: string) => void;
}

const NewListCard: FC<iNewListCardCard> = ({ getSelectedOption }) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const handleOptionChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedOption(event.target.value);
    getSelectedOption(event.target.value as string);
  };

  const [activeContainer, setActiveContainer] = useState<"first" | "second" | "third" | "fourth" | null>(null);
  return (
    <>
      <label htmlFor="sale">
        <div
          className={`bg-gray-light rounded mb-6 relative container ${
            activeContainer === "first" ? "border-color-light-blue bg-selection" : ""
          }`}
          onClick={() => setActiveContainer("first")}
        >
          <input
            id={"sale"}
            type="radio"
            value="Sale"
            name="default-radio"
            className="custom w-4 h-4 flex float-right mr-4 mt-6 absolute right-4"
            checked={selectedOption === "Sale"}
            onChange={handleOptionChange}
          />
          <div className="flex gap-4 pt-4 pb-4">
            <div className="ml-6 bg-white border border-white rounded-full p-[9px] w-[56px] h-[56px] mt-2">
              <Image src={Home} alt={"Work time-amico"} />
            </div>
            <div className="">
              <h2 className="font-semibold text-xl mb-2">
              Business for Sale
              </h2>
              <p className="font-medium text-light-black-5 text-base leading-8 mb-2">
              Sell your assets, companies and domain names.
              </p>
            </div>
          </div>
        </div>
      </label>

      <label htmlFor="investment">
        <div
          className={`bg-gray-light rounded mb-6 relative container ${
            activeContainer === "second" ? "border-color-light-blue bg-selection" : ""
          }`}
          onClick={() => setActiveContainer("second")}
        >
          <input
            id="investment"
            type="radio"
            value="Investment"
            name="default-radio"
            className="custom w-4 h-4 flex float-right mr-4 mt-6 absolute right-4"
            checked={selectedOption === "Investment"}
            onChange={handleOptionChange}
          />
          <div className="flex gap-4 pt-4 pb-4">
            <div className="ml-6 bg-white border border-white rounded-full p-[9px] w-[56px] h-[56px] mt-2">
              <Image src={FD} alt={"Work time-amico"} />
            </div>
            <div className="">
              <h2 className="font-semibold text-light-green-17 text-xl mb-2">
              Business for Investment
              </h2>
              <p className="font-medium text-light-black-5 text-base leading-8 mb-2">
              Offer your investment opportunities here.
              </p>
            </div>
          </div>
        </div>
      </label>

      <label htmlFor="loan">
        <div
          className={`bg-gray-light rounded mb-6 relative container ${
            activeContainer === "third" ? "border-color-light-blue bg-selection" : ""
          }`}
          onClick={() => setActiveContainer("third")}
        >
          <input
            id="loan"
            type="radio"
            value="Loan"
            name="default-radio"
            className="custom w-4 h-4 flex float-right mr-4 mt-6 absolute right-4"
            checked={selectedOption === "Loan"}
            onChange={handleOptionChange}
          />
          <div className="flex gap-4 pt-4 pb-4">
            <div className="ml-6 bg-white border border-white rounded-full p-[9px] w-[56px] h-[56px] mt-2">
              <Image src={BD} alt={"Work time-amico"} />
            </div>
            <div className="">
              <h2 className="font-semibold text-light-green-17 text-xl mb-2">
              Business for Loan
              </h2>
              <p className="font-medium text-light-black-5 text-base leading-8 mb-2">
              Present your loan listings.
              </p>
            </div>
          </div>
        </div>
      </label>

      <label htmlFor="asset">
        <div
          className={`bg-gray-light rounded mb-6 relative container ${
            activeContainer === "fourth" ? "border-color-light-blue bg-selection" : ""
          }`}
          onClick={() => setActiveContainer("fourth")}
        >
          <input
            id="asset"
            type="radio"
            value="Asset"
            name="default-radio"
            className="custom w-4 h-4 flex float-right mr-4 mt-6 absolute right-4"
            checked={selectedOption === "Asset"}
            onChange={handleOptionChange}
          />
          <div className="flex gap-4 pt-4 pb-4">
            <div className="ml-6 bg-white border border-white rounded-full p-[9px] w-[56px] h-[56px] mt-2">
              <Image src={AFS} alt={"Work time-amico"} />
            </div>
            <div className="">
              <h2 className="font-semibold text-light-green-17 text-xl mb-2">
              Asset for Sale
              </h2>
              <p className="font-medium text-light-black-5 text-base leading-8 mb-2">
              Display your assets for sale.
              </p>
            </div>
          </div>
        </div>
      </label>
    </>
  );
};

export default NewListCard;