import Image from "next/image";
import React, { FC } from "react";

import { iConversationListData } from "./Data";

const ChatList: FC<iConversationListData> = ({
  conversations,
  setCurrentMessage,
}) => {
  return (
    <div className="flex flex-col w-[390px] h-full">
      <div className="h-[24vh]">
        <h2 className="text-3xl md:text-[20px] md:leading-[30px] font-bold text-black md:mt-10 mt-2">
          Messages
        </h2>
        <p className="med-3 text-contrast-base mt-2 md:text-[14px] md:leading-[20px]">
          Buy, Invest and Loan businesses as
        </p>
        <div className="mt-4 w-full h-[60px] flex justify-between items-center px-5 bg-input">
          <h1 className="bold-2 text-contrast-100">All Sellers</h1>
          <div className="bg-white rounded-full px-4 py-[6px] text-[12px] leading-[24px] font-normal text-contrast-base">
            {conversations.length}
          </div>
        </div>
      </div>
      <div className="flex flex-col overflow-y-scroll h-[71.4vh] scrollbar-custom">
        {conversations.map((conversation, i) => {
          return (
            <div
              key={i}
              onClick={() => {
                setCurrentMessage(i);
              }}
              className="flex items-center w-full pr-5 border-[0.5px] border-y-contrast-10 border-x-0 gap-3 py-2 cursor-pointer"
            >
              <div className="w-[60px] h-[48px] relative">
                <Image
                  src={conversation.image}
                  alt="convo image"
                  className="w-full h-full rounded-full"
                />
                <div
                  className={`h-[16px] w-[16px] border-4 border-white ${
                    conversation.active ? "bg-[#00A707]" : "bg-[#F6BA00]"
                  } rounded-full absolute bottom-0 right-0`}
                />
              </div>

              <div className="flex flex-col w-full">
                <div className="flex justify-between items-center">
                  <h3 className="semi-3 text-contrast-80">
                    {conversation.sellerName}
                  </h3>
                  <p className="text-[12px] leading-[16px] text-contrast-base font-normal">
                    {conversation.time}
                  </p>
                </div>
                <p className="text-[12px] leading-[16px] text-contrast-70 font-medium">
                  {conversation.businessName}
                </p>
                <div className="flex justify-between items-center">
                  <p
                    className={`${
                      conversation.count === 0 ? "w-full" : "w-[280px]"
                    } text-[12px] leading-[16px] text-contrast-70 font-normal line-clamp-1`}
                  >
                    {conversation.lastMessage}
                  </p>
                  <div className="bg-error px-[7px] py-[3px] rounded-full text-[12px] leading-[16px] text-white font-normal">
                    {conversation.count}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatList;
