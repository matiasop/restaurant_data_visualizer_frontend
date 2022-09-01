import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

import palette from "../data/palette";
import chartSettings from "../data/chartSettings";

const DoughnutChart = ({ chartData, title }) => {
  return (
    <Doughnut
      data={{
        labels: chartData.labels,
        datasets: [
          {
            label: "My First Dataset",
            data: chartData.datasets,
            backgroundColor: palette,
            hoverOffset: 4,
          },
        ],
      }}
      height={chartSettings.height}
      width={chartSettings.width}
      options={{
        responsive: false,
        plugins: {
          legend: {
            display: true,
          },
          title: {
            display: true,
            text: title,
            align: "center",
          },
        },
      }}
    />
  );
};

export default DoughnutChart;
