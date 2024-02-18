"use client";
import {
  AddIcon,
  HelpIcon,
  NotificationIcon,
  OverviewIcon,
  SearchIcon,
} from "@/public/icons";
import { TbWindowMaximize } from "react-icons/tb";
import Link from "next/link";
import React from "react";
import { ReactNode, FC, useState } from "react";
import ProfileDropdown from "@/public/components/ProfileDropdown/ProfileDropdown";
import Logo from "@/public/components/Logo/Logo";
import WhiteLogo from "@/public/components/WhiteLogo/WhiteLogo";
import Overview from "@/public/components/Dashboard/Seller/Overview";

import { motion } from "framer-motion";

import { FaBarsStaggered } from "react-icons/fa6";

import Button from "@/public/components/Button";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function convertDate(date: string | Date) {
  let dateObject = new Date(date);

  let day = dateObject.getDate();
  let month = dateObject.getMonth();
  let year = dateObject.getFullYear();

  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let monthName = monthNames[month];

  let dayWithSuffix = day + getOrdinalSuffix(day);

  return `${monthName} ${dayWithSuffix}, ${year}`;
}

function getOrdinalSuffix(day: number) {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

const CreateNewListing = () => {
  const [index, setIndex] = useState<number>(0);
  const [open, setOpen] = useState(true);

  const menus = [
    { name: "New List", link: "", icon: OverviewIcon },
    { name: "Help", link: "./helpandsupport", icon: HelpIcon },
  ];

  const children: ReactNode[] = [];

  return (
    <div className="flex bg-background h-[100vh] md:h-auto">
      <div
        className={`bg-blue-90 h-screen ${
          open ? "w-[20%] px-4" : "w-[4%] pr-3 pl-3"
        } duration-500 text-gray-100  md:hidden`}
      >
        <div
          className={`flex justify-between items-center pt-4 ${
            !open && "relative"
          }`}
        >
          <div
            onClick={() => setIndex(0)}
            className={`whitespace-pre duration-500 text-2xl cursor-pointer text-white font-semibold pl-2 ${
              !open && "opacity-0 translate-x-28 overflow-hidden"
            }`}
          >
            <WhiteLogo />
          </div>
          <div
            className={`py-3 pr-4 flex justify-end ${
              !open && "absolute left-2"
            }`}
          >
            <TbWindowMaximize
              className="cursor-pointer w-6 h-6 text-white"
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>

        <p
          className={`whitespace-pre duration-500 flex mt-10 med-1 text-white ${
            !open && "opacity-0 translate-x-28 overflow-hidden"
          }`}
        >
          Create New List
        </p>

        <div className="mt-8 flex flex-col gap-1 relative">
          {menus?.map((menu, i) => (
            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              key={i}
              onClick={() => {
                setIndex(i);
              }}
              className={`
              ${index === i ? "bg-blue-80 text-blue-10" : "text-[#ffffff88]"}
                group flex items-center cursor-pointer text-sm gap-3.5 font-medium p-2 ${
                  index !== i && "hover:bg-light-blue-2"
                }  rounded`}
            >
              <div>{React.createElement(menu?.icon)}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden "
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-blue-100 rounded drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="hidden md:flex h-[8vh] bg-background justify-between items-center w-full fixed md:px-5 z-10 top-0">
        <Logo />
        <FaBarsStaggered size={"24px"} />
      </div>
      <div className="w-full pt-4">
        <nav className="flex justify-end items-center px-[40px] md:hidden py-2">
          <div className="flex gap-4 items-center">
            <div className="px-3 py-2 border-[1.5px] border-contrast-10 rounded med-3">
              Save & Exit
            </div>
            <div className="">
              <NotificationIcon />
            </div>

            <div className="custom-separator"></div>

            <ProfileDropdown />
          </div>
        </nav>
        <hr className="mt-2 border-none bg-contrast-10 h-[1px] md:hidden" />
        <div className="">{children[index]}</div>
        <div className="mt-20 flex flex-col top-auto fixed bottom-0 right-0 pb-4 w-full items-end">
          {/** Line */}
          <div
            className={`px-5 flex w-full ${
              index === 0 ? "justify-end" : "justify-between"
            }`}
          >
            <Button
              type="button"
              height="h-10"
              width={`md:w-[30vw] w-auto`}
              className={`border-r-amber-400 ${
                index === 0 && "hidden"
              } rounded px-3 mt-5 flex justify-center items-center gap-1 text-blue-base`}
              colorType="secondary"
              handleClick={() => {
                setIndex((val) => val - 1);
              }}
            >
              <IoIosArrowBack size={"20px"} />
              Back
            </Button>
            <Button
              type="button"
              height="h-10"
              width={`md:w-[${index === 0 ? "90" : "30"}vw] w-auto`}
              className={`border-r-amber-400 rounded px-3 mt-5 flex justify-center items-center gap-1 text-white`}
              colorType="primary"
              handleClick={() => {
                if (index == children.length - 1) {
                  window.location.assign("/dashboard");
                } else {
                  setIndex((val) => val + 1);
                }
              }}
            >
              Next
              <IoIosArrowForward size={"20px"} />
            </Button>
          </div>
        </div>
        <div className="hidden md:flex justify-around fixed w-[56vw] items-center py-2 h-14 rounded-xl shadow-gray shadow-lg bg-blue-90 bottom-[5vh] right-[22vw] left-[22vw]">
          <div>{React.createElement(menus[0].icon)}</div>

          <div>{React.createElement(menus[1].icon)}</div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewListing;
