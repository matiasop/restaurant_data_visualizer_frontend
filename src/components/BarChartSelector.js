import React, { useState, useEffect } from "react";

import BarChart from "./BarChart";

const period_options = [
  {
    label: "Semanal",
    value: "weekday",
  },
  {
    label: "Mensual",
    value: "month",
  },
];

// const group_options = [
//   {
//     label: "Mesero",
//     value: "waiter",
//   },
//   {
//     label: "Zona",
//     value: "zone",
//   },
//   {
//     label: "Cajero",
//     value: "cashier",
//   },
// ];

const category_options = [
  {
    label: "Acompañamiento",
    value: "Acompañamiento",
  },
  {
    label: "Bebidas",
    value: "Bebidas",
  },
  {
    label: "Plato Principal",
    value: "Plato Principal",
  },
  {
    label: "Tragos",
    value: "Tragos",
  },
];

const BarChartSelector = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("weekday");
  const [selectedCategory, setSelectedCategory] = useState("Acompañamiento");
  const [chartData, setChartData] = useState({ labels: [], datasets: {} });

  useEffect(() => {
    const getData = async () => {
      const url = `https://restaurant-data-visualizer.herokuapp.com/sales_per_category/${selectedPeriod}/${selectedCategory}`;
      const response = await fetch(url);
      const data = await response.json();
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
          {period_options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <select value={selectedCategory} onChange={handleChangeCategory}>
          {category_options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <BarChart chartData={chartData} category={selectedCategory} />
    </>
  );
};

export default BarChartSelector;
