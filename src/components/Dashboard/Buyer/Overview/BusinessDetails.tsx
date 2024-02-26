import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Auto from "@/public/assets/Rectangle 101.png";
import PDF from "@/public/assets/Rectangle 102.png";
import ProfileCard from "./ProfileCard";

import { FaFilePdf } from "react-icons/fa";

import Ga1 from "@/public/assets/Gallery 1.jpg";
import Ga2 from "@/public/assets/Gallery 2.jpg";
import Ga3 from "@/public/assets/Gallery 3.jpg";
import Ga4 from "@/public/assets/Gallery 4.jpg";
import Ga5 from "@/public/assets/Gallery 5.jpg";

const BusinessDetails = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="flex flex-col bg-white w-full rounded border-contrast-10 border-[1.5px] shadow-sm">
      <div className="flex gap-4 items-center border-b-[1.5px] border-contrast-10 md:overflow-x-auto scrollbar-custom">
        <div
          onClick={() => {
            setActiveTab(0);
          }}
          className={`med-3 h-[64px] md:text-[14px] md:leading-[24px] md:w-[150px] items-center flex cursor-pointer ${
            activeTab === 0
              ? "text-blue-base border-b-[1px] border-blue-base"
              : "text-contrast-30"
          }`}
        >
          <p className="pl-4 md:w-[150px]">Business Overview</p>
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
            Attachments
          </p>
        </div>
        <div className="md:w-[120px]">
          <p
            onClick={() => {
              setActiveTab(2);
            }}
            className={`med-3 h-[64px] md:w-[120px] md:text-[14px] md:leading-[24px] items-center flex cursor-pointer ${
              activeTab === 2
                ? "text-blue-base border-b-[1px] border-blue-base"
                : "text-contrast-30"
            }`}
          >
            Business Gallery
          </p>
        </div>
        <div className="md:w-[60px] md:block hidden mr-6">
          <p
            onClick={() => {
              setActiveTab(3);
            }}
            className={`med-3 h-[64px] md:w-[60px] md:text-[14px] md:leading-[24px] items-center flex cursor-pointer ${
              activeTab === 3
                ? "text-blue-base border-b-[1px] border-blue-base"
                : "text-contrast-30"
            }`}
          >
            Profile
          </p>
        </div>
      </div>
      <div className="mt-7 px-4 w-full">
        {activeTab === 0 ? (
          <OverviewContent />
        ) : activeTab === 1 ? (
          <AttachmentContent />
        ) : activeTab === 2 ? (
          <GalleryContent />
        ) : (
          <ProfileCard />
        )}
      </div>
    </div>
  );
};

const OverviewContent = () => {
  return (
    <div className="flex flex-col items-start">
      <div className="flex gap-6 w-full md:flex-col">
        <div className="w-[60%] md:w-full">
          <Image
            src={Auto}
            alt="business-image"
            className="w-full object-cover h-48 rounded-[4px]"
          />
        </div>
        <div className="w-[30%] md:w-full flex flex-col items-start">
          <p className="font-medium text-[14px] leading-[21px] text-contrast-40 md:text-[12px] md:leading-[18px]">
            Business Name
          </p>
          <p className="med-3 text-contrast-70 md:text-[14px] md:leading-[20px]">
            Octopus Limited
          </p>
          <p className="font-medium text-[14px] leading-[21px] text-contrast-40 mt-3 md:text-[12px] md:leading-[18px]">
            Industry
          </p>
          <p className="med-3 text-contrast-70 md:text-[14px] md:leading-[20px]">
            Agricultural Web
          </p>
          <p className="font-medium text-[14px] leading-[21px] text-contrast-40 mt-3 md:text-[12px] md:leading-[18px]">
            Legal Entity
          </p>
          <p className="med-3 text-contrast-70 md:text-[14px] md:leading-[20px]">
            Sole Ownership
          </p>
        </div>
      </div>
      <p className="bold-3 md:text-[14px] md:leading-[24px] text-contrast-100 mt-5 md:mt-4">
        Business Introduction
      </p>
      <p className="med-3 md:text-[14px] md:leading-[20px] text-contrast-base mt-2">
        Paggico is a growing car wash and cleaning service segment operational
        across India. - We arrange a 360-degree car washing service with highly
        qualified cleaning staff, tools, and. Paggico is a growing car wash and
        cleaning service segment operational across India. - We arrange a
        360-degree car washing service with highly qualified cleaning staff,
        tools, and.
      </p>
      <p className="bold-3 md:text-[14px] md:leading-[24px] text-contrast-100 mt-5">
        Products & Services Overview
      </p>
      <p className="med-3 md:text-[14px] md:leading-[20px] text-contrast-base mt-2">
        Paggico is a growing car wash and cleaning service segment operational
        across India. - We arrange a 360-degree car washing service with highly
        qualified cleaning staff, tools, and. Paggico is a growing car wash and
        cleaning service segment operational across India. - We arrange a
        360-degree car washing service with highly qualified cleaning staff,
        tools, and.
      </p>
      <p className="bold-3 md:text-[14px] md:leading-[24px] text-contrast-100 mt-5">
        Assets Overview
      </p>
      <div className="med-3 md:text-[14px] md:leading-[20px] text-contrast-base mt-2 flex flex-col">
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
      <p className="bold-3 md:text-[14px] md:leading-[24px] text-contrast-100 mt-5">
        Facilities Overview
      </p>
      <div className="med-3 md:text-[14px] md:leading-[20px] text-contrast-base mt-2 flex flex-col">
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
      <p className="bold-3 md:text-[14px] md:leading-[24px] text-contrast-100 mt-5">
        Capitalization Overview
      </p>
      <p className="med-3 md:text-[14px] md:leading-[20px] text-contrast-base mt-2 mb-6">
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

interface iAttachmentData {
  image: string | StaticImageData;
  title: string;
  pages: number;
  size: string;
}

const AttachmentContent = () => {
  const attachments: iAttachmentData[] = Array(5).fill({
    image: PDF,
    title: "Company Financial Status",
    pages: 60,
    size: "296KB",
  });

  return (
    <div className="flex flex-col">
      <p className="bold-3 md:text-[14px] text-contrast-100">Documents</p>
      <div className="mt-5 md:mt-4 flex flex-col md:gap-4 gap-5 w-full mb-16 md:mb-14">
        {attachments.map((attachment, i) => {
          return (
            <div
              key={i}
              className="flex w-full bg-input rounded p-4 md:p-2 gap-5 md:gap-4"
            >
              <div className="w-[40%] md:w-[30%] md:h-14">
                <Image
                  src={attachment.image}
                  alt="attachment"
                  className="w-full md:h-full"
                />
              </div>
              <div className="flex flex-col justify-center gap-2">
                <p className="text-contrast font-semibold text-[20px] md:text-[14px] leading-[32px] md:leading-[24px]">
                  {attachment.title}
                </p>
                <div className="flex leading-[24px] font-medium text-contrast-70 text-[16px] md:text-[14px]">
                  <FaFilePdf fill="#FF0000" size={"20px"} />
                  <span className="pl-1 pr-3 md:pr-2">PDF</span>
                  <span>{attachment.pages} pages</span>
                  <span className="font-normal text-[12px] md:text-[10px] text-contrast-30 pl-2">
                    ({attachment.size})
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const GalleryContent = () => {
  const images: StaticImageData[] = [Ga1, Ga2, Ga3, Ga4, Ga5];
  return (
    <div className="flex flex-col w-full">
      <p className="bold-3 md:text-[14px] text-contrast-100">
        Company Pictures
      </p>
      <div className="mt-4 mb-6 grid-cols-2 md:grid-cols-1 grid gap-6 md:gap-5 w-full">
        {images.map((image, i) => {
          return <Image key={i} src={image} className="w-full" alt="" />;
        })}
      </div>
    </div>
  );
};
export default BusinessDetails;
