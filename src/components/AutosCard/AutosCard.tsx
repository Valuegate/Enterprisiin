import { MoreIcon, LocationIcon } from "@/public/icons";
import Button from "../Button";
import Image from "next/image";
import Autos from "@/public/assets/Rectangle 101 (1).png";
import { FC } from "react";
import React, { useState, useRef, useEffect } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import Link from "next/link";

interface iAutosCard {
  percentage?: string;
  amount: string;
  request: string;
  click: string;
  like: string;
  status: string;
  color?: string;
  bgColor?: string;
}

const AutosCard: FC<iAutosCard> = ({
  percentage,
  amount,
  request,
  click,
  like,
  status,
  color,
  bgColor,
}) => {
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
      <div className="bg-gray-light-1 rounded">
        <div className="pt-4 pb-4">
          <div className="flex gap-4 mx-4">
            <div className="">
              <Image src={Autos} alt={""} />
            </div>
            <div className="w-full">
              <div className="flex justify-between">
                <div>
                  <h2 className="font-bold text-xl mb-2 text-light-black-6">
                    Auto Repair and Service Opportunity
                  </h2>
                </div>
                <div className="flex gap-4 items-center">
                  <Button
                    type="button"
                    className="bg-light-green-20 rounded-[40px] w-[94px] h-[34px] flex justify-center items-center gap-2 text-base font-medium text-light-green"
                    // disabled={true}
                    colorType="primary"
                    color={color}
                    backgroundColor={bgColor}
                    // loading={load}
                    //   handleClick={() => setLoad(!load)}
                  >
                    <span className="bg-light-green border border-light-green rounded-full w-2 h-2"></span>
                    {status}
                  </Button>

                  {/* <MoreIcon /> */}

                  <div>
                    <div
                      className="relative inline-block text-center"
                      ref={dropdownRef}
                    >
                      <button
                        className=""
                        onClick={handleButtonClick}
                      >
                        <MoreIcon
                          className={`w-8 h-8 fill-current ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="origin-top-right absolute right-0 my-1 w-[234px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <div
                            className="py-2 px-2 text-left"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                          >
                            <Link
                              href="../../sellerdashboard/expandablestore"
                              className="block px-4 py-1 text-base leading-8 text-light-black-5 hover:bg-light-blue hover:text-white hover:rounded"
                              role="menuitem"
                            >
                              View
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="pb-2">
                <p className="font-medium text-base text-light-black-4">
                  Paggico is a growing car wash and cleaning service segment
                  operational across India. - We arrange a 360-degree car
                  washing service with highly qualified cleaning staff, tools,
                  and...
                </p>
              </div>

              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <div className="bg-light-green-1 border border-light-green-1 rounded-full p-[5px] w-8 h-8">
                      <LocationIcon />
                    </div>
                    <div className="font-medium text-base text-light-black-5">
                      {request}
                      <span className="font-normal text-xs text-light-black-4">
                        Requests
                      </span>
                    </div>
                  </div>
                  <div className="custom-separator"></div>
                  <div className="flex items-center gap-1">
                    <div className="bg-light-green-1 border border-light-green-1 rounded-full p-[5px] w-8 h-8">
                      <LocationIcon />
                    </div>
                    <div className="font-medium text-base text-light-black-5">
                      {click}
                      <span className="font-normal text-xs text-light-black-4">
                        Clicks
                      </span>
                    </div>
                  </div>
                  <div className="custom-separator"></div>
                  <div className="flex items-center gap-1">
                    <div className="bg-light-green-1 border border-light-green-1 rounded-full p-[5px] w-8 h-8">
                      <LocationIcon />
                    </div>
                    <div className="font-medium text-base text-light-black-5">
                      {like}
                      <span className="font-normal text-xs text-light-black-4">
                        Likes
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 pb-2">
                  <p className="font-medium text-xs text-light-black-4 pt-2">
                    {amount}
                  </p>
                  <div className="flex items-center text-light-green font-normal text-xs">
                    NGN{" "}
                    <span className="font-bold text-xl leading-6">400,000</span>
                    <p className="text-light-black-4 font-normal text-xs">
                      {percentage}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AutosCard;
