import React, { useState } from "react";
import Image from "next/image";
import Auto from "@/public/assets/Rectangle 101.png";

const BusinessDetails = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="flex flex-col bg-white w-full rounded border-contrast-10 border-[1.5px] shadow-sm">
      <div className="flex gap-4 items-center border-b-[1.5px] border-contrast-10">
        <div
          onClick={() => {
            setActiveTab(0);
          }}
          className={`med-3 h-[64px] items-center flex cursor-pointer ${
            activeTab === 0
              ? "text-blue-base border-b-[1px] border-blue-base"
              : "text-contrast-30"
          }`}
        >
          <p className="pl-4">Business Overview</p>
        </div>
        <p
          onClick={() => {
            setActiveTab(1);
          }}
          className={`med-3 h-[64px] items-center flex cursor-pointer ${
            activeTab === 1
              ? "text-blue-base border-b-[1px] border-blue-base"
              : "text-contrast-30"
          }`}
        >
          Attachments
        </p>
        <p
          onClick={() => {
            setActiveTab(2);
          }}
          className={`med-3 h-[64px] items-center flex cursor-pointer ${
            activeTab === 2
              ? "text-blue-base border-b-[1px] border-blue-base"
              : "text-contrast-30"
          }`}
        >
          Business Gallery
        </p>
      </div>
      <div className="mt-7 px-4 w-full">
        {activeTab === 0 ? (
          <OverviewContent />
        ) : activeTab === 1 ? (
          <AttachmentContent />
        ) : (
          <GalleryContent />
        )}
      </div>
    </div>
  );
};

const OverviewContent = () => {
  return (
    <div className="flex flex-col items-start">
      <div className="flex gap-6 w-full">
        <div className="w-[60%]">
          <Image
            src={Auto}
            alt="business-image"
            className="w-full object-cover h-48 rounded-[4px]"
          />
        </div>
        <div className="w-[30%] flex flex-col items-start">
          <p className="font-medium text-[14px] leading-[21px] text-contrast-40">
            Business Name
          </p>
          <p className="med-3 text-contrast-70">Octopus Limited</p>
          <p className="font-medium text-[14px] leading-[21px] text-contrast-40 mt-3">
            Industry
          </p>
          <p className="med-3 text-contrast-70">Agricultural Web</p>
          <p className="font-medium text-[14px] leading-[21px] text-contrast-40 mt-3">
            Legal Entity
          </p>
          <p className="med-3 text-contrast-70">Sole Ownership</p>
        </div>
      </div>
      <p className="bold-3 text-contrast-100 mt-5">Business Introduction</p>
      <p className="med-3 text-contrast-base mt-2">
        Paggico is a growing car wash and cleaning service segment operational
        across India. - We arrange a 360-degree car washing service with highly
        qualified cleaning staff, tools, and. Paggico is a growing car wash and
        cleaning service segment operational across India. - We arrange a
        360-degree car washing service with highly qualified cleaning staff,
        tools, and.
      </p>
      <p className="bold-3 text-contrast-100 mt-5">
        Products & Services Overview
      </p>
      <p className="med-3 text-contrast-base mt-2">
        Paggico is a growing car wash and cleaning service segment operational
        across India. - We arrange a 360-degree car washing service with highly
        qualified cleaning staff, tools, and. Paggico is a growing car wash and
        cleaning service segment operational across India. - We arrange a
        360-degree car washing service with highly qualified cleaning staff,
        tools, and.
      </p>
      <p className="bold-3 text-contrast-100 mt-5">Assets Overview</p>
      <div className="med-3 text-contrast-base mt-2 flex flex-col">
        {Array(5)
          .fill(0)
          .map((val, i) => {
            return (
              <p key={i}>
                &#8226; Lorem ipsum dolor sit amet cons piscing elit lorem
                ipsumsit.
              </p>
            );
          })}
      </div>
      <p className="bold-3 text-contrast-100 mt-5">Facilities Overview</p>
      <div className="med-3 text-contrast-base mt-2 flex flex-col">
        {Array(5)
          .fill(0)
          .map((val, i) => {
            return (
              <p key={i}>
                &#8226; Lorem ipsum dolor sit amet cons piscing elit lorem
                ipsumsit.
              </p>
            );
          })}
      </div>
      <p className="bold-3 text-contrast-100 mt-5">Capitalization Overview</p>
      <p className="med-3 text-contrast-base mt-2 mb-6">
        Paggico is a growing car wash and cleaning service segment operational
        across India. - We arrange a 360-degree car washing service with highly
        qualified cleaning staff, tools, and. Paggico is a growing car wash and
        cleaning service segment operational across India. - We arrange a
        360-degree car washing service with highly qualified cleaning staff,
        tools, and.
      </p>
    </div>
  );
};

const AttachmentContent = () => {
  return <div>Attachment</div>;
};

const GalleryContent = () => {
  return <div>Gallery</div>;
};
export default BusinessDetails;
