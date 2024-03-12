import React, { useState } from "react";
import DropdownButton from "../../DropdownButton/DropdownButton";

interface iTransaction {
  category: string;
  name: string;
  transactionID: string;
  date: Date;
  amount: number;
  status: string;
}

function convertDateWithSlashes(date: Date) {
  let isPM = date.getHours() > 11;
  let hours = date.getHours();
  let minutes = date.getMinutes();
  return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}; ${hours}:${minutes} ${isPM ? "PM" : "AM"}`;
}

const History = () => {
  const [currentSort, setCurrentSort] = useState<string>("All");
  const [currentFilter, setCurrentFilter] = useState<string>("All");

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

  return (
    <div
      className={`bg-white rounded border-contrast-10 border-[1.5px] w-full shadow-sm`}
    >
      <div className="h-[80px] flex w-full items-center justify-between px-6 border-b-[1.5px] border-contrast-10">
        <h2 className="text-[24px] leading-[36px] font-bold text-contrast-100">
          History
        </h2>
        <div className="flex items-center gap-5">
          <DropdownButton
            menus={[
              {
                name: "All",
                onClick: (e) => {
                  setCurrentSort("All");
                },
              },
              {
                name: "Money Received",
                onClick: (e) => {
                  setCurrentSort("Money Received");
                },
              },
              {
                name: "Money Withdrawn",
                onClick: (e) => {
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
                onClick: (e) => {
                  setCurrentFilter("All");
                },
              },
              {
                name: "Successful",
                onClick: (e) => {
                  setCurrentFilter("Successful");
                },
              },
              {
                name: "Pending",
                onClick: (e) => {
                  setCurrentFilter("Pending");
                },
              },
              {
                name: "Rejected",
                onClick: (e) => {
                  setCurrentFilter("Rejected");
                },
              },
            ]}
            title="Filter by:"
            value={currentFilter}
          />
        </div>
      </div>

      <div className="flex w-full px-6 h-[60px] items-center border-b-[1.5px] border-contrast-10">
        <h2 className="w-[15%] bold-3 text-contrast-80">Categories</h2>
        <h2 className="w-[20%] bold-3 text-contrast-80">Name</h2>
        <h2 className="w-[15%] bold-3 text-contrast-80">Transaction ID</h2>
        <h2 className="w-[20%] bold-3 text-contrast-80">Date</h2>
        <h2 className="w-[10%] bold-3 text-contrast-80">Amount</h2>
        <h2 className="w-[10%] bold-3 text-contrast-80">Status</h2>
        <h2 className="w-[10%] bold-3 text-contrast-80">Action</h2>
      </div>
      <div className="w-full flex flex-col">
        {transactions.map((transaction, i) => {
          return (
            <div
              key={i}
              className={`flex w-full ${i % 2 === 1 ? "bg-white" : "bg-input"} h-[65px] items-center px-6`}
            >
              <h2 className="w-[15%] med-3 text-contrast-70">{transaction.category}</h2>
              <h2 className="w-[20%] med-3 text-contrast-70 line-clamp-1">{transaction.name}</h2>
              <h2 className="w-[15%] med-3 text-contrast-70">
                {transaction.transactionID}
              </h2>
              <h2 className="w-[20%] med-3 text-contrast-70">{convertDateWithSlashes(transaction.date)}</h2>
              <h2 className="w-[10%] med-3 text-contrast-70">Amount</h2>
              <h2 className="w-[10%] med-3 text-contrast-70">Status</h2>
              <h2 className="w-[10%] med-3 text-contrast-70">Action</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default History;
