"use client";
import Image, { StaticImageData } from "next/image";
import { FC, useState } from "react";
import BS from "@/public/assets/sale-black.png";
import BSA from "@/public/assets/sale-black.png";
import BI from "@/public/assets/investment-black.png";
import BIA from "@/public/assets/investment-black.png";
import BL from "@/public/assets/loan-black.png";
import BLA from "@/public/assets/loan-black.png";
import AS from "@/public/assets/asset-black.png";
import ASA from "@/public/assets/asset-black.png";

interface iGetStartedCard {
  currentState: number;
  setCurrentState: (data: number) => void;
}

interface iBusinessData {
  inactiveImage: string | StaticImageData;
  activeImage: string | StaticImageData;
  title: string;
  content: string;
}

const BusinessCard: FC<iGetStartedCard> = ({ currentState, setCurrentState }) => {
  
  const businesses: iBusinessData[] = [
    {
      activeImage: BSA,
      inactiveImage: BS,
      title: "Business for Sale",
      content: "Sell your assets, companies and domain names.",
    },
    {
      activeImage: BIA,
      inactiveImage: BI,
      title: "Business for Investment",
      content: "Offer your investment oppoturnites here.",
    },
    {
      activeImage: BLA,
      inactiveImage: BL,
      title: "Business for Loan",
      content: "Present your loan listings.",
    },
    {
      activeImage: ASA,
      inactiveImage: AS,
      title: "Asset for Sale",
      content: "Display your assets for sale.",
    },
  ];

  return (
    <div className="flex flex-col gap-6 w-full">
      {businesses.map((business, i) => {
        return (
          <div
            key={i}
            className={`rounded w-full h-[130px] md:h-fit cursor-pointer ${
              currentState === i
                ? "border-blue-base bg-selection border-[1.5px]"
                : "border-contrast-10 bg-default"
            }`}
            onClick={() => setCurrentState(i)}
          >
            <div className="flex gap-4 pt-4 pb-4 justify-between items-start px-4">
              <div className="flex items-center justify-center w-[50px] h-[50px] ">
                <Image
                  src={currentState === i ? business.activeImage : business.inactiveImage}
                  alt={"Work time-amico"}
                  width={40}
                  height={40}
                  className="w-[40px] h-[40px]"
                />
              </div>

              <div className="flex flex-col w-[80%] gap-2">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold text-[20px] leading-[36px] md:text-[16px] md:leading-[25.6px]">
                    {business.title}
                  </h2>

                  <input
                    id={"sale"}
                    type="radio"
                    value="Sale"
                    name="default-radio"
                    className="w-4 h-4"
                    checked={i === currentState}
                    onChange={() => {
                      setCurrentState(i);
                    }}
                  />
                </div>
                <p className="font-medium text-[16px] leading-8 mb-2 md:text-[14px] md:leading-[22.4px]">
                  {business.content}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BusinessCard;
