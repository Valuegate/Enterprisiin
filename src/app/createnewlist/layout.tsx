"use client";
import {
  NotificationIcon,
  OverviewIcon,
  StoreIcon,
} from "@/public/icons";
import { TbWindowMaximize } from "react-icons/tb";
import Link from "next/link";
import React from "react";
import { ReactNode, FC, useState } from "react";
import ProfileDropdown from "@/public/components/ProfileDropdown/ProfileDropdown";
import ProgressBar from "@/public/components/ProgressBar/ProgressBar";


interface iCreateNewListLayout {
  children: ReactNode;
}

const CreateNewListLayout: FC<iCreateNewListLayout> = ({ children }) => {
  const menus = [
    { name: "New List", link: "", icon: OverviewIcon },
    { name: "Help", link: "", icon: StoreIcon },
  ];

  const [open, setOpen] = useState(true);

  return (
    <div className="flex bg-light-black h-auto">
      <div
        className={`bg-green h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 px-2`}
      >
        <div className={`flex justify-between items-center pt-4 ${
            !open && "relative"
          }`}>
          <Link href={"#"}>
            <h2
              className={`whitespace-pre duration-500 text-2xl text-white font-semibold pl-4 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              VALUE GATE
            </h2>
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

        <div
          className={`pt-8 ${
            !open && "opacity-0 translate-x-28 overflow-hidden"
          }`}
        >
          <p className="text-2xl font-medium text-white">Create New List</p>
        </div>

        <div className="mt-2 flex flex-col gap-1 relative">
          {menus?.map((menu, i) => (
            <Link
              href={menu?.link}
              key={i}
              className={`group flex items-center text-sm text-white gap-3.5 font-medium p-2 hover:bg-light-green-8 rounded`}
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
        <nav className="flex justify-end items-center px-6 pb-4">

          <div className="flex gap-4 items-center">
            <div>
              <button className="rounded border w-[118px] h-[40px] border-light-black-1 text-base font-medium text-light-black-5">Save & Exit</button>
            </div>
            <div className="">
              <NotificationIcon />
            </div>

            <div className="custom-separator"></div>

            <ProfileDropdown />
          </div>
        </nav>

        <div className="bg-light-black-12">{children}</div>
      </div>
    </div>
  );
};

export default CreateNewListLayout;
