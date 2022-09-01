import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import sampleData from "../sampleData";
import monthData from "../monthData";

const BarChart = ({ group }) => {
  const [labels, setLabels] = useState([]);
  const [subLabels, setSubLabels] = useState([]);
  const [colors, setColors] = useState([]);
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

  useEffect(() => {
    let data = {};
    if (group === "weekday") {
      data = sampleData;
    } else if (group === "month") {
      data = monthData;
    }
    const subKeys = Object.keys(data.datasets);
    setLabels(data.labels);
    setSubLabels(subKeys);
    const colors_aux = {};
    subKeys.forEach((key, index) => (colors_aux[key] = palette[index]));
    setColors(colors_aux);
  }, [group]);

  return (
    <Bar
      data={{
        labels: labels,
        datasets: subLabels.map((x) => ({
          label: x,
          data: sampleData.datasets[x],
          backgroundColor: colors[x],
        })),
      }}
      height={400}
      width={600}
      options={{
        // maintainAspectRatio: false,
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

export default BarChart;
