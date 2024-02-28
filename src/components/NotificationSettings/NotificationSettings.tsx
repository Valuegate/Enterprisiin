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

        <div className="w-[800px] pt-[15px]">
          <div className="flex flex-col gap-[9px]">
            <div className="flex justify-between">
              <div className="flex gap-2">
                <span className="w-[6px] h-[6px] bg-light-black-5 rounded-full mt-2"></span>
                <div className="">
                  <h2 className="font-semibold text-base text-light-black-5">
                    Lorem ipsum dolor sit amet
                  </h2>
                  <p className="font-medium text-base text-light-black-5 w-[600px]">
                    Lorem ipsum dolor sit amet, cons piscing elit lorem
                    ipsumsit. Lorem ipsum dolor sit amet, cons piscing elit
                    lorem ipsumsit.
                  </p>
                </div>
              </div>
              <div className="">
                <SwitchDemo />
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex gap-2">
                <span className="w-[6px] h-[6px] bg-light-black-5 rounded-full mt-2"></span>
                <div className="">
                  <h2 className="font-semibold text-base text-light-black-5">
                    Lorem ipsum dolor sit amet
                  </h2>
                  <p className="font-medium text-base text-light-black-5 w-[600px]">
                    Lorem ipsum dolor sit amet, cons piscing elit lorem
                    ipsumsit. Lorem ipsum dolor sit amet, cons piscing elit
                    lorem ipsumsit.
                  </p>
                </div>
              </div>
              <div className="">
                <SwitchDemo />
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex gap-2">
                <span className="w-[6px] h-[6px] bg-light-black-5 rounded-full mt-2"></span>
                <div className="">
                  <h2 className="font-semibold text-base text-light-black-5">
                    Lorem ipsum dolor sit amet
                  </h2>
                  <p className="font-medium text-base text-light-black-5 w-[600px]">
                    Lorem ipsum dolor sit amet, cons piscing elit lorem
                    ipsumsit. Lorem ipsum dolor sit amet, cons piscing elit
                    lorem ipsumsit.
                  </p>
                </div>
              </div>
              <div className="">
                <SwitchDemo />
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex gap-2">
                <span className="w-[6px] h-[6px] bg-light-black-5 rounded-full mt-2"></span>
                <div className="">
                  <h2 className="font-semibold text-base text-light-black-5">
                    Lorem ipsum dolor sit amet
                  </h2>
                  <p className="font-medium text-base text-light-black-5 w-[600px]">
                    Lorem ipsum dolor sit amet, cons piscing elit lorem
                    ipsumsit. Lorem ipsum dolor sit amet, cons piscing elit
                    lorem ipsumsit.
                  </p>
                </div>
              </div>
              <div className="">
                <SwitchDemo />
              </div>
            </div>
          </div>
          <div className="pt-6 pb-20">
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
