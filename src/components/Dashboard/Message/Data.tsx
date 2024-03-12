import { StaticImageData } from "next/image";

export type iConversation = {
  image: string | StaticImageData;
  sellerName: string;
  businessName: string;
  active: boolean;
  lastMessage: string;
  time: string;
  count: number;
};

export type iInboxData = {
  conversation: iConversation;
};

export type iMessage = {
  senderID: string;
  senderImage: string | StaticImageData;
  receiverID: string;
  date: string;
  time: string;
  content: string;
};

export type iConversationListData = {
  conversations: iConversation[];
  setCurrentMessage: (val: number) => void;
  currentMessage: number;
  seller: boolean;
}


export type iMessagesProps = {
  seller: boolean;
}