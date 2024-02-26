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

interface iSellerDashBoardLayout {
  children: ReactNode;
}

const SellerDashBoardLayout: FC<iSellerDashBoardLayout> = ({ children }) => {
  const menus = [
    { name: "Overview", link: "./overview", icon: OverviewIcon },
    { name: "Store", link: "./store", icon: StoreIcon },
    { name: "Message", link: "", icon: MessageIcon },
    { name: "Wallet", link: "", icon: WalletIcon },
    { name: "consult", link: "", icon: MicrophoneIcon },
    { name: "Setting", link: "./settings", icon: SettingsIcon, margin: true },
    { name: "Help & Support", link: "./helpandsupport", icon: HelpIcon },
    { name: "Logout", link: "", icon: LogoutIcon },
  ];

  const [open, setOpen] = useState(true);

  return (
    <div className="flex bg-light-black h-auto">
      <div
        className={`bg-blue h-screen ${
          open ? "w-64" : "w-16"
        } duration-500 text-gray-100 px-2`}
      >
        <div className={`flex justify-between items-center pt-4 ${
            !open && "relative"
          }`}>
          <Link href={"./overview"}>
            <div
              className={`whitespace-pre duration-500 text-2xl text-white font-semibold pl-2 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              <WhiteLogo />
            </div>
          </Link>
          <div className={`py-3 pr-4 flex justify-end ${
            !open && "absolute left-2"
          }`}>
            <TbWindowMaximize
              className="cursor-pointer w-6 h-6 text-white"
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>

        <Link
          className={`whitespace-pre duration-500 flex mt-6 text-2xl text-white font-semibold ${!open && "opacity-0 translate-x-28 overflow-hidden"}`} href={"../createnewlist/newlist"}        >
          <button
            className="text-sm text-blue-base rounded w-full h-10 border flex justify-center items-center gap-2 font-medium bg-blue border-light-blue"
            // disabled={true}
            // loading={load}
            //   handleClick={() => setLoad(!load)}
          >
            <span>
              <AddIcon color="#3399FF" />
            </span>
            Create New List
          </button>
        </Link>

        <div className="mt-4 flex flex-col gap-1 relative">
          {menus?.map((menu, i) => (
            <Link
              href={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mb-32"
              } group flex items-center text-sm text-white gap-3.5 font-medium p-2 hover:bg-light-blue-2 rounded`}
            >
              <div>{React.createElement(menu?.icon)}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
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
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full pt-4 bg-light-black-12 h-screen">
        <nav className="flex justify-between items-center px-6">
          <div className="">
            <h1 className="text-2xl font-bold pb-1">Welcome Back, John Doe! 👋</h1>
            <p className="text-base">07 May, 2023</p>
          </div>

          <div className="flex gap-4 items-center">
            <div className="relative flex items-center">
              <span className="absolute left-4">
                <SearchIcon />
              </span>
              <input
                type="text"
                placeholder="Search..."
                className="search py-2 pl-10 pr-4 border-none bg-white-1 rounded focus:ring-none focus:border-none"
              />
            </div>
            <div className="">
              <NotificationIcon />
            </div>
            
            <div className="custom-separator"></div>

              <ProfileDropdown />
            </div>
        </nav>
        <hr className="mt-2 border-none bg-light-black-1 h-[2px]"/>

        <div className="bg-light-black-12">{children}</div>

      </div>
    </div>
  );
};

export default SellerDashBoardLayout;
