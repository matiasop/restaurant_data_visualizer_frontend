import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const StackedBarChart = ({ chartData }) => {
  const [labels, setLabels] = useState(chartData.labels);
  const [subLabels, setSubLabels] = useState([]);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const palette = [
      "#ea5545",
      "#f46a9b",
      "#ef9b20",
      "#edbf33",
      "#ede15b",
      "#bdcf32",
      "#87bc45",
      "#27aeef",
      "#b33dc6",
    ];

    const subKeys = Object.keys(chartData.datasets);
    setLabels(chartData.labels);
    setSubLabels(subKeys);
    const colors_aux = {};
    subKeys.forEach((key, index) => (colors_aux[key] = palette[index]));
    setColors(colors_aux);
  }, [chartData]);

  return (
    <Bar
      data={{
        labels: labels,
        datasets: subLabels.map((x) => ({
          label: x,
          data: chartData.datasets[x],
          backgroundColor: colors[x],
        })),
      }}
      height={400}
      width={600}
      options={{
        responsive: false,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      }}
    />
  );
};

export default StackedBarChart;
