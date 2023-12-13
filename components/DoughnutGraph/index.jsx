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
import { calculateCategoryTotals } from "@/assets/utils/categoryTotalsCalculator";

Chart.register(ArcElement, [Tooltip]);

function DoughnutGraph() {
  const { data, error } = useSWR("/api/expenses");

  if (!data) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Use utility function to extract and calculate totals for each expense category
  const categoryTotalsArray = calculateCategoryTotals(data);

  // Extract category names, total expenses, and colors for the chart
  const categoryNames = categoryTotalsArray.map((category) => category.name);
  const categoryValues = categoryTotalsArray.map((category) => category.total);
  const categoryColor = categoryTotalsArray.map((category) => category.color);

  // Calculate the total amount of all expenses
  const totalAmountOfExpenses = categoryValues
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0)
    .toFixed(2);

  // Create chart data and configuration
  const chartData = {
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
        title: {
          display: false,
          text: "Category Expense Summary",
        },

        tooltip: {
          callbacks: {
            title: function (context) {
              return categoryNames[context[0].dataIndex];
            },
            label: function (context) {
              const value = context.parsed;
              return `Amount: ${value.toFixed(2)} €`;
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
        <Link href="/details">
          <TotalContainer>{totalAmountOfExpenses} €</TotalContainer>
        </Link>
      </ExpenseOverviewContainer>
      <ListContainer>
        {categoryTotalsArray
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((category) => (
            <ListItem key={category.name}>
              <ColorBox style={{ backgroundColor: category.color }}></ColorBox>
              <Icon icon={category.icon} width={15} />
              <ItemName>{category.name}</ItemName>
              <Amount>{category.total.toFixed(2)} €</Amount>
            </ListItem>
          ))}
      </ListContainer>
    </GraphContainer>
  );
}

export default DoughnutGraph;
