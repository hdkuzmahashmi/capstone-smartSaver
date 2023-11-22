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

  if (error) {
    return (
      <div>
        {
          "Sorry, we couldn't load your expense data. Please check your internet connection and try again"
        }
      </div>
    );
  }
  // Calculate monthly expenses using utility function
  const { monthNames, totalExpenses } = calculateMonthlyExpenses(data);

  // Configuration options for the bar chart
  const options = {
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
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
            return `Total Expense: ${context.parsed.y} €`;
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
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(120, 255, 120, 0.2)",
          "rgba(255, 0, 255, 0.2)",
          "rgba(0, 255, 255, 0.2)",
          "rgba(255, 128, 0, 0.2)",
          "rgba(0, 255, 128, 0.2)",
          "rgba(128, 0, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(120, 255, 120, 1)",
          "rgba(255, 0, 255, 1)",
          "rgba(0, 255, 255, 1)",
          "rgba(255, 128, 0, 1)",
          "rgba(0, 255, 128, 1)",
          "rgba(128, 0, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <GraphContainer>
      <Bar style={{ height: "400px" }} options={options} data={chartData} />
    </GraphContainer>
  );
}

export default BarChart;
