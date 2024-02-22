"use client";
import DashboardCard from "@/public/components/DashboardCard/DashboardCard";
import Charts from "@/public/components/Charts/Charts";
import RequestCard from "@/public/components/RequestCard/RequestCard";
import OverviewDrafts from "@/public/components/Drafts/OverviewDrafts";

function convertDateWithSlashes(date: Date) {
  return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
}

const SellerOverview = () => {
  return (
    <>
      <div className="pt-4 overflow-y-scroll h-[90vh] md:h-auto px-[40px] md:px-5 pb-10">
        <h2 className="text-3xl md:text-[20px] md:leading-[30px] font-bold text-black md:mt-10 mt-2">
          Overview
        </h2>
        <div className="flex justify-between md:gap-6 md:justify-start mt-4 md:overflow-x-auto scrollbar-custom">
          <DashboardCard
            leading={"Total Balance"}
            content={"₦400,000"}
            trailing={`${convertDateWithSlashes(new Date())} last withdrawn`}
            tooltip={
              "Your total balance reflects your account's current status and the date of last withdraw"
            }
            className="w-[32%] md:w-[320px] bg-white rounded border-contrast-10 border-[1.5px]"
          />
          <DashboardCard
            leading={"Total Sold Businesses"}
            content={"₦400,000"}
            trailing={"09 businesses"}
            tooltip={
              "The aggregate amount and total count of businesses you've successfully sold, earned loans and investments."
            }
            className="w-[32%] md:w-[320px] bg-white rounded border-contrast-10 border-[1.5px]"
          />
          <DashboardCard
            leading={"Buyer Requests"}
            content={"02"}
            trailing={"31/04/2023"}
            tooltip={
              "These are the people who show interest in your business. Check them out and attend to them."
            }
            className="w-[32%] md:w-[320px] bg-white rounded border-contrast-10 border-[1.5px]"
          />
        </div>

        <div className="flex justify-between mt-6 md:flex-col md:mb-10 w-full">
          <div className="w-[66%] md:w-full ">
            <div className="">
              <Charts />
            </div>
            <div className="md:block hidden my-6">
              <RequestCard />
            </div>
            <div className="md:mt-0 mt-6">
              <OverviewDrafts />
            </div>
          </div>

          <div className="md:hidden block w-[32%]">
            <RequestCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerOverview;
