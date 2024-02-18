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
    <div className={`${className} shadow-sm`}>
      <div className="flex flex-col py-4 px-4 w-full md:w-[320px]">
        <div className="w-full flex justify-between items-center">
          <p className="text-[20px] leading-[36px] md:text-[16px] md:leading-[28px] text-contrast-70 font-medium">
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
          <p className="pb-2 pt-3 font-bold text-[32px] leading-[36px] md:text-[24px] text-contrast-100">
            {amount}
          </p>
          <Image src={Cloud} alt={""} />
        </div>

        <div className="">
          <p className="med-3 md:text-[14px] md:leading-[24px] text-contrast-50">
            {date}
          </p>
        </div>
        <div className="cursor-pointer"></div>
      </div>
    </div>
  );
};

export default DashboardCard;
