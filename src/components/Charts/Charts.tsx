"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js/auto";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const labels = ["05", "06", "07", "08", "09", 10, 11, 12, 13, 14, 15, 16, 17];

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

const Charts = () => {
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

  return (
    <div className={`bg-white rounded border-contrast-10 border-[1.5px] w-full shadow-sm`}>
      {/* Your chart content here */}
      <div className="px-4 py-6">
        <Line options={options} data={data} />
      </div>

      <p className="pb-4 med-3 md:text-[14px] md:leading-[24px] text-contrast-base text-center">Days</p>
    </div>
  );
};

export default Charts;