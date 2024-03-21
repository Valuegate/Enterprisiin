import { StaticImageData } from "next/image";

export interface iDesktopNavProps {
  isSeller: boolean;
  open: boolean;
  setIndex: (val: number) => void;
  setOpen: (val: boolean) => void;
  menus: iMenuItemContent[];
  index: number;
}

export interface iMobileDrawerProps {
    openedDrawer: boolean;
    closeDrawer: () => void;
    username: string;
    role: string | null;
    contact: string | null;
}

export interface iMenuItemContent {
  name: string;
  active: StaticImageData;
  inactive: StaticImageData;
  margin?: boolean | null;
}


