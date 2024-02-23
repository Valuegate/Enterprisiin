"use client";

import { InfoIcon } from "@/public/icons";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import { Tooltip } from "@radix-ui/themes";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";

interface iDashboardCard {
  leading: string;
  content: string;
  trailing: string;
  tooltip: string;
  className: string;
  chart: StaticImageData;
}

const DashboardCard: FC<iDashboardCard> = ({
  leading: heading,
  content: amount,
  trailing: date,
  tooltip: info,
  className,
  chart: chart,
}) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <div className={`${className} shadow-sm`}>
        <div className="flex flex-col py-4 px-4 w-full md:w-[320px]">
          <div className="w-full flex justify-between items-center">
            <p className="text-[20px] leading-[36px] md:text-[16px] md:leading-[28px] text-contrast-70 font-medium">
              {heading}
            </p>
            <div onClick={open}>
              <TooltipProvider delayDuration={300}>
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
          </div>

          <div className="w-full flex justify-between items-center mt-3">
            <p className="pb-2 pt-3 font-bold text-[32px] leading-[36px] md:text-[24px] text-contrast-100">
              {amount}
            </p>
            <Image src={chart} alt={""} />
          </div>

          <div className="">
            <p className="med-3 md:text-[14px] md:leading-[24px] text-contrast-50">
              {date}
            </p>
          </div>
          <div className="cursor-pointer"></div>
        </div>
      </div>

      <Modal opened={opened} centered onClose={close}>
        <div className="flex flex-col justify-start items-start gap-3">
          <p className="bold-1">{heading}</p>
          <p className="med-3">{info}</p>
        </div>
      </Modal>
    </>
  );
};

export default DashboardCard;
