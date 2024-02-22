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
import { ReactNode, useState, useEffect } from "react";
import ProfileDropdown from "@/public/components/ProfileDropdown/ProfileDropdown";
import Logo from "@/public/components/Logo/Logo";
import WhiteLogo from "@/public/components/WhiteLogo/WhiteLogo";
import SellerOverview from "@/public/components/Dashboard/Seller/SellerOverview";
import BuyerOverview from "@/public/components/Dashboard/Buyer/BuyerOverview";

// import { motion } from "framer-motion";
import { motion } from "framer-motion";

import { FaBarsStaggered } from "react-icons/fa6";
import Store from "@/public/components/Dashboard/Seller/Store";
import { IconProps } from "@/public/icons/types";

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

interface iMenuItemContent {
  name: string;
  icon: any;
  margin?: boolean | null;
}

const DashboardLayout = () => {
  const [isSeller, setSeller] = useState<boolean>(false);
  const [children, setChildren] = useState<ReactNode[]>([]);
  const [menus, setMenus] = useState<iMenuItemContent[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (isSeller) {
      setChildren([
        <SellerOverview key={"seller-overview"} />,
        <Store key={"store"} />,
      ]);
      setMenus([
        { name: "Overview", icon: OverviewIcon },
        { name: "Store", icon: StoreIcon },
        { name: "Messages", icon: MessageIcon },
        { name: "Wallet", icon: WalletIcon },
        { name: "Consult", icon: MicrophoneIcon },
        { name: "Settings", icon: SettingsIcon, margin: true },
        { name: "Help & Support", icon: HelpIcon },
        { name: "Logout", icon: LogoutIcon },
      ]);
    } else {
      setChildren([
        <BuyerOverview key={"buyer-overview"} />,
        <Store key={"store"} />,
      ]);
      setMenus([
        { name: "Overview", icon: OverviewIcon },
        { name: "Marketplace", icon: StoreIcon },
        { name: "Messages", icon: MessageIcon },
        { name: "Wallet", icon: WalletIcon },
        { name: "Settings", icon: SettingsIcon, margin: true },
        { name: "Help & Support", icon: HelpIcon },
        { name: "Logout", icon: LogoutIcon },
      ]);
    }
  }, []);

  return (
    <div className="flex bg-background h-[100vh] md:h-full">
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

        <Link
          className={`whitespace-pre duration-500 flex mt-10 text-2xl text-white font-semibold ${
            !open && "opacity-0 translate-x-28 overflow-hidden"
          }`}
          href={"/dashboard/create-new-listing"}
        >
          <button className="text-blue-base med-3 rounded w-full h-10 border border-blue-base flex justify-center items-center gap-2 font-medium bg-blue border-light-blue">
            <span>
              <AddIcon color="#3399FF" />
            </span>
            Create New List
          </button>
        </Link>

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
              className={` ${menu?.margin && "mb-32"} 
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
      <div className="w-full">
        <nav className="flex justify-between items-center px-[40px] md:hidden h-[10vh] border-b-[1px] border-contrast-10">
          <div className="">
            <h1 className="text-2xl font-bold pb-1">
              Welcome Back, John Doe! 👋
            </h1>
            <p className="med-3 text-contrast-40">{convertDate(new Date())}</p>
          </div>

          <div className="flex gap-4 items-center">
            <div className="relative flex items-center">
              <span className="absolute left-4">
                <SearchIcon />
              </span>
              <input
                type="text"
                placeholder="Search..."
                className="placeholder-italic search mt-1 py-2 pr-4 pl-10  w-[268px] h-[40px] border-none focus:ring-none focus:border-none bg-default placeholder:text-contrast-30 pl:text-[16px] pl:leading-[24px] md:placeholder:text-[14px] md:placeholder:leading-[22.4px] rounded "
              />
            </div>
            <div className="">
              <NotificationIcon />
            </div>

            <div className="custom-separator"></div>

            <ProfileDropdown />
          </div>
        </nav>

        <div className="">{children[index]}</div>
        <div className="hidden md:flex justify-around fixed w-[56vw] items-center py-2 h-14 rounded-xl shadow-gray shadow-lg bg-blue-90 bottom-[5vh] right-[22vw] left-[22vw]">
          <div onClick={() => setIndex(0)}>
            {menus[0] !== undefined && React.createElement(menus[0].icon)}
          </div>
          <div
            onClick={() => {
              window.location.assign("/dashboard/create-new-listing");
            }}
          >
            <AddIcon color="#FFFFFF" />
          </div>
          <div onClick={() => setIndex(1)}>
            {menus[1] !== undefined && React.createElement(menus[1].icon)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
