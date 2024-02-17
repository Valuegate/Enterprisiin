"use client";

import Logo from "@/public/components/Logo/Logo";
import UploadProfilePicture from "@/public/components/onboarding-components/UploadProfilePicture";
import Link from "next/link";
import ProgressBar from "@/public/components/ProgressBar/ProgressBar";
import React, { ReactNode, useState } from "react";
import Button from "@/public/components/Button";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import SocialMedia from "@/public/components/onboarding-components/SocialMedia";
import PasswordSetup from "@/public/components/onboarding-components/SetupPassword";

const OnboardPage = () => {
  const [index, setIndex] = useState<number>(0);
  const children: ReactNode[] = [
    <UploadProfilePicture key="uploadProfilePicture" />,
    <SocialMedia key="socialMedia" />,
    <PasswordSetup key="passwordSetup" />,
  ];

  return (
    <div className="w-full bg-white px-5 py-5">
      {/* <div className="mb-12 md:hidden">
        <nav>
          <Link href="/">
            <Logo />
          </Link>
        </nav>
      </div> */}
      <div className="w-full">{children[index]}</div>
      <div className="mt-20 flex flex-col top-auto fixed bottom-0 right-0 pb-4 w-full items-end">
        <ProgressBar progress={(index + 1) * 33.33333} />
        <div
          className={`px-5 flex w-full ${
            index === 0 ? "justify-end" : "justify-between"
          }`}
        >
          <Button
            type="button"
            height="h-10"
            width={`md:w-[35vw] w-auto`}
            className={`border-r-amber-400 ${
              index === 0 && "hidden"
            } rounded px-3 mt-5 flex justify-center items-center gap-1 font-medium text-light-blue`}
            colorType="secondary"
            handleClick={() => {
              setIndex((val) => val - 1);
            }}
          >
            <IoIosArrowBack size={"20px"} />
            Back
          </Button>
          <Button
            type="button"
            height="h-10"
            width={`md:w-[${index === 0 ? "90" : "35"}vw] w-auto`}
            className={`border-r-amber-400 rounded px-3 mt-5 flex justify-center items-center gap-1 font-medium text-white`}
            colorType="primary"
            handleClick={() => {
              if (index == children.length - 1) {
                window.location.assign("/sellerdashboard/overview");
              } else {
                setIndex((val) => val + 1);
              }
            }}
          >
            Next
            <IoIosArrowForward size={"20px"} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OnboardPage;
