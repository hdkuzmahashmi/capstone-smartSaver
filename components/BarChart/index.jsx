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

  function getMonthlyExpenseSumsWithMonthNames(data) {
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

    // Create an array to store objects with month names and corresponding sums
    const monthlySumsWithNames = Array.from({ length: 12 }, (_, monthIndex) => {
      return { month: monthNames[monthIndex], sum: 0 };
    });

    // Iterate through the data and accumulate the sums for each month
    data.forEach((item) => {
      const createdAtDate = new Date(item.createdAt);
      const monthIndex = createdAtDate.getMonth();
      monthlySumsWithNames[monthIndex].sum += item.amount;
    });

    // Separate the array into two arrays for keys (month names) and values (sums)
    const keysArray = monthlySumsWithNames.map((item) => item.month);
    const valuesArray = monthlySumsWithNames.map((item) => item.sum);

    return { keys: keysArray, values: valuesArray };
  }

  // Example usage
  const { keys, values } = getMonthlyExpenseSumsWithMonthNames(data);
  console.log("Keys (Month Names):", keys);
  console.log("Values (Sum of Expenses):", values);

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
