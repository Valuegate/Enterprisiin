"use client";
import AccountSettings from "@/public/components/AccountSettings/AccountSettings";
import BankSettings from "@/public/components/BankSettings/BankSettings";
import NotificationSettings from "@/public/components/NotificationSettings/NotificationSettings";
import PasswordSettings from "@/public/components/PasswordSettings/PasswordSettings";
import * as Tabs from "@radix-ui/react-tabs";

const Settings = () => {
  return (
    <div className="px-6 pt-4 overflow-y-scroll h-[85vh] pb-8">
      <h2 className="text-3xl font-bold text-black pb-4">Settings</h2>
      <div className="w-full bg-white rounded">
        <h3 className="text-2xl font-bold text-black py-4 pl-4">Settings</h3>
        <hr className="border-none bg-light-black-1 h-[1px]" />

        <Tabs.Root className=" " defaultValue="tab1">
          <Tabs.List
            className="shrink-0 flex gap-8 border-b-[1px] border-light-black-1"
            aria-label="Manage your account"
          >
            <Tabs.Trigger
              className="bg-white px-4 h-[45px] flex items-center text-base font-semibold select-none first:rounded-tl-md  last:rounded-tr-md data-[state=active]:text-blue-base data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
              value="tab1"
            >
              Account
            </Tabs.Trigger>
            <Tabs.Trigger
              className="bg-white px-4 h-[45px] flex items-center text-base font-semibold select-none first:rounded-tl-md  last:rounded-tr-md data-[state=active]:text-blue-base data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
              value="tab2"
            >
              Password
            </Tabs.Trigger>
            <Tabs.Trigger
              className="bg-white px-4 h-[45px] flex items-center text-base font-semibold select-none first:rounded-tl-md  last:rounded-tr-md data-[state=active]:text-blue-base data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
              value="tab3"
            >
              Bank
            </Tabs.Trigger>
            <Tabs.Trigger
              className="bg-white px-4 h-[45px] flex items-center text-base font-semibold select-none first:rounded-tl-md  last:rounded-tr-md data-[state=active]:text-blue-base data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
              value="tab4"
            >
              Notification
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content className="grow pt-8 bg-white rounded" value="tab1">
            <AccountSettings />
          </Tabs.Content>
          <Tabs.Content className="grow pt-8 bg-white rounded" value="tab2">
            <PasswordSettings />
          </Tabs.Content>
          <Tabs.Content className="grow pt-8 bg-white rounded" value="tab3">
            <BankSettings />
          </Tabs.Content>
          <Tabs.Content
            className="grow pt-[30px] bg-white rounded"
            value="tab4"
          >
            <NotificationSettings />
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  );
};

export default Settings;
