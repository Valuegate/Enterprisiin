import Link from "next/link";
import Image from "next/image";
import Autos from "@/public/assets/Rectangle 101 (1).png";
import {
  HealthIcon,
  LevelIcon,
  LocationIcon,
  LoveIcon,
  MoreIcon,
} from "@/public/icons";
import Button from "../Button";
import DropdownButton from "../DropdownButton/DropdownButton";
import { FC } from "react";
import React, { useState, useRef, useEffect } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

interface iAcquiredBusinessCard {}

const AcquiredBusinessCard: FC<iAcquiredBusinessCard> = ({}) => {
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
      <div className="bg-white rounded">
        <div className="flex justify-between px-4 py-4">
          <h2 className="text-xl text-black font-bold">Acquired Businesses</h2>
          <div className="flex gap-3">
            <div>
              {/* <DropdownButton
                title={"Sort by:"}
                menu1={"Business for Sale"}
                menu2={"Business Investment"}
                menu3={"Business Loan"}
                menu4={"Asset for Sale"}
              /> */}
            </div>

            {/* <div><DropdownButton title={"Filter by:"} menu1={"Proposed"} menu2={"Accepted"} menu3={"Rejected"} menu4={undefined} /></div> */}

            <div>
              <div
                className="relative inline-block text-center"
                ref={dropdownRef}
              >
                <button
                  className="flex justify-center items-center w-[143px] h-[40px] border-none rounded bg-light-black text-center text-base"
                  onClick={handleButtonClick}
                >
                  Filter by:<span className="text-light-green-9">All</span>
                  <MdOutlineArrowDropDown
                    className={`w-8 h-8 fill-current ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-[220px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-4 px-2 text-left"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <Link
                        href="#"
                        className="block px-4 py-2 text-base leading-8 text-light-black-5 hover:bg-light-blue hover:text-white hover:rounded"
                        role="menuitem"
                      >
                        Proposed
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-base leading-8 text-light-black-5 hover:bg-light-blue hover:text-white hover:rounded"
                        role="menuitem"
                      >
                        Accepted
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-base leading-8 text-light-black-5 hover:bg-light-blue hover:text-white hover:rounded"
                        role="menuitem"
                      >
                        Rejected
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <hr className="border-none bg-light-black-1 h-[1px]" />

        <div className="py-4 px-4">
        <Link href={"../../buyerdashboard/expandableauto"}>
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
                      <div className="bg-light-yellow-1 border border-light-yellow-1 rounded-full p-[8px] w-[33px] h-[33px] cursor-pointer">
                        <LoveIcon />
                      </div>
                      <Button
                        type="button"
                        className="bg-light-yellow-1 rounded-[40px] w-[99px] h-[34px] text-base font-medium text-light-yellow-2"
                        // disabled={true}
                        colorType="primary"
                        // loading={load}
                        //   handleClick={() => setLoad(!load)}
                      >
                        Proposed
                      </Button>
                    </div>
                  </div>
                  <div className="pb-2">
                    <p className="font-medium text-base text-light-black-4">
                      Paggico is a growing car wash and cleaning service segment
                      operational across India. - We arrange a 360-degree car
                      washing service with highly qualified cleaning staff,
                      tools, and...
                    </p>
                  </div>

                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <div className="bg-light-green-1 border border-light-green-1 rounded-full p-[5px] w-8 h-8">
                          <LocationIcon />
                        </div>
                        <p className="font-medium text-base text-light-black-5">
                          Oyo State, Nigeria.
                        </p>
                      </div>
                      <div className="custom-separator"></div>
                      <div className="flex items-center gap-1">
                        <div className="bg-light-green-1 border border-light-green-1 rounded-full p-[5px] w-8 h-8">
                          <HealthIcon />
                        </div>
                        <p className="font-medium text-base text-light-black-5">
                          Agriculture Web
                        </p>
                      </div>
                      <div className="custom-separator"></div>
                      <div className="flex items-center gap-1">
                        <div className="bg-light-green-1 border border-light-green-1 rounded-full p-[5px] w-8 h-8">
                          <LevelIcon />
                        </div>
                        <p className="font-medium text-base text-light-black-5">
                          Investment Required
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pb-2">
                      <p className="font-medium text-xs text-light-black-4 pt-2">
                        Amount:
                      </p>
                      <p className="text-light-green font-normal text-xs">
                        NGN{" "}
                        <span className="font-bold text-xl leading-6">
                          400,000
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
             </Link>

          <div className="pt-4">
            <Link href={"../../buyerdashboard/expandableauto"}>
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
                        <div className="bg-light-black-1 border border-light-black-1 rounded-full p-[8px] w-[33px] h-[33px] cursor-pointer">
                          <LoveIcon color="#ADAFAE" />
                        </div>
                        <Button
                          type="button"
                          className="bg-light-green-21 rounded-[40px] w-[99px] h-[34px] text-base font-medium text-light-green-22"
                          // disabled={true}
                          colorType="primary"
                          // loading={load}
                          //   handleClick={() => setLoad(!load)}
                        >
                          Accepted
                        </Button>
                      </div>
                    </div>
                    <div className="pb-2">
                      <p className="font-medium text-base text-light-black-4">
                        Paggico is a growing car wash and cleaning service
                        segment operational across India. - We arrange a
                        360-degree car washing service with highly qualified
                        cleaning staff, tools, and...
                      </p>
                    </div>

                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <div className="bg-light-green-1 border border-light-green-1 rounded-full p-[5px] w-8 h-8">
                            <LocationIcon />
                          </div>
                          <p className="font-medium text-base text-light-black-5">
                            Oyo State, Nigeria.
                          </p>
                        </div>
                        <div className="custom-separator"></div>
                        <div className="flex items-center gap-1">
                          <div className="bg-light-green-1 border border-light-green-1 rounded-full p-[5px] w-8 h-8">
                            <HealthIcon />
                          </div>
                          <p className="font-medium text-base text-light-black-5">
                            Agriculture Web
                          </p>
                        </div>
                        <div className="custom-separator"></div>
                        <div className="flex items-center gap-1">
                          <div className="bg-light-green-1 border border-light-green-1 rounded-full p-[5px] w-8 h-8">
                            <LevelIcon />
                          </div>
                          <p className="font-medium text-base text-light-black-5">
                            Investment Required
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 pb-2">
                        <p className="font-medium text-xs text-light-black-4 pt-2">
                          Amount:
                        </p>
                        <p className="text-light-green font-normal text-xs">
                          NGN{" "}
                          <span className="font-bold text-xl leading-6">
                            400,000
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Link>
          </div>

          <div className="pt-4">
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
                        <div className="bg-light-black-1 border border-light-black-1 rounded-full p-[8px] w-[33px] h-[33px] cursor-pointer">
                          <LoveIcon color="#ADAFAE" />
                        </div>
                        <Button
                          type="button"
                          className="bg-light-green-21 rounded-[40px] w-[99px] h-[34px] text-base font-medium text-light-green-22"
                          // disabled={true}
                          colorType="primary"
                          // loading={load}
                          //   handleClick={() => setLoad(!load)}
                        >
                          Accepted
                        </Button>
                      </div>
                    </div>
                    <div className="pb-2">
                      <p className="font-medium text-base text-light-black-4">
                        Paggico is a growing car wash and cleaning service
                        segment operational across India. - We arrange a
                        360-degree car washing service with highly qualified
                        cleaning staff, tools, and...
                      </p>
                    </div>

                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <div className="bg-light-green-1 border border-light-green-1 rounded-full p-[5px] w-8 h-8">
                            <LocationIcon />
                          </div>
                          <p className="font-medium text-base text-light-black-5">
                            Oyo State, Nigeria.
                          </p>
                        </div>
                        <div className="custom-separator"></div>
                        <div className="flex items-center gap-1">
                          <div className="bg-light-green-1 border border-light-green-1 rounded-full p-[5px] w-8 h-8">
                            <HealthIcon />
                          </div>
                          <p className="font-medium text-base text-light-black-5">
                            Agriculture Web
                          </p>
                        </div>
                        <div className="custom-separator"></div>
                        <div className="flex items-center gap-1">
                          <div className="bg-light-green-1 border border-light-green-1 rounded-full p-[5px] w-8 h-8">
                            <LevelIcon />
                          </div>
                          <p className="font-medium text-base text-light-black-5">
                            Investment Required
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 pb-2">
                        <p className="font-medium text-xs text-light-black-4 pt-2">
                          Amount:
                        </p>
                        <p className="text-light-green font-normal text-xs">
                          NGN{" "}
                          <span className="font-bold text-xl leading-6">
                            400,000
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4">
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
                        <div className="bg-light-yellow-1 border border-light-yellow-1 rounded-full p-[8px] w-[33px] h-[33px] cursor-pointer">
                          <LoveIcon />
                        </div>
                        <Button
                          type="button"
                          className="bg-light-yellow-1 rounded-[40px] w-[99px] h-[34px] text-base font-medium text-light-yellow-2"
                          // disabled={true}
                          colorType="primary"
                          // loading={load}
                          //   handleClick={() => setLoad(!load)}
                        >
                          Proposed
                        </Button>
                      </div>
                    </div>
                    <div className="pb-2">
                      <p className="font-medium text-base text-light-black-4">
                        Paggico is a growing car wash and cleaning service
                        segment operational across India. - We arrange a
                        360-degree car washing service with highly qualified
                        cleaning staff, tools, and...
                      </p>
                    </div>

                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <div className="bg-light-green-1 border border-light-green-1 rounded-full p-[5px] w-8 h-8">
                            <LocationIcon />
                          </div>
                          <p className="font-medium text-base text-light-black-5">
                            Oyo State, Nigeria.
                          </p>
                        </div>
                        <div className="custom-separator"></div>
                        <div className="flex items-center gap-1">
                          <div className="bg-light-green-1 border border-light-green-1 rounded-full p-[5px] w-8 h-8">
                            <HealthIcon />
                          </div>
                          <p className="font-medium text-base text-light-black-5">
                            Agriculture Web
                          </p>
                        </div>
                        <div className="custom-separator"></div>
                        <div className="flex items-center gap-1">
                          <div className="bg-light-green-1 border border-light-green-1 rounded-full p-[5px] w-8 h-8">
                            <LevelIcon />
                          </div>
                          <p className="font-medium text-base text-light-black-5">
                            Investment Required
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 pb-2">
                        <p className="font-medium text-xs text-light-black-4 pt-2">
                          Amount:
                        </p>
                        <p className="text-light-green font-normal text-xs">
                          NGN{" "}
                          <span className="font-bold text-xl leading-6">
                            400,000
                          </span>
                        </p>
                      </div>
                    </div>
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

export default AcquiredBusinessCard;
