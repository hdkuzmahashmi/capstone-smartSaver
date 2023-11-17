import { Bar } from "react-chartjs-2";

import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { GraphContainer } from "@/design-system/StyledDoughnutGraph";

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart() {
  const options = {
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Faght Test",
        data: [10, 30, 50, 20, 40, 10, 50],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <GraphContainer>
        <Bar options={options} data={chartData} />
      </GraphContainer>
    </>
  );
}

export default BarChart;
