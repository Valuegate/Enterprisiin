import React from "react";

import Image from "next/image";
import Owner from "@/public/assets/Ellipse 4 (5).png";
import { MdDone } from "react-icons/md";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { HiLockClosed } from "react-icons/hi";
import Button from "@/public/components/Button";

const ProfileCard = () => {
  return (
    <div className="flex flex-col items-center bg-white w-full md:border-none md:shadow-none rounded border-contrast-10 border-[1.5px] shadow-sm">
      <div className="mt-5 md:mt-2 flex justify-end w-full pr-4 md:pr-2">
        <div className="flex items-center gap-1 bg-role-green-bg text-green-100 px-2 py-1 rounded-full text-[14px] leading-[21px]">
          <MdDone />
          Verified
        </div>
      </div>
      <Image src={Owner} alt="owner" className="mt-6" />
      <p className="mt-3 bold-2 md:text-[14px] md:leading-[24px] text-contrast-100">
        Oyekunle Qudus
      </p>
      <p className="med-3 text-contrast-70 md:text-[14px] md:leading-[20px]">
        Co-founder
      </p>
      <p className="text-[14px] leading-[21px] text-contrast-base font-normal">
        Oyo State, Nigeria
      </p>
      <div className="mt-3 flex gap-2 justify-center items-center">
        {Array(3)
          .fill(0)
          .map((val, i) => {
            return (
              <div key={i} className="p-3 rounded-full bg-input cursor-pointer">
                {i === 0 && <FaTwitter size={"24px"} fill="#3399FF" />}
                {i === 1 && <FaInstagram size={"24px"} fill="#DE7C32" />}
                {i === 2 && <FaFacebook size={"24px"} fill="#2266AA" />}
              </div>
            );
          })}
      </div>
      <div className="mt-5 w-[80%] md:w-full mb-12">
        <Button
          type="button"
          className="text-blue-40 rounded w-full h-12 flex justify-center items-center gap-3 md:text-[14px] leading-[24px] text-[14px]"
          colorType="secondary"
        >
          <HiLockClosed size={"20px"} />
          Message
        </Button>
      </div>
    </div>
  );
};

export default ProfileCard;
