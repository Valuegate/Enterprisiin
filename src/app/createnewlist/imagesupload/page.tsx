"use client";
import NextButton from "@/public/components/NextButton/NextButton";
import ProgressBar from "@/public/components/ProgressBar/ProgressBar";
import IBackButton from "@/public/components/iBackButton/IBackButton";
import { AddIcon } from "@/public/icons";
import Link from "next/link";
import UploadCard from "@/public/components/UploadCard/UploadCard";

const ImagesUpload = () => {
  return (
    <div className="relative">
      <div className="">
        <ProgressBar progress={80} />
      </div>

      <div className="pt-8 overflow-y-scroll h-[85vh]">
        <div className="text-center px-[12rem]">
          <h1 className="text-[36px] font-semibold leading-[52px] pb-2">
            Upload the business pictures
          </h1>
          <p className="text-base font-medium">
            Make sure the picture is an overview of the business you want to
            sell.
          </p>
        </div>

        <div className="pt-6 px-[12rem] pb-20">
          <div className="flex justify-between">
            <UploadCard />
            <UploadCard />
          </div>

          <div className="pt-16 pb-8 flex justify-between">
            <UploadCard />

            <div className="text-center rounded-lg bg-white-1 border-none w-[281px] h-[201px] ">
              <span className="pt-[4rem] flex flex-col px-[0.5rem] gap-2 items-center justify-center">
                <AddIcon width="20" height="20" color="#313734" />
                <p className="text-[12px] leading-[24px] text-center font-medium text-light-black-5">
                  Add more
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full absolute bottom-0 right-0 left-0 h-[50px] bg-light-black-12 border-t-[1px] border-t-light-black-1">
        <div className="flex justify-between pt-3 px-6">
          <Link href="../../createnewlist/upload">
            <IBackButton />
          </Link>
          <Link href="../../createnewlist/price">
            <NextButton />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImagesUpload;
