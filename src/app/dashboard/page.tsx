"use client";
import {
  AddIcon,
  HelpIcon,
  LogoutIcon,
  MessageIcon,
  MicrophoneIcon,
  NotificationIcon,
  OverviewIcon,
  SearchIcon,
  SettingsIcon,
  StoreIcon,
  WalletIcon,
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

const DashboardLayout = () => {
  const [isSeller, setSeller] = useState<boolean>(true);
  const [index, setIndex] = useState<number>(0);
  const [open, setOpen] = useState(true);

  const menus = [
    { name: "Overview", icon: OverviewIcon },
    { name: "Store", icon: StoreIcon },
    { name: "Message", icon: MessageIcon },
    { name: "Wallet", icon: WalletIcon },
    { name: "Consult", icon: MicrophoneIcon },
    { name: "Settings", icon: SettingsIcon, margin: true },
    { name: "Help & Support", icon: HelpIcon },
    { name: "Logout", icon: LogoutIcon },
  ];

  const children: ReactNode[] = [<Overview key={"seller-overview"} />];

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
          <Link href={"./overview"}>
            <div
              className={`whitespace-pre duration-500 text-2xl text-white font-semibold pl-2 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              <WhiteLogo />
            </div>
          </Link>
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

        <Link
          className={`whitespace-pre duration-500 flex mt-6 text-2xl text-white font-semibold ${
            !open && "opacity-0 translate-x-28 overflow-hidden"
          }`}
          href={"../createnewlist/newlist"}
        >
          <button className="text-blue-base med-3 rounded w-full h-10 border border-blue-base flex justify-center items-center gap-2 font-medium bg-blue border-light-blue">
            <span>
              <AddIcon color="#3399FF" />
            </span>
            Create New List
          </button>
        </Link>

        <div className="mt-10 flex flex-col gap-1 relative">
          {menus?.map((menu, i) => (
            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              key={i}
              onClick={() => {
                setIndex(i);
              }}
              className={` ${menu?.margin && "mb-32"} 
              ${index === i ? "bg-blue-80 text-blue-10" : "text-white"}
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
                } absolute left-48 bg-white font-semibold whitespace-pre text-green rounded drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="hidden md:flex h-[8vh] bg-pale-blue justify-between items-center w-full fixed md:px-5 z-10 top-0">
        <Logo />
        <FaBarsStaggered size={"24px"} />
      </div>
      <div className="w-full pt-4 bg-pale-blue h-screen ">
        <nav className="flex justify-between items-center px-6 md:hidden">
          <div className="">
            <h1 className="text-2xl font-bold pb-1">
              Welcome Back, John Doe! 👋
            </h1>
            <p className="text-base font-medium text-black-40">
              {convertDate(new Date())}
            </p>
          </div>

          <div className="flex gap-4 items-center">
            <div className="relative flex items-center">
              <span className="absolute left-4">
                <SearchIcon />
              </span>
              <input
                type="text"
                placeholder="Search..."
                className="search py-2 pl-10 pr-4 font-medium border-none bg-white-1 rounded focus:ring-none focus:border-none"
              />
            </div>
            <div className="">
              <NotificationIcon />
            </div>

            <div className="custom-separator"></div>

            <ProfileDropdown />
          </div>
        </nav>
        <hr className="mt-2 border-none bg-light-black-1 h-[1px] md:hidden" />
        <div className="bg-pale-blue">{children[index]}</div>
        <div className="hidden md:flex justify-around fixed w-[56vw] items-center  py-2 h-14 rounded-xl shadow-gray shadow-lg bg-blue bottom-[5vh] right-[22vw] left-[22vw]">
          <div>{React.createElement(menus[0].icon)}</div>
          <AddIcon color="#FFFFFF" />
          <div>{React.createElement(menus[1].icon)}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
