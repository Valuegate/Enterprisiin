import React, { useState } from "react";
import Person from "@/public/assets/Ellipse 4 (1).png";
import { iConversation } from "./Data";

import ChatList from "./ChatList";
import Inbox from "./Inbox";

const Messages = () => {
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

  return (
    <div className="px-6 pt-4 h-[90vh] md:h-auto pb-6 flex items-end">
      <ChatList
        conversations={conversations}
        setCurrentMessage={(i) => setCurrentMessage(i)}
      />
      <div className="w-full bg-white h-[80vh] rounded shadow-sm border-[1.5px] border-contrast-10 flex flex-col">
        {currentMessage !== -1 ? (
          <Inbox conversation={conversations[currentMessage]} />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <h2>There are no messages selected yet</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
