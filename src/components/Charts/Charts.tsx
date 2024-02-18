"use client";
import React, { FC } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
//import faker from 'faker';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["05", "06", "07", "08", "09", 10, 11, 12, 13, 14, 15, 16, 17];

const data = {
  labels,
  datasets: [
    {
      label: "Requests",
      data: [], //labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: "#55ACEE",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Click",
      data: [], //labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: "#FF5341",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Likes",
      data: [], // labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: "#FF8820",
      backgroundColor: "#FF8820",
    },
  ],
};

const Charts = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
    scales: {
      x: {
        display: true, // Hide x-axis labels
      },
      y: {
        display: true, // Hide y-axis labels
      },
    },
  };

  return (
    <div
      className={`bg-white rounded border-contrast-10 border-[1.5px] w-full shadow-sm`}
    >
      <div className="flex justify-between px-4 py-4 h-[74px] md:h-[98px] md:flex-col md:items-start md:justify-center items-center border-b-[1.5px] border-contrast-10">
        <h2 className="bold-1 md:text-[20px] md:leading-[30px] text-contrast-100">
          Statistics
        </h2>
        <div className="flex gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#55ACEE]"></span>
            <p className="text-contrast-base med-3 md:text-[14px] md:leading-[24px]">
              Requests
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF5341]"></span>
            <p className="text-contrast-base med-3 md:text-[14px] md:leading-[24px]">
              Clicks
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF8820]"></span>
            <p className="text-contrast-base med-3 md:text-[14px] md:leading-[24px]">
              Likes
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 py-6">
        <Line options={options} data={data} />
      </div>

      <p className="pb-4 med-3 md:text-[14px] md:leading-[24px] text-contrast-base text-center">
        Days
      </p>
    </div>
  );
};

export default Charts;
