import React, { useState, useEffect } from "react";

import BarChart from "./BarChart";
import categoryOptions from "../data/categoryOptions";
import periodOptions from "../data/periodOptions";

const BarChartSelector = ({ title }) => {
  const [selectedPeriod, setSelectedPeriod] = useState("weekday");
  const [selectedCategory, setSelectedCategory] = useState("Acompañamiento");
  const [chartData, setChartData] = useState({ labels: [], datasets: {} });

  useEffect(() => {
    const getData = async () => {
      const url = `https://restaurant-data-visualizer.herokuapp.com/sales_per_category/${selectedPeriod}/${selectedCategory}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setChartData(data);
    };
    getData();
  }, [selectedPeriod, selectedCategory]);

  const handleChangePeriod = (event) => {
    setSelectedPeriod(event.target.value);
  };

  const handleChangeCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <>
      <div className="selectContainer">
        <select value={selectedPeriod} onChange={handleChangePeriod}>
          {periodOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <select value={selectedCategory} onChange={handleChangeCategory}>
          {categoryOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <BarChart
        chartData={chartData}
        category={selectedCategory}
        title={title}
      />
    </>
  );
};

export default BarChartSelector;
