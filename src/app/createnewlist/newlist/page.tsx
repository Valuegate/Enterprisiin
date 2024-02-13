"use client";
import Button from "@/public/components/Button";
import { UploadIcon } from "@/public/icons";
import { ArrowRightIcon } from "@/public/icons/arrowright-icon";
import Link from "next/link";
import NewListCard from "@/public/components/NewListCard/NewListCard";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ProgressBar from "@/public/components/ProgressBar/ProgressBar";

const NewList = () => {
  const router = useRouter();
  const [userState, setUserState] = useState<string | null>("");
  const handleSelectOption = (data: string) => {
    setUserState(data);
  };

  const handleProceed = () => {
    return router.push(`/createnewlist/details?role=${userState}`);
  };

  return (
    <div className="relative">
      <div className="">
        <ProgressBar progress={10} />
      </div>

      <div className="pt-8 overflow-y-scroll h-[85vh]">
        <div className="text-center px-[12rem]">
          <h1 className="text-[36px] font-semibold leading-[54px] pb-2">
            Choose the type of business
          </h1>
          <p className="text-base font-medium">
            Look at the type of the business you want to sale, need investments,
            need loans and sale assets.
          </p>
        </div>

        <div className="pt-6 px-40 pb-16">
          <NewListCard getSelectedOption={handleSelectOption} />
        </div>
      </div>
      <div className="w-full absolute bottom-0 right-0 left-0 h-[50px] bg-light-black-12 border-t-[1px] border-t-light-black-1">
      <div className="flex justify-end pt-3 pr-6">
            <Button
              type="button"
              className="border-r-amber-400 rounded w-24 h-12 flex justify-center items-center gap-2 font-semibold text-white"
              colorType="primary"
              handleClick={handleProceed}
            >
              Next
              <span>
                <ArrowRightIcon />
              </span>
            </Button>
          </div>
      </div>
    </div>
  );
};

export default NewList;
