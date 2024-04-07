import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import axios from "axios";

export default function THDBarGraph({ title, data }) {
  const renderHeading = () => {
    return `Sales During ${title}`;
  };

  const chartData = {
    labels: data.map((d) => d._id),
    datasets: [
      {
        label: "Range",
        data: data.map((item) => item.count),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div>
      <div className="heading">
        {/* <h2>{renderHeading()}</h2> */}
      </div>
      <div className="bar-chart" style={{ width: 700 }}>
        <Bar data={chartData} />
      </div>
    </div>
  );
}
