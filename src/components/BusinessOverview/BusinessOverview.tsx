import { LoveIcon } from "@/public/icons";
import Image from "next/image";
import Autos from "@/public/assets/Rectangle 101 (3).png";
import Octopus from "@/public/assets/Ellipse 9.png";

const BusinessOverview = () => {
  return (
    <>
      <div className="pl-4 pb-10">
        <div className="flex gap-4">
          <div className="relative">
            <Image src={Autos} alt={""} />
            <span className="absolute top-4 right-4 bg-light-yellow-3 w-[33px] h-[33px] flex justify-center items-center  rounded-full">
              <LoveIcon />
            </span>
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
                Bakery
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
          </div>
        </div>

        <div className="pr-4">
        <div className="pt-6">
                <p className="font-bold text-base">Business Introduction</p>
                <p className="font-medium text-base">Paggico is a growing car wash and cleaning service segment operational across India. - We arrange a 360-degree car washing service with highly qualified cleaning staff, tools, and. Paggico is a growing car wash and cleaning service segment operational across India. - We arrange a 360-degree car washing service with highly qualified cleaning staff, tools, and.</p>
            </div>

            <div className="pt-4">
                <p className="font-bold text-base">Products & Services Overview</p>
                <p className="font-medium text-base">Paggico is a growing car wash and cleaning service segment operational across India. - We arrange a 360-degree car washing service with highly qualified cleaning staff, tools, and. Paggico is a growing car wash and cleaning service segment operational across India. - We arrange a 360-degree car washing service with highly qualified cleaning staff, tools, and.</p>
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
                <p className="font-medium text-base">Paggico is a growing car wash and cleaning service segment operational across India. - We arrange a 360-degree car washing service.</p>
            </div>
            </div>
      </div>
    </>
  );
};

export default BusinessOverview;
