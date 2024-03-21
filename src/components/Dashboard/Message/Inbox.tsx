import Image from "next/image";
import React, { FC } from "react";

import { RiSendPlaneFill } from "react-icons/ri";
import { MdOutlineMoreVert, MdEmojiEmotions } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";

import PI from "@/public/assets/Ellipse 1.png";

import { iInboxData, iMessage } from "./Data";

import { IoIosArrowBack } from "react-icons/io";

import { useMessageStore } from "@/public/stores/dashboardStore";


const currentUser = "currentUser",
  otherUser = "otherUser";

const Inbox: FC<iInboxData> = ({ conversation, exit }) => {
  const messages: iMessage[] = [
    {
      senderID: otherUser,
      senderImage: conversation.image,
      receiverID: currentUser,
      time: "09:45 AM",
      date: "July 20th, 2022",
      content:
        "Paggico is a growing car wash and cleaning service segment operational across India. - We arrange a 360-degree car washing service with highly qualified cleaning staff, tools, and aggico is a growing car wash and cleaning service segment operational across India. - We arrange a 360-degree car washing service with highly qualified cleaning staff, tools.",
    },
    {
      senderID: currentUser,
      senderImage: PI,
      receiverID: otherUser,
      time: "09:45 AM",
      date: "July 20th, 2022",
      content:
        "Paggico is a growing car wash and cleaning service segment operational across India. - We arrange a 360-degree car washing service with highly qualified cleaning staff, tools, and aggico is a growing car wash and cleaning service segment operational across India. - We arrange a 360-degree car washing service with highly qualified cleaning staff, tools.",
    },
    {
      senderID: otherUser,
      senderImage: conversation.image,
      receiverID: currentUser,
      time: "09:45 AM",
      date: "July 20th, 2022",
      content:
        "Paggico is a growing car wash and cleaning service segment operational across India. - We arrange a 360-degree car washing service with highly qualified cleaning staff, tools, and aggico is a growing car wash and cleaning service segment operational across India. - We arrange a 360-degree car washing service with highly qualified cleaning staff, tools.",
    },
    {
      senderID: currentUser,
      senderImage: PI,
      receiverID: otherUser,
      time: "09:45 AM",
      date: "July 20th, 2022",
      content:
        "Paggico is a growing car wash and cleaning service segment operational across India. - We arrange a 360-degree car washing service with highly qualified cleaning staff, tools, and aggico is a growing car wash and cleaning service segment operational across India. - We arrange a 360-degree car washing service with highly qualified cleaning staff, tools.",
    },
  ];

  return (
    <div className="w-full h-full md:h-auto flex-col flex md:flex-col md:pt-10">
      <div className="w-full flex px-6 items-center justify-between h-[10vh] md:h-[80px] border-b-[1.5px] md:border-none border-contrast-10 md:bg-contrast-10 md:fixed md:top-[48px]">
        <div className="flex gap-4 md:gap-2 items-center md:w-[55%]">
        <div onClick={
          () => {
            useMessageStore.setState({viewingMessage: false});
            exit();
          }
        } className="cursor-pointer md:block hidden">
          <IoIosArrowBack fill="#141414" size={"26px"} />
        </div>
          <div className="w-[48px] h-[48px] relative">
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
          <div className="flex flex-col">
            <h2 className="bold-2 md:text-[14px] md:leading-[24px] text-contrast-100">
              {conversation.sellerName}
            </h2>
            <p className="med-3 md:text-[12px] md:leading-[20px] text-contrast-70">
              {conversation.time}
            </p>
          </div>
        </div>

        <div className="flex gap-4 md:gap-2 items-center md:w-[40%]">
          <div className="text-blue-base med-3 md:text-[14px] md:leading-[20px] px-3 py-2 rounded-full bg-blue-10">
            {" "}
            View Business{" "}
          </div>
          <MdOutlineMoreVert fill={"#000000"} size={"24px"} />
        </div>


      </div>
      <div className="w-full flex flex-col h-[60vh] md:h-auto overflow-y-scroll scrollbar-custom gap-5 px-6 py-2">
        {messages.map((message, i) => {
          return (
            <div
              key={i}
              className={`w-full flex gap-3 ${
                message.senderID === otherUser ? "justify-start" : "justify-end"
              } items-start`}
            >
              {message.senderID === otherUser && (
                <Image
                  src={message.senderImage}
                  alt="sender image"
                  className="w-[32px] h-[32px] rounded-full"
                />
              )}
              <div
                className={`flex flex-col gap-2 ${
                  message.senderID === otherUser ? "items-start" : "items-end"
                }`}
              >
                <div
                  className={`${
                    message.senderID === otherUser
                      ? "bg-input text-contrast-base rounded-tl-none"
                      : "bg-blue-base text-white rounded-tr-none"
                  } px-5 py-4 med-3 md:text-[14px] rounded-lg max-w-[500px]`}
                >
                  {message.content}
                </div>
                <div className="w-fit flex gap-2 text-[12px] leading-[24px] md:leading-[20px] text-contrast-base font-normal">
                  <span>{message.date}</span>
                  &#8226;
                  <span>{message.time}</span>
                </div>
              </div>
              {message.senderID === currentUser && (
                <Image
                  src={message.senderImage}
                  alt="sender image"
                  className="w-[32px] h-[32px] rounded-full"
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="w-full flex px-6 items-center gap-10 h-[10vh] border-t-[1.5px] border-contrast-10 md:fixed md:bottom-0 md:bg-background">
        <div className="flex gap-4 w-[100px]">
          <div className="h-[40px] w-[40px] bg-blue-base rounded-full flex items-center justify-center">
            <IoIosAddCircle fill="#FFFFFF" size={"28px"} />
          </div>
          <div className="h-[40px] w-[40px] bg-blue-base rounded-full flex items-center justify-center">
            <MdEmojiEmotions fill="#FFFFFF" size={"28px"} />
          </div>
        </div>

        <div className="w-full relative">
          <input
            type="text"
            placeholder="Send a message..."
            className="w-full bg-input text-contrast-100 placeholder:text-contrast-30 med-3 rounded-[12px] py-3 pl-4"
          />
          <div className="absolute right-4 top-[14px]">
            <RiSendPlaneFill fill="#3399FF" size={"24px"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
