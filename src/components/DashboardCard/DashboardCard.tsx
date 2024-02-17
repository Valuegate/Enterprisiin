import { InfoIcon } from "@/public/icons";
import Image from "next/image";
import { FC } from "react";
import Cloud from "@/public/assets/Frame 35643.png";
import { Tooltip } from "@radix-ui/themes";
import { TooltipProvider } from "@radix-ui/react-tooltip";

interface iDashboardCard {
  heading: string;
  amount: string;
  date: string;
  info: string;
  className: string;
}

const DashboardCard: FC<iDashboardCard> = ({
  heading,
  amount,
  date,
  info,
  className,
}) => {
  return (
    <div className={className}>
      <div className="flex flex-col py-4 px-4 w-80 md:w-72">
        <div className="w-full flex justify-between items-center">
          <p className="text-lg md:text-md text-black-70 font-medium">
            {heading}
          </p>
          <TooltipProvider>
            <Tooltip
              content={
                <span className="flex text-center text-white font-medium w-40 text-xs">
                  {info}
                </span>
              }
            >
              <div className="float-right">
                <InfoIcon />
              </div>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="w-full flex justify-between items-center mt-3">
          <p className="pb-2 pt-3 text-3xl md:text-2xl font-bold">{amount}</p>
          <Image src={Cloud} alt={""} />
        </div>

        <div className="">
          <p className="text-md md:text-base font-medium text-black-50">
            {date}
          </p>
        </div>
        <div className="cursor-pointer"></div>
      </div>
    </div>
  );
};

export default DashboardCard;
