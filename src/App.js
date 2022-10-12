import './App.css';
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 10],
  ["Eat", 1],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 8],
];

export const options = {
  title: "My Daily Activities",
};


function App() {
  return (
    <div className="App">
      <h1>Круговая диаграмма</h1>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width="100%"
        height="400px"
        legendToggle
      />

    </div>
  );
}

export default App;
