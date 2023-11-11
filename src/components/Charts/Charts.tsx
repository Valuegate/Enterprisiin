"use client";
import React from "react";
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
import faker from 'faker';
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

export const data = {
  labels,
  datasets: [
    {
      label: "Requests",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: "#55ACEE",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Click",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: "#FF5341",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Likes",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: "#FF8820",
      backgroundColor: "#FF8820",
    },
  ],
};

export function Charts() {
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
    <div className="chart-width bg-white rounded">
      <div className="flex justify-between px-4 py-4">
        <h2 className="text-xl text-black font-bold">Statistics</h2>
        <div className="flex gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-light-blue"></span>
            <p className="text-base text-gray">Requests</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange"></span>
            <p className="text-base text-gray">Clicks</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-light-yellow"></span>
            <p className="text-base text-gray">Likes</p>
          </div>
        </div>
      </div>

      <hr className="mb-4 border-none bg-light-black-1 h-[1px]" />

      <div className="px-4 pb-4">
        <Line options={options} data={data} />
      </div>

      <p className="pb-4 text-base text-gray text-center">Days</p>
    </div>

    
  );
}
