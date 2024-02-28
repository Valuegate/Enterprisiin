"use client";
import AccountSettings from "@/public/components/AccountSettings/AccountSettings";
import NotificationSettings from "@/public/components/NotificationSettings/NotificationSettings";
import PasswordSettings from "@/public/components/PasswordSettings/PasswordSettings";

import React, { useState } from "react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <>
      <div className="px-6 pt-4 overflow-y-scroll h-[90vh] md:h-auto pb-6">
        <h2 className="text-3xl md:text-[20px] md:leading-[30px] font-bold text-black md:mt-10 mt-2">
          Settings
        </h2>
        <div className="w-full bg-white rounded pb-4 mt-6 shadow-sm">
          <div className="flex gap-4 items-center border-b-[1.5px] border-contrast-10 md:overflow-x-auto scrollbar-custom">
            <div
              onClick={() => {
                setActiveTab(0);
              }}
              className={`med-3 h-[64px] md:text-[14px] md:leading-[24px] items-center flex cursor-pointer ${
                activeTab === 0
                  ? "text-blue-base border-b-[1px] border-blue-base"
                  : "text-contrast-30"
              }`}
            >
              <p className="px-4 ">Account</p>
            </div>
            <div className="md:w-[90px]">
              <p
                onClick={() => {
                  setActiveTab(1);
                }}
                className={`med-3 h-[64px] md:w-[90px] md:text-[14px] md:leading-[24px] items-center flex cursor-pointer ${
                  activeTab === 1
                    ? "text-blue-base border-b-[1px] border-blue-base"
                    : "text-contrast-30"
                }`}
              >
                <p className="md:pl-2">Password</p>
              </p>
            </div>
            <div className="md:w-[90px]">
              <p
                onClick={() => {
                  setActiveTab(2);
                }}
                className={`med-3 h-[64px] md:w-[90px] md:text-[14px] md:leading-[24px] items-center flex cursor-pointer ${
                  activeTab === 2
                    ? "text-blue-base border-b-[1px] border-blue-base"
                    : "text-contrast-30"
                }`}
              >
                <p className="md:pl-2">Notification</p>
              </p>
            </div>
          </div>

          <div className="mt-7">
            {activeTab === 0 && <AccountSettings />}
            {activeTab === 1 && <PasswordSettings />}
            {activeTab === 2 && <NotificationSettings />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
