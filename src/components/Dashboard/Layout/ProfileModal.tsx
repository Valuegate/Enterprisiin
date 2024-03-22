import React, { FC } from "react";

import Image from "next/image";

import { useUserStore } from "@/public/stores/userStore";
import { iModalLogoutProp } from "../types";
import { IoIosArrowBack } from "react-icons/io";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import { GrEdit } from "react-icons/gr";

const ProfileModal: FC<iModalLogoutProp> = ({ onCancel }) => {
  const username = useUserStore((state) => state.fullName);
  const role = useUserStore((state) => state.role);
  const contact = useUserStore((state) => state.contact);
  const profilePicture = useUserStore((state) => state.image);
  const verified = useUserStore((state) => state.verified);

  return (
    <div className="flex flex-col w-[440px]">
      <div className="bg-blue-90 w-full h-[165px] px-6 pt-6">
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center gap-2">
            <IoIosArrowBack
              fill="#FFFFFF"
              size={"24px"}
              className="cursor-pointer"
              onClick={onCancel}
            />
            <h2 className="bold-1 text-white">Profile</h2>
          </div>
          <GrEdit size={"24px"} stroke="#FFFFFF" />
        </div>
      </div>
      <div className="flex flex-col w-full bg-white h-[350px] relative">
        <div className="p-1 rounded-full bg-white absolute -top-14 left-[145px]">
          <Image
            src={profilePicture}
            alt="profile picture"
            className="w-[150px] h-[150px] rounded-full object-cover"
          />
        </div>
        <div className="mt-[120px] flex flex-col w-full items-center">
          <h3 className="bold-2 text-contrast-100">{username}</h3>
          <p className="mt-1 med-3 text-contrast-80">{role}</p>
          <p className="mt-2 med-3 text-contrast-base">{contact}</p>
          <div className="mt-3 flex gap-3 justify-center items-center">
            {Array(3)
              .fill(0)
              .map((val, i) => {
                return (
                  <div
                    key={i}
                    className="p-3 rounded-full bg-input cursor-pointer"
                  >
                    {i === 0 && <FaTwitter size={"24px"} fill="#3399FF" />}
                    {i === 1 && <FaInstagram size={"24px"} fill="#DE7C32" />}
                    {i === 2 && <FaFacebook size={"24px"} fill="#2266AA" />}
                  </div>
                );
              })}
          </div>
          {verified && <div className="mt-4 flex items-center gap-1 bg-role-green-bg text-green-100 px-[10px] py-1 rounded-full text-[14px] leading-[21px]">
          <MdDone />
          Verified
        </div>}
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
