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

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarChart() {
  const { data, error } = useSWR("/api/expenses");

  if (!data) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log("data:", data);
  const createdAt = data[0].createdAt;

  console.log("date:", createdAt);
  const createdAtValues = data.map((item) => item.createdAt);
  console.log("data array:", createdAtValues);

  ////////////////////

  // Assuming data is your array of expense objects

  function getMonthlyExpenseSumsByMonth(data) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Initialize an array to store objects with month names and corresponding sums
    const monthlySumsByMonth = Array.from({ length: 12 }, (_, monthIndex) => {
      return { month: monthNames[monthIndex], totalExpense: 0 };
    });

    // Iterate through the data and accumulate the sums for each month
    data.forEach((expense) => {
      const createdAtDate = new Date(expense.createdAt);
      const monthIndex = createdAtDate.getMonth();
      monthlySumsByMonth[monthIndex].totalExpense += expense.amount;
    });

    // Separate the array into two arrays for keys (month names) and values (sums)
    const monthNamesArray = monthlySumsByMonth.map((item) => item.month);
    const totalExpensesArray = monthlySumsByMonth.map(
      (item) => item.totalExpense
    );

    return { monthNames: monthNamesArray, totalExpenses: totalExpensesArray };
  }

  // Example usage

  console.log(
    "totalexpenses in every months:",
    getMonthlyExpenseSumsByMonth(data)
  );
  const { monthNames, totalExpenses } = getMonthlyExpenseSumsByMonth(data);
  console.log("Month Names:", monthNames);
  console.log("Total Expenses:", totalExpenses);

  /////////////


  const options = {
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Report",
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  const chartData = {
    labels: monthNames,
    datasets: [
      {
        label: "Faght Test",
        data: [78, 80, 66, 56, 161, 173, 166, 175, 150, 93, 131, 111],
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
    <>
      <GraphContainer>
        <Bar style={{ height: '300px' }} options={options} data={chartData} />
      </GraphContainer>
    </>
  );
}

export default BarChart;
