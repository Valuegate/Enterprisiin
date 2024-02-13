"use client";
import ProgressBar from "@/public/components/ProgressBar/ProgressBar";
import Link from "next/link";
import { ArrowRightIcon } from "@/public/icons/arrowright-icon";
import Image from "next/image";
import Auto from "@/public/assets/Rectangle 101 (2).png";
import { InfoIcon } from "@/public/icons";
import Octopus from "@/public/assets/Ellipse 9.png";
import Data from "@/public/assets/Rectangle 102.png";
import PDF from "@/public/assets/image 1.png";

const ImagesUpload = () => {
  return (
    <div className="relative">
      <div className="">
        <ProgressBar progress={0} />
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

        <div className="pt-6 px-40 pb-20">
          <h3 className="font-bold text-[24px] leading-[36px] text-light-green-17">
            Auto Repair and Service Opportunity
          </h3>
          <div className="flex pt-2 gap-4">
            <div className="relative">
              <Image src={Auto} alt={""} />
              <div className="flex absolute top-4 right-4 bottom-0 ">
                <button className="rounded-[40px] w-[136px] h-[32px] flex justify-center items-center font-medium text-base bg-white-2 text-light-green">
                  <span className="text-[12px] ">NGN </span>
                  200,000
                  <span className="pl-2">
                    <InfoIcon width="12" height="12" />
                  </span>
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div>
                <p className="font-medium text-[14px] leading-[21px] text-light-black-4 pb-1">
                  Business Name
                </p>
                <div className="flex gap-1 items-center">
                  <Image src={Octopus} alt={""} />
                  <p className="font-medium text-base text-light-black-5">
                    Octopus Limited
                  </p>
                </div>
              </div>

              <div>
                <p className="font-medium text-[14px] leading-[21px] text-light-black-4 pb-1">
                  Industry
                </p>
                <p className="font-medium text-base text-light-black-5">
                  Agricultural Web
                </p>
              </div>

              <div>
                <p className="font-medium text-[14px] leading-[21px] text-light-black-4">
                  Business Status
                </p>
                <p className="font-medium text-base text-light-black-5">
                  For Sale
                </p>
              </div>

              <div>
                <p className="font-medium text-[14px] leading-[21px] text-light-black-4 pb-1">
                  Legal Entity
                </p>
                <p className="font-medium text-base text-light-black-5">
                  Sole Ownership
                </p>
              </div>

              <div>
                <p className="font-medium text-[14px] leading-[21px] text-light-black-4 pb-1">
                  Period of Existence
                </p>
                <p className="font-medium text-base text-light-black-5">
                  20 -30 years ago
                </p>
              </div>

              <div>
                <p className="font-medium text-[14px] leading-[21px] text-light-black-4 pb-1">
                  Number of Employees
                </p>
                <p className="font-medium text-base text-light-black-5">
                  10 - 12
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <p className="font-bold text-base">Business Introduction</p>
            <p className="font-medium text-base">
              Paggico is a growing car wash and cleaning service segment
              operational across India. - We arrange a 360-degree car washing
              service with highly qualified cleaning staff, tools, and. Paggico
              is a growing car wash and cleaning service segment operational
              across India. - We arrange a 360-degree car washing service with
              highly qualified cleaning staff, tools, and.
            </p>
          </div>

          <div className="pt-4">
            <p className="font-bold text-base">Products & Services Overview</p>
            <p className="font-medium text-base">
              Paggico is a growing car wash and cleaning service segment
              operational across India. - We arrange a 360-degree car washing
              service with highly qualified cleaning staff, tools, and. Paggico
              is a growing car wash and cleaning service segment operational
              across India. - We arrange a 360-degree car washing service with
              highly qualified cleaning staff, tools, and.
            </p>
          </div>

          <div className="pt-4">
            <p className="font-bold text-base">Assets Overview</p>
            <div className="flex flex-col gap-1">
              <div className="flex gap-2">
                <span className="w-[6px] h-[6px] bg-light-black-5 rounded-full mt-2"></span>
                <div className="">
                  <p className="font-medium text-base text-light-black-5">
                    Lorem ipsum dolor sit amet cons piscing elit lorem.
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <span className="w-[6px] h-[6px] bg-light-black-5 rounded-full mt-2"></span>
                <div className="">
                  <p className="font-medium text-base text-light-black-5">
                    Lorem ipsum dolor sit amet cons piscing elit lorem.
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <span className="w-[6px] h-[6px] bg-light-black-5 rounded-full mt-2"></span>
                <div className="">
                  <p className="font-medium text-base text-light-black-5">
                    Lorem ipsum dolor sit amet cons piscing elit lorem.
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <span className="w-[6px] h-[6px] bg-light-black-5 rounded-full mt-2"></span>
                <div className="">
                  <p className="font-medium text-base text-light-black-5">
                    Lorem ipsum dolor sit amet cons piscing elit lorem.
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <span className="w-[6px] h-[6px] bg-light-black-5 rounded-full mt-2"></span>
                <div className="">
                  <p className="font-medium text-base text-light-black-5">
                    Lorem ipsum dolor sit amet cons piscing elit lorem.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <p className="font-bold text-base">Facilities Overview</p>
            <div className="flex flex-col gap-1">
              <div className="flex gap-2">
                <span className="w-[6px] h-[6px] bg-light-black-5 rounded-full mt-2"></span>
                <div className="">
                  <p className="font-medium text-base text-light-black-5">
                    Lorem ipsum dolor sit amet cons piscing elit lorem.
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <span className="w-[6px] h-[6px] bg-light-black-5 rounded-full mt-2"></span>
                <div className="">
                  <p className="font-medium text-base text-light-black-5">
                    Lorem ipsum dolor sit amet cons piscing elit lorem.
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <span className="w-[6px] h-[6px] bg-light-black-5 rounded-full mt-2"></span>
                <div className="">
                  <p className="font-medium text-base text-light-black-5">
                    Lorem ipsum dolor sit amet cons piscing elit lorem.
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <span className="w-[6px] h-[6px] bg-light-black-5 rounded-full mt-2"></span>
                <div className="">
                  <p className="font-medium text-base text-light-black-5">
                    Lorem ipsum dolor sit amet cons piscing elit lorem.
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <span className="w-[6px] h-[6px] bg-light-black-5 rounded-full mt-2"></span>
                <div className="">
                  <p className="font-medium text-base text-light-black-5">
                    Lorem ipsum dolor sit amet cons piscing elit lorem.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <p className="font-bold text-base">Capitalization Overview</p>
            <p className="font-medium text-base">
              Paggico is a growing car wash and cleaning service segment
              operational across India. - We arrange a 360-degree car washing
              service.
            </p>
          </div>

          <div className="pt-4">
            <p className="font-bold text-base pb-2">Attachments</p>
            <div className="bg-white-1 w-full border-none rounded">
              <div className="flex gap-6 py-6">
                <div className="pl-6">
                  <Image src={Data} alt={""} />
                </div>
                <div>
                  <h2 className="font-semibold text-light-green-9 text-[20px] leading-[32px] pb-1">
                    Company Financial Status
                  </h2>
                  <div className="flex gap-2 items-center">
                    <div className="flex gap-1 items-center">
                      <Image src={PDF} alt={""} />
                      <p className="font-medium text-base text-light-black-5">
                        PDF
                      </p>
                    </div>
                    <p className="font-medium text-base text-light-black-5">
                      60 pages{" "}
                      <span className="font-normal text-light-black-4 text-[12px] leading-[24px]">
                        (289KB)
                      </span>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <div className="bg-white-1 w-full border-none rounded">
                <div className="flex gap-6 py-6">
                  <div className="pl-6">
                    <Image src={Data} alt={""} />
                  </div>
                  <div>
                    <h2 className="font-semibold text-light-green-9 text-[20px] leading-[32px] pb-1">
                      Company Financial Status
                    </h2>
                    <div className="flex gap-2 items-center">
                      <div className="flex gap-1 items-center">
                        <Image src={PDF} alt={""} />
                        <p className="font-medium text-base text-light-black-5">
                          PDF
                        </p>
                      </div>
                      <p className="font-medium text-base text-light-black-5">
                        60 pages{" "}
                        <span className="font-normal text-light-black-4 text-[12px] leading-[24px]">
                          (289KB)
                        </span>{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 pb-8">
            <p className="font-bold text-base">Gallery</p>
            <div className="flex justify-between pt-4">
              <div className="rounded bg-light-black-14 border-none w-[198px] h-[140px] "></div>
              <div className="rounded bg-light-black-14 border-none w-[198px] h-[140px] "></div>
              <div className="rounded bg-light-black-14 border-none w-[198px] h-[140px] "></div>
            </div>

            <div className="flex justify-between pt-4">
              <div className="rounded bg-light-black-14 border-none w-[198px] h-[140px] "></div>
              <div className="rounded bg-light-black-14 border-none w-[198px] h-[140px] "></div>
              <div className="rounded bg-light-black-14 border-none w-[198px] h-[140px] "></div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="relative">
        <hr className="border-none bg-light-black-1 h-[1px] w-full absolute bottom-[3.5rem]" />
      </div>

      <div className="flex justify-end pr-10">
        <div className="pl-6 top-auto fixed bottom-0 pb-4">
          
        </div>
      </div> */}

      <div className="w-full absolute bottom-0 right-0 left-0 h-[50px] bg-light-black-12 border-t-[1px] border-t-light-black-1">
        <div className="flex justify-end pt-4 px-6">
          <div className="flex gap-4">
            <Link href="">
              <button className="rounded w-[96px] h-[40px] flex justify-center items-center font-semibold bg-light-blue text-white">
                Re-edit
              </button>
            </Link>
            <Link href="">
              <div className="flex">
                <button className="rounded w-[113px] h-[40px] flex justify-center items-center gap-2 font-semibold bg-[#EABE63] text-white">
                  Launch
                  <span>
                    <ArrowRightIcon />
                  </span>
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagesUpload;
