"use client";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import DropdownButton from "../../DropdownButton/DropdownButton";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["05", "06", "07", "08", "09", 10, 11, 12, 13, 14, 15, 16, 17];

const monthNames: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const data = {
  labels,
  datasets: [
    {
      label: "Requests",
      data: [],
      borderColor: "#55ACEE",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Click",
      data: [],
      borderColor: "#FF5341",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Likes",
      data: [],
      borderColor: "#FF8820",
      backgroundColor: "#FF8820",
    },
  ],
};

const Analysis = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: true,
      },
      y: {
        display: true,
      },
    },
  };

  const [currentMonth, setCurrentMonth] = useState<string>(monthNames[0]);

  return (
    <div
      className={`bg-white rounded border-contrast-10 border-[1.5px] w-full shadow-sm`}
    >
      <div className="h-[80px] md:h-[150px] flex md:flex-col w-full md:items-start items-center md:justify-center justify-between px-6 border-b-[1.5px] border-contrast-10">
        <h2 className="text-[24px] md:text-[20px] leading-[36px] md:leading-[30px] font-bold text-contrast-100">
          Analysis
        </h2>
        <div className="flex md:flex-col items-center md:items-start md:gap-3 md:mt-2 gap-7 md:w-full">
          <div className="flex gap-3 items-center">
            <div className="bg-[#00A707] w-[12px] h-[12px] rounded-full" />
            <p className="text-contrast-base med-3 md:text-[14px]">Top-ups</p>
            <div className="bg-[#FF8820] w-[12px] h-[12px] rounded-full" />
            <p className="text-contrast-base med-3 md:text-[14px]">Money Out</p>
          </div>
          <DropdownButton
            menus={[
              {
                name: "January",
                onClick: () => {
                  setCurrentMonth("January");
                },
              },
              {
                name: "February",
                onClick: () => {
                  setCurrentMonth("February");
                },
              },
              {
                name: "March",
                onClick: () => {
                  setCurrentMonth("March");
                },
              },
              {
                name: "April",
                onClick: () => {
                  setCurrentMonth("April");
                },
              },
              {
                name: "May",
                onClick: () => {
                  setCurrentMonth("May");
                },
              },
              {
                name: "June",
                onClick: () => {
                  setCurrentMonth("June");
                },
              },
              {
                name: "July",
                onClick: () => {
                  setCurrentMonth("July");
                },
              },
              {
                name: "August",
                onClick: () => {
                  setCurrentMonth("August");
                },
              },
              {
                name: "September",
                onClick: () => {
                  setCurrentMonth("September");
                },
              },
              {
                name: "October",
                onClick: () => {
                  setCurrentMonth("October");
                },
              },
              {
                name: "November",
                onClick: () => {
                  setCurrentMonth("November");
                },
              },
              {
                name: "December",
                onClick: () => {
                  setCurrentMonth("December");
                },
              },
            ]}
            title="Filter:"
            value={currentMonth}
          />
        </div>
      </div>

      <div className="px-4 py-6">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default Analysis;
