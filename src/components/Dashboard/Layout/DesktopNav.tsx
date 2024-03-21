"use client";

import { AddIcon, NotificationIcon, SearchIcon } from "@/public/icons";

import React, { FC } from "react";
import Link from "next/link";

import Image from "next/image";

import WhiteLogo from "@/public/components/WhiteLogo/WhiteLogo";
import { TbWindowMaximize } from "react-icons/tb";

import { motion } from "framer-motion";
import { iDesktopNavProps } from "../types";

const DesktopNav: FC<iDesktopNavProps> = ({
  isSeller,
  open,
  setIndex,
  setOpen,
  menus,
  index,
}) => {
  return (
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
          className={`py-3 pr-4 flex justify-end ${!open && "absolute left-2"}`}
        >
          <TbWindowMaximize
            className="cursor-pointer w-6 h-6 text-white"
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>

      {isSeller && (
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
      )}

      <div className="mt-8 flex flex-col gap-1 relative w-full">
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
          ${index === i ? "bg-blue-80 text-blue-10" : "text-contrast"}
            group flex items-center cursor-pointer text-sm gap-3.5 font-medium p-2 ${
              index !== i && "hover:bg-light-blue-2"
            }  rounded`}
          >
            <div className=" ">
              <Image
                src={index === i ? menu.active : menu.inactive}
                alt="menu-icon"
                className="w-[24px] h-[24px]"
              />
            </div>
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
  );
};

export default DesktopNav;
