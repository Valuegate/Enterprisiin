"use client";
import { AddIcon, NotificationIcon, SearchIcon } from "@/public/icons";

import Image from "next/image";
import React from "react";
import { ReactNode, useState, useEffect } from "react";
import ProfileDropdown from "@/public/components/ProfileDropdown/ProfileDropdown";
import Logo from "@/public/components/Logo/Logo";

import SellerOverview from "@/public/components/Dashboard/Seller/SellerOverview";
import BuyerOverview from "@/public/components/Dashboard/Buyer/Overview/BuyerOverview";

import { useDisclosure } from "@mantine/hooks";

import { FaBarsStaggered } from "react-icons/fa6";

import Store from "@/public/components/Dashboard/Seller/Store/StorePage";
import Settings from "@/public/components/Dashboard/Settings";
import Messages from "@/public/components/Dashboard/Message/Messages";
import Wallet from "@/public/components/Dashboard/Wallet/Wallet";
import Consult from "@/public/components/Dashboard/Seller/Consult/Consult";
import HelpAndSupport from "@/public/components/Dashboard/HelpAndSupport";
import Marketplace from "@/public/components/Dashboard/Buyer/Marketplace/Marketplace";
import SellerMessages from "@/public/components/Dashboard/Seller/SellerMessage/SellerMessages";
import { useDashboardIndex, useMessageStore } from "@/public/stores/dashboardStore";
import { useUserStore } from "@/public/stores/userStore";

import DashboardActive from "@/public/assets/icons/Dashboard Active.svg";
import DashboardInactive from "@/public/assets/icons/Dashboard Inactive.svg";
import ShopActive from "@/public/assets/icons/Shop Active.svg";
import ShopInactive from "@/public/assets/icons/Shop Inactive.svg";
import MessagesActive from "@/public/assets/icons/Messages Active.svg";
import MessagesInactive from "@/public/assets/icons/Messages Inactive.svg";
import WalletActive from "@/public/assets/icons/Wallet Active.svg";
import WalletInactive from "@/public/assets/icons/Wallet Inactive.svg";
import SettingsActive from "@/public/assets/icons/Settings Active.svg";
import SettingsInactive from "@/public/assets/icons/Settings Inactive.svg";
import HelpActive from "@/public/assets/icons/Help Active.svg";
import HelpInactive from "@/public/assets/icons/Help Inactive.svg";
import ConsultActive from "@/public/assets/icons/Consult Active.svg";
import ConsultInactive from "@/public/assets/icons/Consult Inactive.svg";
import Logout from "@/public/assets/icons/Logout Inactive.svg";

import { convertDate } from "@/public/functions/dateFunctions";

import { iMenuItemContent } from "@/public/components/Dashboard/types";
import DesktopNav from "@/public/components/Dashboard/Layout/DesktopNav";
import MobileDrawer from "@/public/components/Dashboard/Layout/MobileDrawer";




const DashboardLayout = () => {
  const index = useDashboardIndex((state) => state.index);
  const setIndex = useDashboardIndex((state) => state.goTo);
  const isSeller = useUserStore((state) => state.type) === "Seller";
  const username = useUserStore((state) => state.fullName);
  const role = useUserStore((state) => state.role);
  const contact = useUserStore((state) => state.contact);



  // MOBILE NAV BAR CONDITIONS
  const viewingMessage = useMessageStore((state) => state.viewingMessage);





  const [children, setChildren] = useState<ReactNode[]>([]);
  const [menus, setMenus] = useState<iMenuItemContent[]>([]);
  const [open, setOpen] = useState(true);

  const [openedDrawer, { open: openDrawer, close: closeDrawer }] =
    useDisclosure(false);

  useEffect(() => {
    if (isSeller) {
      setChildren([
        <SellerOverview key={"seller-overview"} />,
        <Store key={"store"} />,
        <Messages key={"SellerMessages"} seller={true} />,
        <Wallet key={"Wallet"} />,
        <Consult key={"Consult"} />,
        <Settings key={"Settings"} />,
        <HelpAndSupport key={"Help & Support"} />,
      ]);
      setMenus([
        {
          name: "Overview",
          active: DashboardActive,
          inactive: DashboardInactive,
        },
        { name: "Store", active: ShopActive, inactive: ShopInactive },
        {
          name: "Messages",
          active: MessagesActive,
          inactive: MessagesInactive,
        },
        { name: "Wallet", active: WalletActive, inactive: WalletInactive },
        { name: "Consult", active: ConsultActive, inactive: ConsultInactive },
        {
          name: "Settings",
          active: SettingsActive,
          inactive: SettingsInactive,
          margin: true,
        },
        { name: "Help & Support", active: HelpActive, inactive: HelpInactive },
        { name: "Logout", active: Logout, inactive: Logout },
      ]);
    } else {
      setChildren([
        <BuyerOverview key={"buyer-overview"} />,
        <Marketplace key={"market-place"} />,
        <Messages key={"Messages"} seller={false} />,
        <Wallet key={"Wallet"} />,
        <Settings key={"Settings"} />,
        <HelpAndSupport key={"Help & Support"} />,
      ]);
      setMenus([
        {
          name: "Overview",
          active: DashboardActive,
          inactive: DashboardInactive,
        },
        { name: "Marketplace", active: ShopActive, inactive: ShopInactive },
        {
          name: "Messages",
          active: MessagesActive,
          inactive: MessagesInactive,
        },
        { name: "Wallet", active: WalletActive, inactive: WalletInactive },
        {
          name: "Settings",
          active: SettingsActive,
          inactive: SettingsInactive,
          margin: true,
        },
        { name: "Help & Support", active: HelpActive, inactive: HelpInactive },
        { name: "Logout", active: Logout, inactive: Logout },
      ]);
    }
  }, []);

  return (
    <div className="flex bg-background h-[100vh] md:h-full overflow-hidden">
      <MobileDrawer
        closeDrawer={closeDrawer}
        contact={contact}
        openedDrawer={openedDrawer}
        role={role}
        username={username}
      />

      <DesktopNav
        index={index}
        isSeller={isSeller}
        menus={menus}
        open={open}
        setIndex={setIndex}
        setOpen={setOpen}
      />

      <div className={`hidden ${viewingMessage && "md:hidden"} md:flex h-[8vh] bg-background justify-between items-center w-full fixed md:px-5 z-10 top-0`}>
        <Logo />
        <div onClick={openDrawer}>
          <FaBarsStaggered size={"24px"} />
        </div>
      </div>
      
      <div className="w-full">
        <nav className="flex justify-between items-center px-[40px] md:hidden h-[10vh] border-b-[1px] border-contrast-10">
          <div className="">
            <h1 className="text-2xl font-bold pb-1">
              Welcome Back, {username}! 👋
            </h1>
            <p className="med-3 text-contrast-40">{convertDate(new Date())}</p>
          </div>

          <div className="flex gap-4 items-center">
            <div className="relative flex items-center">
              <span className="absolute left-4">
                <SearchIcon />
              </span>
              <input
                type="text"
                placeholder="Search..."
                className="placeholder-italic search mt-1 py-2 pr-4 pl-10  w-[268px] h-[40px] border-none focus:ring-none focus:border-none bg-input placeholder:text-contrast-30 pl:text-[16px] pl:leading-[24px] md:placeholder:text-[14px] md:placeholder:leading-[22.4px] rounded "
              />
            </div>
            <div className="">
              <NotificationIcon />
            </div>

            <div className="custom-separator" />

            <ProfileDropdown />
          </div>
        </nav>

        <div>{children[index]}</div>
        <div className="hidden md:flex justify-around fixed w-[56vw] items-center py-2 h-14 rounded-xl shadow-gray shadow-lg bg-blue-90 bottom-[5vh] right-[22vw] left-[22vw]">
          <div onClick={() => setIndex(0)}>
            {menus[0] !== undefined && (
              <Image
                src={index === 0 ? menus[0].active : menus[0].inactive}
                alt="menu-icon"
              />
            )}
          </div>
          <div
            onClick={() => {
              window.location.assign("/dashboard/create-new-listing");
            }}
          >
            <AddIcon color="#FFFFFF" />
          </div>
          <div onClick={() => setIndex(1)}>
            {menus[1] !== undefined && (
              <Image
                src={index === 1 ? menus[0].active : menus[0].inactive}
                alt="menu-icon"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
