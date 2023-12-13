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
import useSWR from "swr";
import Loading from "../Loading";
import { calculateMonthlyExpenses } from "@/assets/utils/monthlyExpenseCalculator";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarChart() {
  const { data, error } = useSWR("/api/expenses");

  if (!data) {
    return <Loading />;
  }

  // Calculate monthly expenses using utility function
  const { monthNames, totalExpenses } = calculateMonthlyExpenses(data);

  // Configuration options for the bar chart
  const options = {
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
      title: {
        display: false,
        text: "Monthly Expense Summary",
      },
      tooltip: {
        callbacks: {
          title: function (tooltipItems) {
            // Display the month name for the tooltip title
            return tooltipItems[0].label;
          },
          label: function (context) {
            // Display the total expense for the corresponding month with the euro sign
            return `Total Expense: ${context.parsed.y.toFixed(2)} €`;
          },
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  const chartData = {
    labels: monthNames,
    datasets: [
      {
        label: "Monthly Summary",
        data: totalExpenses,
        backgroundColor: ["rgba(28, 145, 227, 0.2)"],
        borderColor: ["rgba(28, 145, 227)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <GraphContainer>
      <Bar style={{ height: "300px" }} options={options} data={chartData} />
    </GraphContainer>
  );
}

export default BarChart;
