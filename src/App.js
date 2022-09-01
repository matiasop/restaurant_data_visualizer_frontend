import "./App.css";
import StackedBarChartSelector from "./components/StackedBarChartSelector";
import BarChartSelector from "./components/BarChartSelector";
import DoughnutChartSelector from "./components/DoughnutChartSelector";
import groupOptions from "./data/groupOptions";
import periodOptions from "./data/periodOptions";

const App = () => {
  return (
    <div>
      <StackedBarChartSelector
        options={periodOptions}
        title={"Ventas Totales por Período"}
      />
      <StackedBarChartSelector
        options={groupOptions}
        title={"Ventas Totales por Empleado o Zona"}
      />
      <BarChartSelector title={"Ventas por Categoría"} />
      <DoughnutChartSelector
        options={periodOptions.concat(groupOptions)}
        title={"Participación de Ventas"}
      />
    </div>
  );
};

export default App;
