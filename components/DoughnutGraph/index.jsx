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
  IconWrapper,
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

  const categoryTotalsArray = calculateCategoryTotals(data);

  const categoryNames = categoryTotalsArray.map((category) => category.name);
  const categoryValues = categoryTotalsArray.map((category) => category.total);
  const categoryColor = categoryTotalsArray.map((category) => category.color);

  const totalAmountOfExpenses = categoryValues
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0)
    .toFixed(2);

  const categoryTransparentColor = categoryColor.map((color) =>
    color.replace("rgb", "rgba").replace(")", ", 0.5)")
  );

  const chartData = {
    datasets: [
      {
        data: categoryValues,
        backgroundColor: categoryTransparentColor,
        hoverBackgroundColor: categoryColor,
        hoverOffset: 5,
        borderRadius: 6,
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
              <IconWrapper>
                <Icon icon={category.icon} />
              </IconWrapper>{" "}
              <ItemName>{category.name}</ItemName>
              <Amount>{category.total.toFixed(2)} €</Amount>
            </ListItem>
          ))}
      </ListContainer>
    </GraphContainer>
  );
}

export default DoughnutGraph;
