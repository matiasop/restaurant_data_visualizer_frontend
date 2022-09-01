import React, { useState, useEffect } from "react";

import StackedBarChart from "./StackedBarChart";

const StackedBarChartSelector = ({ options, title }) => {
  const [selectedValue, setSelectedValue] = useState(options[0].value);
  const [chartData, setChartData] = useState({ labels: [], datasets: {} });

  useEffect(() => {
    const getData = async () => {
      const url = `https://restaurant-data-visualizer.herokuapp.com/total_sales/${selectedValue}`;
      const response = await fetch(url);
      const data = await response.json();
      setChartData(data);
    };
    getData();
  }, [selectedValue]);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <div className="selectContainer">
        <select value={selectedValue} onChange={handleChange}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <StackedBarChart chartData={chartData} title={title} />
    </>
  );
};

export default StackedBarChartSelector;
