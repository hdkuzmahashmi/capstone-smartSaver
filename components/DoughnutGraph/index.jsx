import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip } from "chart.js";
import useSWR from "swr";
import { Icon } from "@iconify/react";

Chart.register(ArcElement, [Tooltip]);

const GraphContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  margin-top: 3rem;
  gap: 5vh;
  position: relative;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
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
  background-color: #f5f5f5;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  padding: 2px;
  font-size: 13px;
`;

const ColorBox = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
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

  // Extract and calculate category totals
  const categoryTotalsArray = Object.values(
    data.reduce((acc, expense) => {
      const { name, color, icon } = expense.categoryId[0];
      const amount = expense.amount;

      if (!acc[name]) {
        acc[name] = {
          name,
          total: 0,
          color,
          icon,
        };
      }

      acc[name].total += amount;
      return acc;
    }, {})
  );

  // Extract category names, total expenses, and colors for the chart
  const categoryNames = categoryTotalsArray.map((category) => category.name);
  const categoryValues = categoryTotalsArray.map((category) => category.total);
  const categoryColor = categoryTotalsArray.map((category) => category.color);

  // Calculate the total amount of all expenses
  const totalAmountOfExpenses = categoryValues.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  // Create chart data and configuration
  const chartData = {
    labels: categoryNames,
    datasets: [
      {
        data: categoryValues,
        backgroundColor: categoryColor,
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
              return categoryNames[context[0].dataIndex];
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

  // Render the Doughnut chart with total expenses and the category list
  return (
    <GraphContainer>
      <div style={{ position: "relative" }}>
        <Doughnut {...config}></Doughnut>
        <TotalContainer>
          <div>Total</div>
          <div>{totalAmountOfExpenses} €</div>
        </TotalContainer>
      </div>
      <ListContainer>
        {categoryTotalsArray.map((category, index) => (
          <ListItem key={index}>
            <ColorBox style={{ backgroundColor: category.color }}></ColorBox>
            <Icon icon={category.icon} width={15} />
            <ItemName>{category.name}</ItemName>
            <Amount>{category.total} €</Amount>
          </ListItem>
        ))}
      </ListContainer>
    </GraphContainer>
  );
}

export default DoughnutGraph;
