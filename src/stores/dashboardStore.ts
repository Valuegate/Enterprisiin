import { create } from "zustand";

type DashboardIndex = {
  index: number;
  goTo: (val: number) => void;
};

export const useDashboardIndex = create<DashboardIndex>((set) => ({
  index: 2,
  goTo: (val) => {
    set({ index: val });
  },
}));

type MessageDetails = {
  viewingMessage: boolean;
};

type MobileNavVisibility = {
  shouldHide: () => boolean;
}

export const useMessageStore = create<MessageDetails>((set) => ({
  viewingMessage: false,
}));

