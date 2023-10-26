import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip } from "chart.js";
import useSWR from "swr";

Chart.register(ArcElement, [Tooltip]);

const GraphContainer = styled.div`
  display: flex;
  flex-direction: row;
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
  font-size: 20px;
  font-weight: bold;

  color: #333;

  div:nth-child(2) {
    font-size: 24px;
    margin-top: 8px;
    color: #ff6600;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
  width: 100%;
  gap: 0.3rem;
  background-color: #f0f0f0;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  padding: 2px;
  font-size: 13px;
`;

const ColorBox = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 10px;
`;

const ItemName = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Amount = styled.div`
  white-space: nowrap;
  margin-right: 5px;
`;

function DoughnutGraph() {
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
          "rgb(255, 180, 135)",
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
      plugins: {
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
      <ListContainer>
        {Object.keys(categoryTotals).map((categoryId, index) => (
          <ListItem key={index}>
            <ColorBox
              style={{
                backgroundColor: chartData.datasets[0].backgroundColor[index],
              }}
            ></ColorBox>
            <ItemName>{labels[index]}</ItemName>
            <Amount>{categoryTotals[categoryId]} €</Amount>
          </ListItem>
        ))}
      </ListContainer>
    </GraphContainer>
  );
}

export default DoughnutGraph;
