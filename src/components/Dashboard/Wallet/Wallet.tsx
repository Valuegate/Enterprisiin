"use client";
import DashboardCard from "@/public/components/DashboardCard/DashboardCard";

import Chart1 from "@/public/assets/Chart 1.png";
import Chart2 from "@/public/assets/Chart 2.png";
import Chart3 from "@/public/assets/Chart 3.png";
import { StaticImageData } from "next/image";

import Analysis from "./Analysis";
import History from "./History";

function convertDateWithSlashes(date: Date) {
  return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
}

interface iBusinessData {
  image: string | StaticImageData;
  name: string;
  description: string;
  interest: string;
  amount: number;
  location: string;
  liked: boolean;
  businessStatus: string;
  status: string;
}

const Wallet = () => {
  return (
    <>
      <div className="pt-4 overflow-y-scroll h-[90vh] md:h-auto px-[40px] md:px-5 pb-10">
        <div className={`mb-6 `}>
          <h2 className="text-3xl md:text-[20px] md:leading-[30px] font-bold text-black md:mt-10 mt-2">
            Wallet
          </h2>
          <div className="flex justify-between md:gap-6 md:justify-start mt-4 md:overflow-x-auto scrollbar-custom">
            <DashboardCard
              leading={"Total Balance"}
              content={"₦50,000"}
              trailing={`${convertDateWithSlashes(new Date())}`}
              chart={Chart1}
              tooltip={
                "This shows the cumulative revenue generated by your company throughout its years of operation."
              }
              className="w-[32%] md:w-[320px] bg-white rounded border-contrast-10 border-[1.5px]"
            />
            <DashboardCard
              leading={"Total Money Out"}
              content={"₦400,000"}
              trailing={`${convertDateWithSlashes(new Date())}`}
              chart={Chart2}
              tooltip={
                "This shows the total number of companies you have acquired."
              }
              className="w-[32%] md:w-[320px] bg-white rounded border-contrast-10 border-[1.5px]"
            />
            <DashboardCard
              leading={"Last Top Up"}
              content={"₦350,000"}
              trailing={`${convertDateWithSlashes(new Date())}`}
              chart={Chart3}
              tooltip={"This shows your company's total years of operation."}
              className="w-[32%] md:w-[320px] bg-white rounded border-contrast-10 border-[1.5px]"
            />
          </div>
        </div>

        <div className="flex flex-col w-full gap-6">
          <Analysis />
          <History />
        </div>
      </div>
    </>
  );
};

export default Wallet;
