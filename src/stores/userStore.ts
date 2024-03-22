import { StaticImageData } from "next/image";
import { create } from "zustand";

import PI from "@/public/assets/Ellipse 1.png";

export type User = {
  fullName: string;
  role: string | null;
  contact: string | null;
  image: string | StaticImageData;
  type: string;
  verified: boolean;
};

export const useUserStore = create<User>((set) => ({
  fullName: "Adeniji Promise",
  role: "CEO (Valuegate)",
  contact: "+2348012345678",
  type: "Buyer",
  image: PI,
  verified: true,
}));
