"use client"
import { InfoIcon } from "@/public/icons";
import DashboardCard from "@/public/components/DashboardCard/DashboardCard";
import { Charts } from "@/public/components/Charts/Charts";
import RequestCard from "@/public/components/RequestCard/RequestCard";
import DraftCard from "@/public/components/DraftCard/DraftCard";
import { Tooltip } from "@radix-ui/themes";
import { TooltipProvider } from '@radix-ui/react-tooltip';

const Overview = () => {
  return (
    <>
      <div className="px-6 pt-4 overflow-y-scroll h-[85vh]">
        <h2 className="text-2xl font-bold text-black">Overview</h2>
        <div className="flex justify-between pt-4">
          <div className="w-80 bg-white rounded">
            <div className="flex justify-between py-4 px-4">
              <div className="">
                <p className="text-base font-medium">Total Balance</p>
                <div className="pt-4 text-2xl font-bold pb-2">₦400,000</div>
                <p className="text-xs font-medium text-light-black-4">
                  31/04/2023 last withdraw
                </p>
              </div>

              <div className="">
                <TooltipProvider>
                <Tooltip  
                  content={
                    <span className="flex text-center text-white font-medium w-40 text-xs">
                      Your total balance reflects your account&apos;s current status and the date of last withdraw
                    </span>
                  }
                >
                  <div className="float-right">
                    <InfoIcon />
                  </div>
                </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
          <DashboardCard
            heading={"Total Sold Businesses"}
            amount={"₦400,000"}
            date={"09 businesses"} info={"The aggregate amount and total count of businesses you've successfully sold, earned loans and investments."}          />
          <DashboardCard
            heading={"Buyer Requests"}
            amount={"02"}
            date={"31/04/2023"} info={"These are the people who show interest in your business. Check them out and attend to them."}          />
        </div>

        <div className="flex justify-between pt-4">
          <div className="">
            <div className="pb-4">
              <Charts />
            </div>

            <div className="pb-4">
              <DraftCard />
            </div>
          </div>

          <div>
            <RequestCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
