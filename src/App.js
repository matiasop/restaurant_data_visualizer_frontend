import "./App.css";
import StackedBarChartSelector from "./components/StackedBarChartSelector";
import BarChartSelector from "./components/BarChartSelector";
import DoughnutChartSelector from "./components/DoughnutChartSelector";
import groupOptions from "./data/groupOptions";
import periodOptions from "./data/periodOptions";

const App = () => {
  return (
    <>
      <h1 className="title">Visualizador de Datos de Restaurant</h1>
      <hr className="horizontal-line"></hr>
      <div className="charts-container">
        <StackedBarChartSelector
          options={periodOptions}
          title={"Ventas Totales por Período"}
        />
        <DoughnutChartSelector
          options={periodOptions.concat(groupOptions)}
          title={"Participación de Ventas"}
        />
        <StackedBarChartSelector
          options={groupOptions}
          title={"Ventas Totales por Empleado o Zona"}
        />
        <BarChartSelector title={"Ventas por Categoría"} />
      </div>
    </>
  );
};

export default App;
