"use client";
import DashboardCard from "@/public/components/DashboardCard/DashboardCard";

import { FC } from "react";
import { IoIosArrowBack } from "react-icons/io";

import { PROPOSED, ACCEPTED, iViewBusiness } from "./BusinessData";
import BusinessDetails from "./BusinessDetails";
import ProfileCard from "./ProfileCard";
import Button from "@/public/components/Button";
import { IoMdMore } from "react-icons/io";
import { LuDownload } from "react-icons/lu";



const ViewBusiness: FC<iViewBusiness> = ({ business, onExit }) => {
  return (
    business && (
      <div className="flex flex-col w-full px-6 md:px-5 h-[90vh] md:h-auto overflow-y-scroll">
        <div className="flex justify-between items-center w-full mt-4">
          <div className="flex gap-2 items-center w-full">
            <div onClick={onExit} className="cursor-pointer">
              <IoIosArrowBack fill="#141414" size={"26px"} />
            </div>
            <h2 className="bold-2 md:text-[16px] md:leading-[28px] line-clamp-1 w-[85%]">{business.name}</h2>
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
            <div className="md:block hidden">
            <IoMdMore size={"26px"} />
            </div>
          </div>
          <div className="flex gap-2 items-center med-3 md:hidden">
            <Button
              type="button"
              className="text-blue-40 rounded w-full h-8 flex justify-center items-center gap-2 px-2 md:text-[14px] leading-[24px] text-[14px]"
              colorType="secondary"
            >
              <LuDownload size={"16px"} />
              Download
            </Button>
            <IoMdMore size={"32px"} />
          </div>
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
        <div className="flex md:flex-col justify-between mt-6 mb-20 w-full">
          <div className="w-[63%] md:w-full">
            <BusinessDetails />
          </div>
          <div className="w-[35%] md:hidden">
            <ProfileCard />
          </div>
        </div>
      </div>
    )
  );
};

export default ViewBusiness;
