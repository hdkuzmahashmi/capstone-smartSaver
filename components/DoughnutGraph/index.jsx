import Link from "next/link";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip } from "chart.js";
import useSWR from "swr";
import { Icon } from "@iconify/react";
import Loading from "../Loading";
import {
  GraphContainer,
  TotalContainer,
  ExpenseOverviewContainer,
  ListContainer,
  ListItem,
  ColorBox,
  ItemName,
  Amount,
} from "@/design-system/StyledDoughnutGraph";

Chart.register(ArcElement, [Tooltip]);

function DoughnutGraph() {
  const { data, error } = useSWR("/api/expenses");

  if (!data) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
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
      <ExpenseOverviewContainer>
        <Doughnut {...config}></Doughnut>
        <Link href="/">
          <TotalContainer>{totalAmountOfExpenses} €</TotalContainer>
        </Link>
      </ExpenseOverviewContainer>
      <ListContainer>
        {categoryTotalsArray.map((category) => (
          <ListItem key={category.name}>
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
