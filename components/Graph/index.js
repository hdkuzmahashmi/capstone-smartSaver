import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import useSWR from "swr";

Chart.register(ArcElement);

const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  gap: 5vh;
`;

const TotalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 18px;
  color: #333;

  div:nth-child(2) {
    font-size: 24px;
    font-weight: bold;
    margin-top: 8px;
    color: #ff6600;
  }
`;

function Graph() {
  const { data, error } = useSWR("/api/expenses");

  if (!data) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  const labels = data.map((expense) => expense.categoryId[0].name);
  console.log("labels:", labels);

  const categoryTotals = data.reduce((acc, expense) => {
    const categoryId = expense.categoryId[0]._id;
    const amount = expense.amount;

    if (acc[categoryId]) {
      acc[categoryId] += amount;
    } else {
      acc[categoryId] = amount;
    }

    return acc;
  }, {});

  console.log("categoryTotals:", categoryTotals);
  console.log("Array of :", Object.values(categoryTotals));

  const categoryTotalValues = Object.values(categoryTotals);
  const totalAmount = categoryTotalValues.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  console.log(totalAmount);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: Object.values(categoryTotals),
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(224, 176, 255)",
          "rgb(75, 192, 192)",
          "rgb(247, 128, 63)",
          "rgb(51, 133, 255)",
          "rgb(255, 78, 80)",
          "rgb(140, 201, 82)",
          "rgb(204, 51, 255)",
          "rgb(128, 255, 195)",
        ],
        hoverOffset: 4,
        borderRadius: 8,
      },
    ],
  };

  const config = {
    type: "doughnut",
    data: chartData,
    options: {
      // cutout: 115,
      plugins: {
        // legend: {
        //   display: false,
        // },
        tooltip: {
          callbacks: {
            title: function (context) {
              return labels[context[0].dataIndex];
            },
            label: function (context) {
              const value = context.parsed;
              return `Amount: ${value} €`;
            },
          },
        },
      },
    },
  };

  return (
    <GraphContainer>
      <div style={{ position: "relative" }}>
        <Doughnut {...config}></Doughnut>
        <TotalContainer>
          <div>Total</div>
          <div>{totalAmount} €</div>
        </TotalContainer>
      </div>
      <div>List</div>
    </GraphContainer>
  );
}

export default Graph;
