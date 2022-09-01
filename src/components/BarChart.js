import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const BarChart = ({ chartData, category, title }) => {
  const [labels, setLabels] = useState(chartData.labels);
  const [data, setData] = useState([]);
  const color = "#ea5545";

  useEffect(() => {
    setLabels(chartData.labels);
    setData(chartData.datasets[category]);
  }, [chartData, category]);

  return (
    <Bar
      data={{
        labels: labels,
        datasets: [
          {
            label: category,
            data: data,
            backgroundColor: color,
          },
        ],
      }}
      height={400}
      width={600}
      options={{
        responsive: false,
        plugins: {
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

export default BarChart;
