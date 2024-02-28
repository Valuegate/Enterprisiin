import SwitchDemo from "../Switch/SwitchDemo";

import { useState } from "react";

interface iNotificationData {
  header: string;
  content: string;
}

const NotificationSettings = () => {
  const notifications: iNotificationData[] = Array(6).fill({
    header: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet, cons piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons piscing elit lorem ipsumsit.",
  });

  return (
    <>
      <div className="px-4">
        <h2 className="text-[20px] md:text-[16px] leading-[36px] md:leading-[24px] font-bold text-contrast-100">
          Notification Settings
        </h2>
        <p className="med-3 md:text-[14px] md:leading-[24px] text-contrast-base mb-5 mt-2">
          Choose when and how we notify you.
        </p>

        <div className="w-[800px] mt-5 md:w-full">
          <div className="flex flex-col gap-5 w-full">
            {notifications.map((notification, i) => {
              return (
                <div className="flex flex-col" key={i}>
                  <div className="flex w-full items-center justify-between">
                    <h2 className="semi-3 text-contrast-80 md:text-[14px] md:leading-[24px]">
                      &#8226;<span className="pl-2">{notification.header}</span>
                    </h2>
                    <SwitchDemo />
                  </div>
                  <p className="med-3 pl-3 text-contrast-base md:text-[14px] w-[600px] md:w-full md:mt-3 mt-2">
                    {notification.content}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="py-6">
            <button
              type="submit"
              className="mt-8 bg-blue-base rounded w-[138px] h-[40px] text-white"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationSettings;
