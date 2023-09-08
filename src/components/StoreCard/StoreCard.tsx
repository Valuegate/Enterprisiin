import { InfoIcon } from "@/public/icons";
import Image from "next/image";
import { ReactNode, FC } from "react";
import Cloud from "@/public/assets/Frame 35643.png";
import { Tooltip } from "@radix-ui/themes";
import { TooltipProvider } from "@radix-ui/react-tooltip";

interface iStoreCard {
  heading: string;
  amount: string;
  date: string;
  info: string;
  // img.src: boolean;
}

const StoreCard: FC<iStoreCard> = ({ heading, amount, date, info }) => {
  return (
    <div className="w-80 bg-white rounded">
      <div className="flex justify-between py-4 px-4">
        <div className="">
          <p className="text-base w-[105%] font-medium">{heading}</p>
          <div className="pt-4 text-2xl font-bold pb-2">{amount}</div>
          <p className="text-xs font-medium text-light-black-4">{date}</p>
        </div>
        <div className="">
          <TooltipProvider>
            <Tooltip
              multiline
              content={
                <span className="flex text-center text-white font-medium text-xs">
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
      </div>
    </div>
  );
};

export default StoreCard;