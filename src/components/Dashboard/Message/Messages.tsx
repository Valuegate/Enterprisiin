import React, { useState, FC } from "react";
import Person from "@/public/assets/Ellipse 4 (1).png";
import { iConversation, iMessagesProps } from "./types";

import ChatList from "./ChatList";
import Inbox from "./Inbox";

import { useDashboardStore } from "@/public/stores/dashboardStore";

const Messages: FC<iMessagesProps> = ({ seller }) => {
  const conversations: iConversation[] = Array(20).fill({
    image: Person,
    sellerName: "Ochogwu Matthew",
    businessName: "Auto Repair and Service Oppotunity",
    lastMessage:
      "Hello, I am a founder of VGC. I have full interest in the business you showcased recently in the fair.",
    time: "04:50 AM",
    active: false,
    count: 8,
  });

  const [currentMessage, setCurrentMessage] = useState<number>(-1);

  const viewingMessage = useDashboardStore((state) => state.viewingMessage);

  return (
    <div className={`px-6 ${(viewingMessage && currentMessage !== -1) ? "md:px-0" : "md:px-5 pt-4"} w-full  h-[90vh] md:h-auto pb-6 flex items-end`}>
      <div
        className={`${
          currentMessage === -1 ? "block" : "md:hidden"
        } flex items-end w-full`}
      >
        <ChatList
          conversations={conversations}
          currentMessage={currentMessage}
          seller={seller}
          setCurrentMessage={(i) => setCurrentMessage(i)}
        />
        <div className="w-full bg-white h-[80vh] rounded shadow-sm border-[1.5px] border-contrast-10 flex flex-col md:hidden">
          {currentMessage !== -1 ? (
            <Inbox
              conversation={conversations[currentMessage]}
              exit={() => {
                setCurrentMessage(-1);
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <h2>There are no messages selected yet</h2>
            </div>
          )}
        </div>
      </div>
      {currentMessage !== -1 && (
        <div className="md:block hidden">
          <Inbox
            conversation={conversations[currentMessage]}
            exit={() => {
              setCurrentMessage(-1);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Messages;
