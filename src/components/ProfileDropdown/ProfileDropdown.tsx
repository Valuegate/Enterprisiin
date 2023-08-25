"use client"
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import PI from "../../assets/Ellipse 1.png"
import { MdOutlineArrowDropDown } from "react-icons/md"
import Link from "next/link";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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
    <div className="relative" ref={dropdownRef}>
      <div
        className="flex items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          src={PI}
          alt="Profile Image"
          className="w-8 h-8 rounded-full"
        />
        <div className="text-md">
        <MdOutlineArrowDropDown className={`w-8 h-8 fill-current ${isOpen ? "rotate-180" : ""}`} />
        </div>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white border-none border-light-green-8 rounded shadow-lg">
          <Link
            href=""
            className="block px-4 py-2 hover:bg-light-green-8 hover:text-white"
          >
            Profile
          </Link>
          <Link
            href="#"
            className="block px-4 py-2 hover:bg-light-green-8 hover:text-white"
          >
            Settings
          </Link>
          <Link
            href=""
            className="block px-4 py-2 hover:bg-light-green-8 hover:text-white"
          >
            Logout
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
