import { create } from "zustand";

type DashboardData = {
  dashboardIndex: number;
  goTo: (val: number) => void;

  viewingMessage: boolean;
  viewingBusiness: boolean;
};

export const useDashboardStore = create<DashboardData>((set) => ({
  dashboardIndex: 0,
  goTo: (val) => {
    set({ dashboardIndex: val });
  },
  viewingBusiness: false,
  viewingMessage: false,
}));
