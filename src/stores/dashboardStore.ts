import { create } from "zustand";

type DashboardIndex = {
  index: number;
  goTo: (val: number) => void;
};

export const useDashboardIndex = create<DashboardIndex>((set) => ({
  index: 0,
  goTo: (val) => {
    set({ index: val });
  },
}));
