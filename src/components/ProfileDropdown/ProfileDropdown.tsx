"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import Link from "next/link";

import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useUserStore } from "@/public/stores/userStore";
import ProfileModal from "../Dashboard/Layout/ProfileModal";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const profilePicture = useUserStore((state) => state.image);

  const [
    showProfileModal,
    { open: openProfileModal, close: closeProfileModal },
  ] = useDisclosure(false);

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <Modal.Root
        opened={showProfileModal}
        centered
        onClose={closeProfileModal}
        padding={"0px"}
        top={"0px"}
      >
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Body>
            <ProfileModal onCancel={closeProfileModal} onProceed={() => {}} />
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
      <div className="relative" ref={dropdownRef}>
        <div className="flex items-center cursor-pointer">
          <Image
            src={profilePicture}
            alt="Profile Image"
            className="w-8 h-8 rounded-full cursor-pointer"
            onClick={openProfileModal}
          />
          <div className="text-md" onClick={() => setIsOpen(!isOpen)}>
            <MdOutlineArrowDropDown
              className={`w-8 h-8 fill-current ${isOpen ? "rotate-180" : ""}`}
            />
          </div>
        </div>

        {isOpen && (
          <div className="absolute right-0 mt-2 bg-white border-none border-light-green-8 rounded shadow-lg p-[5px]">
            <Link
              href=""
              className="block px-4 py-2 hover:bg-blue-base hover:text-white"
            >
              Profile
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 hover:bg-blue-base hover:text-white"
            >
              Settings
            </Link>
            <Link
              href=""
              className="block px-4 py-2 hover:bg-blue-base hover:text-white text-error"
            >
              Logout
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileDropdown;
