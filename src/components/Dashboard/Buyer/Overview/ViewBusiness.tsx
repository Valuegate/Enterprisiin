"use client";
import DashboardCard from "@/public/components/DashboardCard/DashboardCard";
import Auto from "@/public/assets/Rectangle 101.png";

import Chart1 from "@/public/assets/Chart 1.png";
import Chart2 from "@/public/assets/Chart 2.png";
import Chart3 from "@/public/assets/Chart 3.png";
import Image, { StaticImageData } from "next/image";

import { useState, useEffect, FC, MouseEventHandler } from "react";
import DropdownButton from "../../../DropdownButton/DropdownButton";
import { LocationIcon } from "@/public/icons";

import { FaHeart } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";

import { PROPOSED, ACCEPTED, iViewBusiness } from "./BusinessData";
import BusinessDetails from "./BusinessDetails";
import ProfileCard from "./ProfileCard";

const ViewBusiness: FC<iViewBusiness> = ({ business, onExit }) => {
  return (
    business && (
      <div className="flex flex-col w-full px-6 h-[90vh] overflow-y-scroll">
        <div className="flex justify-between items-center w-full mt-4">
          <div className="flex gap-2 bold-2 items-center">
            <div onClick={onExit} className="cursor-pointer">
              <IoIosArrowBack fill="#141414" />
            </div>
            {business.name}
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
          <div className="flex gap-4 items-center med-3 md:hidden"></div>
        </div>
        <div className="flex justify-between md:gap-6 md:justify-start mt-6 md:overflow-x-auto scrollbar-custom">
          <DashboardCard
            leading={"Full Sale"}
            content={business.amount.toLocaleString("en-US")}
            trailing={business.location}
            tooltip={
              "Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit..."
            }
            className="w-[32%] md:w-[320px] bg-white rounded border-contrast-10 border-[1.5px]"
            chart={undefined}
          />
          <DashboardCard
            leading={"Reported Sales"}
            content={"400,000"}
            trailing={"Yearly records"}
            className="w-[32%] md:w-[320px] bg-white rounded border-contrast-10 border-[1.5px]"
            tooltip={
              "Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit..."
            }
            chart={undefined}
          />
          <DashboardCard
            leading={"Years of existence"}
            content={"12 - 15"}
            trailing={"15-20 employees"}
            className="w-[32%] md:w-[320px] bg-white rounded border-contrast-10 border-[1.5px]"
            tooltip={
              "Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit..."
            }
            chart={undefined}
          />
        </div>
        <div className="flex justify-between mt-6 mb-20 w-full">
          <div className="w-[63%]">
            <BusinessDetails />
          </div>
          <div className="w-[35%]">
            <ProfileCard />
          </div>
        </div>
      </div>
    )
  );
};

export default ViewBusiness;
