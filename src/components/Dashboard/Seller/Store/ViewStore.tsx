"use client";
import DashboardCard from "@/public/components/DashboardCard/DashboardCard";

import { FC } from "react";
import { IoIosArrowBack } from "react-icons/io";

import { iViewStore } from "./StoreData";
import Button from "@/public/components/Button";
import SwitchDemo from "@/public/components/Switch/SwitchDemo";
import { FaPen } from "react-icons/fa";
import StoreDetailsCard from "./StoreDetailsCard";
import RequestCardIcon from "./RequestCardIcon";
import StoreDetails from "./StoreDetails";

const ViewStore: FC<iViewStore> = ({ store, onExit }) => {
  return (
    store && (
      <div className="flex flex-col w-full px-6 h-[90vh] md:h-auto overflow-y-scroll">
        <div className="flex justify-between items-center w-full mt-4">
          <div className="flex gap-2 bold-2 items-center">
            <div onClick={onExit} className="cursor-pointer">
              <IoIosArrowBack fill="#141414" />
            </div>
            {store.name}
            {/* <div
              className={`${
                store.status === ARCHIVED
                  ? "bg-light-dark text-light-dark-1"
                  : store.status === ACTIVE
                  ? "bg-role-green-bg text-role-green"
                  : "bg-role-red-bg text-error"
              } px-2 rounded-full py-1 med-3 md:hidden`}
            >
              {store.status}
            </div> */}
          </div>
          <div className="flex gap-5 items-center med-3 md:hidden">
            <div className="flex gap-2 items-center">
              <SwitchDemo />
             <p className="text-base font-medium text-contrast-base">Activated</p>
            </div>
            <Button
              type="button"
              className="text-white bg-blue-base py-2 px-4 w-[87px] h-[40px] flex justify-center items-center rounded-lg gap-2 md:text-[14px] leading-[24px] text-[14px]"
              colorType="secondary"
            >
              <FaPen size={"16px"} />
              Edit
            </Button>
          </div>
          {/* <div className="flex gap-2 items-center med-3 md:hidden">
            <Button
              type="button"
              className="text-blue-40 rounded w-full h-8 flex justify-center items-center gap-2 px-2 md:text-[14px] leading-[24px] text-[14px]"
              colorType="secondary"
            >
              <LuDownload size={"16px"} />
              Download
            </Button>
            <IoMdMore size={"32px"} />
          </div> */}
        </div>
        <div className="flex justify-between md:gap-6 md:justify-start mt-6 md:overflow-x-auto scrollbar-custom">
          <DashboardCard
            leading={"Full Sale"}
            // content={store.amount.toLocaleString("en-US")}
            content={"₦400,000"}
            trailing={store.location}
            tooltip={
              "Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit..."
            }
            className="w-[32%] md:w-[320px] bg-white rounded border-contrast-10 border-[1.5px]"
            chart={undefined}
          />
          <DashboardCard
            leading={"Reported Sales"}
            content={"₦400,000"}
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

        <div className="flex justify-between md:gap-6 md:justify-start mt-6 md:overflow-x-auto scrollbar-custom">
          <StoreDetailsCard
            leading={"Request"}
            // content={store.amount.toLocaleString("en-US")}
            content={"20"}
            tooltip={
              "Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit..."
            }
            className="w-[32%] md:w-[320px] bg-white rounded border-contrast-10 border-[1.5px]"
          />
          <StoreDetailsCard
            leading={"Clicks"}
            content={"30,730"}
            className="w-[32%] md:w-[320px] bg-white rounded border-contrast-10 border-[1.5px]"
            tooltip={
              "Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit..."
            }
          />
          <StoreDetailsCard
            leading={"Likes"}
            content={"100"}
            className="w-[32%] md:w-[320px] bg-white rounded border-contrast-10 border-[1.5px]"
            tooltip={
              "Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit..."
            }
          />
        </div>
        <div className="flex md:flex-col justify-between mt-6 mb-20 w-full">
          <div className="w-[63%] md:w-full">
            <StoreDetails />
          </div>
          <div className="w-[35%] md:hidden">
          <RequestCardIcon />
          </div>
        </div>
      </div>
    )
  );
};

export default ViewStore;
