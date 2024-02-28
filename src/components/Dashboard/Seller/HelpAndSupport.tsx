"use client";
import ContactUs from "@/public/components/ContactUs/ContactUs";
import FAQs from "@/public/components/FAQs/FAQs";

import React, { useState } from "react";

const HelpAndSupport = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="px-6 pt-4 overflow-y-scroll h-[90vh] md:h-auto pb-6">
      <h2 className="text-3xl md:text-[20px] md:leading-[30px] font-bold text-black md:mt-10 mt-2">
        Help & Support
      </h2>

      <div className="w-full bg-white rounded pb-4 mt-6 shadow-sm">
        <div className="flex gap-4 items-center border-b-[1.5px] border-contrast-10 md:overflow-x-auto scrollbar-custom">
          <div
            onClick={() => {
              setActiveTab(0);
            }}
            className={`med-3 h-[64px] md:text-[14px] md:leading-[24px] md:w-[60px] items-center flex cursor-pointer ${
              activeTab === 0
                ? "text-blue-base border-b-[1px] border-blue-base"
                : "text-contrast-30"
            }`}
          >
            <p className="pl-4 pr-2">FAQs</p>
          </div>
          <div className="md:w-[90px]">
            <p
              onClick={() => {
                setActiveTab(1);
              }}
              className={`med-3 h-[64px] md:w-[90px] md:text-[14px] md:leading-[24px] items-center flex cursor-pointer ${
                activeTab === 1
                  ? "text-blue-base border-b-[1px] border-blue-base"
                  : "text-contrast-30"
              }`}
            >
              <p className="md:pl-2">Contact Us</p>
            </p>
          </div>
        </div>

        <div className="mt-6">
          {activeTab === 0 && (
            <FAQs
              heading={"Frequently Asked Questions"}
              subHeading={
                "Update your information and manage your account settings."
              }
              details={Array(10).fill({
                topic: "What is Valuegate Consulting?",
                subTopic:
                  "Lorem ipsum dolor sit amet, cons piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit.",
              })}
            />
          )}
          {activeTab === 1 && (
            <ContactUs
              heading={"Say hello to us!"}
              subHeading={"Reach out Anytime-We're here to help!"}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HelpAndSupport;
