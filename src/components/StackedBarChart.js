import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

import palette from "../data/palette";
import chartSettings from "../data/chartSettings";

const StackedBarChart = ({ chartData, title }) => {
  const [labels, setLabels] = useState(chartData.labels);
  const [subLabels, setSubLabels] = useState([]);
  const [colors, setColors] = useState([]);

  useEffect(() => {
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
      height={chartSettings.height}
      width={chartSettings.width}
      options={{
        responsive: false,
        plugins: {
          title: {
            display: true,
            text: title,
            align: "center",
          },
        },
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
