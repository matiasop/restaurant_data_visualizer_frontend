import React, { useState } from "react";

import BarChart from "./BarChart";

const options = [
  {
    label: "Semanal",
    value: "weekday",
  },
  {
    label: "Mensual",
    value: "month",
  },
];

const ChartSelector = () => {
  const [selectedValue, setSelectedValue] = useState("weekday");

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
      <BarChart group={selectedValue} />
    </>
  );
};

export default ChartSelector;
