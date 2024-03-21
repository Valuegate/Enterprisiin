import React, { useState } from "react";
import { Menu, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import DropdownButton from "../../DropdownButton/DropdownButton";

import Image from "next/image";
import MoneyOut from "@/public/assets/Money Out.svg";
import MoneyIn from "@/public/assets/Money In.svg";

import { MdMoreVert } from "react-icons/md";

import { convertDateWithSlashes } from "@/public/functions/dateFunctions";

interface iTransaction {
  category: string;
  name: string;
  transactionID: string;
  date: Date;
  amount: number;
  status: string;
}




const History = () => {
  const [currentSort, setCurrentSort] = useState<string>("All");
  const [currentFilter, setCurrentFilter] = useState<string>("All");

  const [selected, setSelected] = useState<number>(-1);
  const [opened, { open, close }] = useDisclosure(false);

  const transactions: iTransaction[] = [
    {
      category: "Money Top-up",
      name: "Aderibigbe Boluwatife",
      transactionID: "12345678AB",
      amount: 170000,
      status: "Successful",
      date: new Date(),
    },
    {
      category: "Money Top-up",
      name: "Aderibigbe Boluwatife",
      transactionID: "12345678AB",
      amount: -170000,
      status: "Pending",
      date: new Date(),
    },
    {
      category: "Money Spent",
      name: "Aderibigbe Boluwatife",
      transactionID: "12345678AB",
      amount: 170000,
      status: "Rejected",
      date: new Date(),
    },
    {
      category: "Money Top-up",
      name: "Aderibigbe Boluwatife",
      transactionID: "12345678AB",
      amount: 170000,
      status: "Successful",
      date: new Date(),
    },
    {
      category: "Money Top-up",
      name: "Aderibigbe Boluwatife",
      transactionID: "12345678AB",
      amount: -170000,
      status: "Pending",
      date: new Date(),
    },
    {
      category: "Money Spent",
      name: "Aderibigbe Boluwatife",
      transactionID: "12345678AB",
      amount: 170000,
      status: "Rejected",
      date: new Date(),
    },
    {
      category: "Money Top-up",
      name: "Aderibigbe Boluwatife",
      transactionID: "12345678AB",
      amount: 170000,
      status: "Successful",
      date: new Date(),
    },
    {
      category: "Money Top-up",
      name: "Aderibigbe Boluwatife",
      transactionID: "12345678AB",
      amount: -170000,
      status: "Pending",
      date: new Date(),
    },
    {
      category: "Money Spent",
      name: "Aderibigbe Boluwatife",
      transactionID: "12345678AB",
      amount: 170000,
      status: "Rejected",
      date: new Date(),
    },
  ];

  const viewTransaction = (val: number) => {
    setSelected(val);
    open();
  };

  return (
    <>
      <div
        className={`bg-white rounded border-contrast-10 border-[1.5px] w-full shadow-sm`}
      >
        <div className="h-[80px] md:h-[130px] md:flex-col flex w-full md:items-start items-center md:justify-around justify-between px-6 border-b-[1.5px] border-contrast-10">
          <h2 className="text-[24px] leading-[36px] font-bold text-contrast-100">
            History
          </h2>
          <div className="flex items-center gap-5">
            <DropdownButton
              menus={[
                {
                  name: "All",
                  onClick: () => {
                    setCurrentSort("All");
                  },
                },
                {
                  name: "Money Received",
                  onClick: () => {
                    setCurrentSort("Money Received");
                  },
                },
                {
                  name: "Money Withdrawn",
                  onClick: () => {
                    setCurrentSort("Money Withdrawn");
                  },
                },
              ]}
              title="Sort by:"
              value={currentSort}
            />
            <DropdownButton
              menus={[
                {
                  name: "All",
                  onClick: () => {
                    setCurrentFilter("All");
                  },
                },
                {
                  name: "Successful",
                  onClick: () => {
                    setCurrentFilter("Successful");
                  },
                },
                {
                  name: "Pending",
                  onClick: () => {
                    setCurrentFilter("Pending");
                  },
                },
                {
                  name: "Rejected",
                  onClick: () => {
                    setCurrentFilter("Rejected");
                  },
                },
              ]}
              title="Filter by:"
              value={currentFilter}
            />
          </div>
        </div>

        <div className="flex w-full px-6 h-[60px] items-center border-b-[1.5px] border-contrast-10 md:hidden">
          <h2 className="w-[15%] bold-3 text-contrast-80">Categories</h2>
          <h2 className="w-[20%] bold-3 text-contrast-80">Name</h2>
          <h2 className="w-[15%] bold-3 text-contrast-80">Transaction ID</h2>
          <h2 className="w-[20%] bold-3 text-contrast-80">Date</h2>
          <h2 className="w-[10%] bold-3 text-contrast-80">Amount</h2>
          <h2 className="w-[15%] bold-3 text-contrast-80">Status</h2>
          <h2 className="w-[5%] bold-3 text-contrast-80">Action</h2>
        </div>
        <div className="w-full flex flex-col md:hidden">
          {transactions.map((transaction, i) => {
            return (
              <div
                key={i}
                className={`flex w-full ${
                  i % 2 === 1 ? "bg-white" : "bg-input"
                } h-[65px] items-center px-6`}
              >
                <h2 className="w-[15%] med-3 text-contrast-70">
                  {transaction.category}
                </h2>
                <h2 className="w-[20%] med-3 text-contrast-70 line-clamp-1">
                  {transaction.name}
                </h2>
                <h2 className="w-[15%] med-3 text-contrast-70">
                  {transaction.transactionID}
                </h2>
                <h2 className="w-[20%] med-3 text-contrast-70">
                  {convertDateWithSlashes(transaction.date)}
                </h2>
                <h2
                  className={`w-[10%] med-3 ${
                    transaction.amount < 0 ? "text-error" : "text-green-100"
                  }`}
                >
                  {transaction.amount < 0 ? "-" : "+"}
                  {"₦"}
                  {Math.abs(transaction.amount).toLocaleString("en-US")}
                </h2>
                <h2 className={`w-[15%] med-3`}>
                  <div
                    className={`${
                      transaction.status === "Successful"
                        ? "bg-role-green-bg text-green-100"
                        : transaction.status === "Pending"
                        ? "bg-role-orange-bg text-role-orange"
                        : "bg-role-red-bg text-error"
                    } py-[3px] px-3 rounded-full w-fit`}
                  >
                    {transaction.status}
                  </div>
                </h2>
                <Menu position="bottom">
                  <h2 className="w-[5%] med-3 text-contrast-70 flex justify-end cursor-pointer">
                    <Menu.Target>
                      <MdMoreVert size={"24px"} />
                    </Menu.Target>
                    <Menu.Dropdown>
                      <Menu.Item
                        onClick={(e) => {
                          viewTransaction(i);
                        }}
                        className="cursor-pointer px-4 py-2 text-base leading-8 text-contrast-base hover:bg-blue-base hover:text-white hover:rounded"
                      >
                        View
                      </Menu.Item>
                      <Menu.Item className="cursor-pointer px-4 py-2 text-base leading-8 text-contrast-base hover:bg-blue-base hover:text-white hover:rounded">
                        Delete
                      </Menu.Item>
                    </Menu.Dropdown>
                  </h2>
                </Menu>
              </div>
            );
          })}
        </div>

        <div className="hidden md:flex flex-col gap-2 px-6 mt-3 mb-5">
          {transactions.map((transaction, i) => {
            return (
              <div
                key={i}
                className="w-full bg-input rounded flex justify-between items-center h-[80px] px-4 text-[14px] leading-[24px]"
              >
                <div className="flex gap-3 items-center">
                  <Image
                    src={transaction.amount < 0 ? MoneyOut : MoneyIn}
                    alt=""
                  />
                  <div className="flex flex-col justify-between ">
                    <h3 className="text-contrast-100 font-bold ">
                      {transaction.category}
                    </h3>
                    <p className="font-normal text-contrast-80">
                      {convertDateWithSlashes(transaction.date)}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-between items-end">
                  <h2
                    className={` ${
                      transaction.amount < 0 ? "text-error" : "text-green-100"
                    }`}
                  >
                    {transaction.amount < 0 ? "-" : "+"}
                    {"₦"}
                    {Math.abs(transaction.amount).toLocaleString("en-US")}
                  </h2>
                  <p
                    className={`${
                      transaction.status === "Successful"
                        ? "text-green-100"
                        : transaction.status === "Pending"
                        ? "text-role-orange"
                        : "text-error"
                    }`}
                  >
                    {transaction.status}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Modal opened={opened} centered onClose={close}>
        {transactions[selected] && (
          <div className="flex flex-col justify-start items-start gap-3">
            <h1 className="bold-1 text-contrast-100">History Details</h1>
            <div className="flex justify-between items-center w-full mt-6">
              <div className="flex items-center gap-3 med-3">
                <Image
                  src={transactions[selected].amount < 0 ? MoneyOut : MoneyIn}
                  alt=""
                />
                {transactions[selected].category}
              </div>
              <p className="bold-3 text-contrast-100">
                {transactions[selected].amount < 0 ? "-" : "+"}
                {"₦"}
                {Math.abs(transactions[selected].amount).toLocaleString(
                  "en-US"
                )}
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-1 w-full text-[16px] leading-[32px]">
              <div className="flex w-full justify-between items-center">
                <p className=" text-contrast-base">Status</p>
                <p
                  className={`${
                    transactions[selected].status === "Successful"
                      ? "text-green-100"
                      : transactions[selected].status === "Pending"
                      ? "text-role-orange"
                      : "text-error"
                  }`}
                >
                  {transactions[selected].status.toUpperCase()}
                </p>
              </div>
              <div className="flex w-full justify-between items-center">
                <p className=" text-contrast-base">Recipient</p>
                <p className="text-contrast-70">
                  {transactions[selected].name.toUpperCase()}
                </p>
              </div>
              <div className="flex w-full justify-between items-center">
                <p className=" text-contrast-base">Recipient Account</p>
                <p className="text-contrast-70">0123456789</p>
              </div>
              <div className="flex w-full justify-between items-center">
                <p className=" text-contrast-base">Transaction ID</p>
                <p className="text-contrast-70">
                  {transactions[selected].transactionID.toUpperCase()}
                </p>
              </div>
              <div className="flex w-full justify-between items-center">
                <p className=" text-contrast-base">Date</p>
                <p className="text-contrast-70">
                  {convertDateWithSlashes(transactions[selected].date)}
                </p>
              </div>
            </div>
            <button className="w-full rounded bg-blue-base text-white my-6 py-3">
              Share
            </button>
          </div>
        )}
      </Modal>
    </>
  );
};

export default History;
