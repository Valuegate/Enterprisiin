import Image from "next/image";
import React, { FC, useState, useEffect } from "react";

import { iConversationListData } from "./types";

import { useDashboardStore } from "@/public/stores/dashboardStore";

const ChatList: FC<iConversationListData> = ({
  conversations,
  setCurrentMessage,
  currentMessage,
  seller,
}) => {
  const filters: string[] = ["All", "Requests", "Connected", "Clients"];
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    setFilter(filters[0]);
  }, []);

  return (
    <div className="flex flex-col w-[390px] md:w-full h-full">
      <div className={`${seller ? "h-[266px]" : "h-[178px]"} md:h-auto flex flex-col w-full`}>
        <h2 className="text-3xl md:text-[20px] md:leading-[30px] font-bold text-black md:mt-10 mt-2">
          Messages
        </h2>
        <p className="md:text-[14px] md:leading-[20px] text-contrast-base mt-2">Buy, Invest and Loan Businesses as much as you can afford.</p>
        {seller && (
          <div className="flex flex-col">
            <p className="med-3 text-contrast-base mt-2 md:hidden">Filter by label</p>
            <div className="mt-4 flex items-center gap-3 w-full md:overflow-x-scroll scrollbar-custom">
              {filters.map((f, i) => {
                return (
                  <div
                    key={i}
                    className={`${
                      filters[i] === filter ? "bg-blue-base text-white" : "bg-input text-contrast-base"
                    } cursor-pointer rounded-md py-2 px-3 med-3`}
                    onClick={() => {
                      setFilter(filters[i]);
                    }}
                  >
                    {f}
                  </div>
                );
              })}
            </div>
          </div>
        )}
        <div className="mt-4 w-full h-[60px] md:h-[56px] flex justify-between items-center px-5 bg-input">
          <h1 className="bold-2 md:text-[14px] md:leading-[24px] text-contrast-100">
            All {seller ? (filter === filters[0] ? "Messages" : filter) : "Sellers"}
          </h1>
          <div className="bg-white rounded-full px-4 py-[6px] md:py-1 text-[12px] leading-[24px] font-normal text-contrast-base">
            {conversations.length}
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col overflow-y-scroll w-full scrollbar-custom md:h-auto ${
          seller ? "h-[calc(90vh-308px)] " : "h-[calc(90vh-220px)]"
        }`}
      >
        {conversations.map((conversation, i) => {
          return (
            <div
              key={i}
              onClick={() => {
                setCurrentMessage(i);
                useDashboardStore.setState({viewingMessage: true});
              }}
              className={`flex items-center w-full pl-1 md:pl-0 pr-5 md:pr-0 gap-3 md:gap-4 py-2 cursor-pointer border-[0.5px] border-y-contrast-10 border-x-0 ${
                i === currentMessage &&
                "bg-blue-10 rounded "
              }`}
            >
              <div className="w-[60px] h-[48px] relative">
                <Image
                  src={conversation.image}
                  alt="convo image"
                  className="w-[48px] h-[48px] rounded-full"
                />
                <div
                  className={`h-[16px] w-[16px] border-4 border-white ${
                    conversation.active ? "bg-[#00A707]" : "bg-[#F6BA00]"
                  } rounded-full absolute bottom-0 right-0`}
                />
              </div>

              <div className="flex flex-col w-full">
                <div className="flex justify-between items-center">
                  <h3 className="semi-3 md:text-[14px] md:leading-[24px] text-contrast-80">
                    {conversation.sellerName}
                  </h3>
                  <p className="text-[12px] leading-[16px] text-contrast-base font-normal">
                    {conversation.time}
                  </p>
                </div>
                <p className="text-[12px] leading-[16px] text-contrast-70 md:text-contrast-50 font-medium">
                  {conversation.businessName}
                </p>
                <div className="flex justify-between items-center">
                  <p
                    className={`${
                      conversation.count === 0 ? "w-full" : "w-[280px] md:w-[240px]"
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
