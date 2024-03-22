"use client";

import React, { FC } from "react";

import { SearchIcon } from "@/public/icons";

import Image from "next/image";

import Logo from "@/public/components/Logo/Logo";

import PI from "@/public/assets/Ellipse 1.png";
import { Drawer, Modal } from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";

import { IoMdClose } from "react-icons/io";

import { iMobileDrawerProps } from "../types";
import LogoutModal from "./LogoutModal";

interface iMobileDrawerLink {
  name: string;
  onClick: () => void;
}

const MobileDrawer: FC<iMobileDrawerProps> = ({
  openedDrawer,
  closeDrawer,
  username,
  role,
  contact,
}) => {
  const [showLogoutModal, { open: openLogoutModal, close: closeLogoutModal }] =
    useDisclosure(false);

  const mobileLinks: iMobileDrawerLink[] = [
    {
      name: "Profile",
      onClick: () => {},
    },
    {
      name: "Notifications",
      onClick: () => {},
    },
    {
      name: "Settings",
      onClick: () => {},
    },
    {
      name: "Help & Support",
      onClick: () => {},
    },
    {
      name: "Logout",
      onClick: openLogoutModal,
    },
  ];

  return (
    <>
      <div className="hidden md:block">
        <Drawer.Root
          opened={openedDrawer}
          onClose={closeDrawer}
          position="right"
          padding={"0px"}
          top={"0px"}
        >
          <Drawer.Overlay />
          <Drawer.Content>
            <Drawer.Body>
              <div className="flex flex-col w-full bg-background h-[100vh]">
                <div className="flex justify-between items-center w-full px-5 py-5">
                  <Logo />
                  <div onClick={closeDrawer}>
                    <IoMdClose size={"24px"} />
                  </div>
                </div>
                <div className="relative flex items-center px-5">
                  <span className="absolute left-8">
                    <SearchIcon />
                  </span>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="placeholder-italic search font-medium mt-1 py-2 pr-4 pl-10 placeholder:pl-0 text-contrast-100  w-full h-[40px] border-none focus:ring-none focus:border-none bg-input placeholder:text-contrast-30 pl:text-[16px] pl:leading-[24px] rounded "
                  />
                </div>
                <div className="flex flex-col items-center w-full mt-7 px-5">
                  <Image
                    src={PI}
                    alt="Profile Image"
                    className="w-24 h-24 rounded-full"
                  />
                  <p className="mt-4 font-bold text-[16px] leading-[28px] text-contrast-100">
                    {username}
                  </p>
                  <p className="font-medium text-[14px] leading-[24px] text-contrast-80">
                    {role}
                  </p>
                  <p className="text-[10px] leading-[18px] text-contrast-base">
                    {contact}
                  </p>
                  <div className="mt-6 w-full h-[1px] bg-contrast-10" />
                </div>
                <div className="mt-10 flex flex-col gap-5 items-start px-5">
                  {mobileLinks.map((mobileLink, i) => {
                    return (
                      <p
                        onClick={mobileLink.onClick}
                        key={i}
                        className={`font-medium text-[14px] leading-[24px] ${
                          i === mobileLinks.length - 1
                            ? "text-error"
                            : "text-contrast-80"
                        }`}
                      >
                        {mobileLink.name}
                      </p>
                    );
                  })}
                </div>
              </div>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Root>
      </div>
      <Modal opened={showLogoutModal} centered onClose={closeLogoutModal}>
        <LogoutModal onCancel={closeLogoutModal} onProceed={() => {}} />
      </Modal>
    </>
  );
};

export default MobileDrawer;
