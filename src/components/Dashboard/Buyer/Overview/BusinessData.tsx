import { StaticImageData } from "next/image";
import { MouseEventHandler } from "react";

export type iBusinessData = {
  image: string | StaticImageData;
  name: string;
  description: string;
  interest: string;
  amount: number;
  location: string;
  liked: boolean;
  businessStatus: string;
  status: string;
};

export const ACCEPTED = "Accepted",
  PROPOSED = "Proposed",
  REJECTED = "Rejected";

export type iViewBusiness = {
  business: iBusinessData;
  onExit: MouseEventHandler;
};

export type iBusinessCardData = {
  business: iBusinessData;
  onClick: MouseEventHandler;
};
