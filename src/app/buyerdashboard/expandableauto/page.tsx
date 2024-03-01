"use client";
import { ArrowLeftIcon } from "@/public/icons/arrow-left-icon";
import * as Tabs from "@radix-ui/react-tabs";
import BusinessOverview from "@/public/components/BusinessOverview/BusinessOverview";
import Attachments from "@/public/components/Attachments/Attachments";
import BusinessGallery from "@/public/components/BusinessGallery/BusinessGallery";
import Button from "@/public/components/Button";
import { DownloadIcon, MoreIcon } from "@/public/icons";
import AccountDiasble from "@/public/components/AccountDisable/AccountDisable";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

const ExpandableAuto = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event: { target: any }) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);


  return (
    <>
      <div className="px-6 pt-4 overflow-y-scroll h-[85vh]">
        <div className="flex items-center justify-between pb-4">
          <div className="flex items-center">
            <ArrowLeftIcon />
            <h2 className="font-bold text-[20px] leading-[30px] text-light-black-6">
              Auto Repair and Service Opportunity
            </h2>
          </div>

          <div className="">
            <div className="flex gap-4 items-center">
              <Button
                type="button"
                className="rounded-[8px] w-[118px] h-[34px] flex justify-center items-center gap-2 text-base font-medium text-blue-base bg-light-blue-1"
              >
                <span className="">
                  <DownloadIcon color="#3399FF" />
                </span>
                Download
              </Button>

              {/* <MoreIcon /> */}

              <div>
              <div
                className="relative inline-block text-center"
                ref={dropdownRef}
              >
                <button
                  className="flex justify-center items-center border-none rounde text-center text-base"
                  onClick={handleButtonClick}
                >
                  <MoreIcon
                    className={`w-8 h-8 fill-current ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-[220px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-2 px-2 text-left"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <Link
                        href="#"
                        className="block px-4 py-1 text-base leading-8 text-light-black-5 hover:bg-light-blue hover:text-white hover:rounded"
                        role="menuitem"
                      >
                        Terminate Proposal
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          {/* <StoreCard
            heading={"Full Sale"}
            amount={"₦400,000"}
            date={"Lagos, Nigeria."}
            info={
              "This shows the cumulative revenue generated by your company throughout its years of operation."
            }
          />
          <StoreCard
            heading={"Reported Sales"}
            amount={"₦400,000"}
            date={"Yearly records"}
            info={
              "Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit..."
            }
          />
          <StoreCard
            heading={"Years of Existence"}
            amount={"₦400,000"}
            date={"15 - 20 employees "}
            info={"This shows your company's total years of operation"}
          /> */}
        </div>

        <div className="flex justify-between pt-4 pb-16">
          <div className="chart-width">
            <div className="pb-4">
              <div className="w-full bg-white rounded">
                <Tabs.Root className=" " defaultValue="tab1">
                  <Tabs.List
                    className="shrink-0 flex gap-8 border-b-[1px] border-light-black-1"
                    aria-label="Manage your account"
                  >
                    <Tabs.Trigger
                      className="bg-white text-light-black-4 px-4 h-[45px] flex items-center text-base font-medium select-none first:rounded-tl-md  last:rounded-tr-md data-[state=active]:text-blue-base data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
                      value="tab1"
                    >
                      Business Overview
                    </Tabs.Trigger>
                    <Tabs.Trigger
                      className="bg-white text-light-black-4 px-4 h-[45px] flex items-center text-base font-medium select-none first:rounded-tl-md  last:rounded-tr-md data-[state=active]:text-blue-base data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
                      value="tab2"
                    >
                      Attachments
                    </Tabs.Trigger>
                    <Tabs.Trigger
                      className="bg-white text-light-black-4 px-4 h-[45px] flex items-center text-base font-medium select-none first:rounded-tl-md  last:rounded-tr-md data-[state=active]:text-blue-base data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
                      value="tab3"
                    >
                      Business Gallery
                    </Tabs.Trigger>
                  </Tabs.List>
                  <Tabs.Content
                    className="grow pt-8 bg-white rounded"
                    value="tab1"
                  >
                    <BusinessOverview />
                  </Tabs.Content>
                  <Tabs.Content
                    className="grow pt-8 bg-white rounded"
                    value="tab2"
                  >
                    <Attachments />
                  </Tabs.Content>
                  <Tabs.Content
                    className="grow pt-8 bg-white rounded"
                    value="tab3"
                  >
                    <BusinessGallery />
                  </Tabs.Content>
                </Tabs.Root>
              </div>
            </div>
          </div>

          <div>
            <AccountDiasble />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpandableAuto;
