import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import palette from "../data/palette";
import { Chart as ChartJS } from "chart.js/auto";

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
      height={400}
      width={600}
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
