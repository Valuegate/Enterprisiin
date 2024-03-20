import { create } from "zustand";

type GlobalStore = {
  userType: string;
  setUserType: (val: string) => void;
};

export const useGlobalStore = create<GlobalStore>((set) => ({
  userType: "Buyer",
  setUserType: (val: string) => {
    set({ userType: val });
  },
}));
