import Image from "next/image";

import { FC } from "react";
import { LocationIcon } from "@/public/icons";
import { FaHeart } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { iBusinessCardData, ACCEPTED, PROPOSED } from "./BusinessData";

const BusinessCard: FC<iBusinessCardData> = ({ business, onClick }) => {
  return (
    <div className="px-4 md:px-0 cursor-pointer" onClick={onClick}>
      <div className="bg-input md:bg-white rounded">
        <div className="relative pt-4 mb-4 md:pt-0 md:pb-0">
          <div className="flex gap-4 md:flex-col md:gap-0">
            <div className="ml-4 md:ml-0 md:w-full md:relative">
              <Image
                src={business.image}
                alt={""}
                className="md:w-[100%] md:object-cover h-[90%] md:h-40 rounded-[10px] md:rounded-b-none"
              />
              <div
                className={`md:block hidden absolute top-0 right-0 ${
                  business.status === PROPOSED
                    ? "bg-role-orange-bg text-role-orange"
                    : business.status === ACCEPTED
                    ? "bg-role-green-bg text-role-green"
                    : "bg-role-red-bg text-error"
                } rounded-tr-[10px] px-3`}
              >
                {business.status}
              </div>
            </div>
            <div className="md:flex md:flex-col md:border-contrast-10 md:border-[1.5px] md:border-t-0 md:px-4 rounded-b-[10px] mb-4">
              <div className="flex w-full justify-between items-center pr-4 md:pr-0">
                <h2 className="bold-2 md:text-[16px] md:leading-[28px] mb-2 text-contrast-100 md:mt-2">
                  {business.name}
                </h2>

                <div className="flex gap-2 items-center">
                  <div
                    className={`p-[6px] rounded-full ${
                      business.liked ? "bg-role-red-bg" : "bg-contrast-10"
                    }`}
                  >
                    <FaHeart
                      size={"18px"}
                      fill={business.liked ? "#FF0000" : "#C2C2C2"}
                    />
                  </div>

                  <div
                    className={`${
                      business.status === PROPOSED
                        ? "bg-role-orange-bg text-role-orange"
                        : business.status === ACCEPTED
                        ? "bg-role-green-bg text-role-green"
                        : "bg-role-red-bg text-error"
                    } px-2 rounded-full py-1 med-3 md:hidden`}
                  >
                    {business.status}
                  </div>
                </div>
              </div>
              <p className="med-3 md:hidden text-contrast-base pr-4">
                {business.description}
              </p>
              <div
                className={`flex items-center gap-2 md:mb-4 mt-2 justify-between`}
              >
                <div className="flex items-center gap-1 md:flex-col w-fit md:w-full md:items-start">
                  <div className="flex items-center gap-1">
                    <div className="bg-contrast-20 rounded-full p-[5px] md:p-[3px]">
                      <GrLocation stroke="#474747" size={"20px"} />
                    </div>
                    <div className="font-bold text-contrast-70 med-3 md:text-[12px] md:leading-[16px]">
                      {business.location}
                    </div>
                  </div>
                  <div className="custom-separator md:hidden mx-1" />
                  <div className="flex items-center gap-1">
                    <div className="bg-contrast-20 rounded-full p-[5px] md:p-[3px]">
                      <GrLocation stroke="#474747" size={"20px"} />
                    </div>
                    <div className="font-bold text-contrast-70 med-3 md:text-[12px] md:leading-[16px]">
                      {business.interest}
                    </div>
                  </div>
                  <div className="custom-separator md:hidden mx-1" />
                  <div className="flex items-center gap-1">
                    <div className="bg-contrast-20 rounded-full p-[5px] md:p-[3px]">
                      <GrLocation stroke="#474747" size={"20px"} />
                    </div>
                    <div className="font-bold text-contrast-70 med-3 md:text-[12px] md:leading-[16px]">
                      {business.businessStatus}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 pb-2 md:hidden pr-4">
                  <p className={`med-4 text-contrast-base md:hidden `}>
                    Amount:
                  </p>
                  <p
                    className={`font-normal text-[12px] leading-[24px] text-green-100 `}
                  >
                    NGN{" "}
                    <span className="font-bold text-[18px]">
                      {business.amount.toLocaleString("en-US")}
                    </span>
                  </p>
                </div>

                <p className="font-normal text-[12px] leading-[24px] text-green-100 md:block hidden w-full md:text-right">
                  NGN{" "}
                  <span className="font-bold text-[18px]">
                    {business.amount.toLocaleString("en-US")}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
