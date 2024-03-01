import { StaticImageData } from "next/image";
import { MouseEventHandler } from "react";

export type iStoreData = {
  image: string | StaticImageData;
  name: string;
  description: string;
  interest: string;
  amount: number;
  location: string;
  liked: boolean;
  storeStatus: string;
  status: string;
};

export const ACTIVE = "Active",
  ARCHIVED = "Archived";
  // REJECTED = "Rejected";

export type iViewStore = {
  store: iStoreData;
  onExit: MouseEventHandler;
};

export type iStoreCardData = {
  store: iStoreData;
  onClick: MouseEventHandler;
};
