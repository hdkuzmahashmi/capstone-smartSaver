import useSWR from "swr";
import Loading from "../Loading";
import { StyledList } from "@/design-system/StyledList";
import { StyledCard } from "@/design-system/StyledCard";
import { StyledContainer } from "@/design-system/StyledContainer";
import { StyledSummaryBox } from "@/design-system/StyledSummaryBox";
import ListItem from "../ListItem";
import { StyledText } from "@/design-system/StyledText";
import { StyledLink } from "@/design-system/StyledLink";
import { useState } from "react";
import FilterExpense from "../FilterExpense";

function ExpenseList({ setToast }) {
  const { data, error } = useSWR(`/api/expenses`);
  const [selectedCategory, setSelectedCategory] = useState("");

  if (!data) {
    return <Loading />;
  }

  if (error) {
    setToast(
      true,
      "Something went wrong. Please contact to application administrator.",
      "error"
    );
    return;
  }

  function handleCategoryFilter(category) {
    setSelectedCategory(category);
  }

  console.log("Data:", data);

  // Function to get category names
  /**
   * A Set is a built-in JavaScript data structure that represents a collection of unique values. It is similar to an array, but it can only contain unique values.
   * Array.from(...) is used to convert the Set back to an array. This step is necessary because Sets do not provide direct access to elements by index, so converting it back to an array allows you to access elements as you would in a regular array.
   */
  const ExpenseCategoryNames = data.map(
    (expense) => expense.categoryId[0].name
  );
  const categoryNames = Array.from(new Set(ExpenseCategoryNames));
  console.log("Unique Category Names:", categoryNames);

  /**
   * selectedCategory is not defined (falsy), in which case all expenses are included.
   * The category name of the expense matches the selectedCategory.
   */
  const filteredExpenses = data.filter(
    (expense) =>
      !selectedCategory || expense.categoryId[0].name === selectedCategory
  );

 


  console.log("filteredExpenses:", filteredExpenses);

  const filteredExpensesTotalAmount = filteredExpenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );
  console.log("Amount:", filteredExpensesTotalAmount);


  return (
    <StyledContainer $isFlexEnd>
      <FilterExpense
        selectedCategory={selectedCategory}
        categoryNames={categoryNames}
        onCategoryFilter={handleCategoryFilter}
      />

      <StyledSummaryBox>
        <StyledText>Total</StyledText>
        <StyledText $isSummaryNumber>
          -
          {filteredExpenses.reduce(
            (total, expense) => total + expense.amount,
            0
          )}{" "}
          €
        </StyledText>
      </StyledSummaryBox>
      {filteredExpenses.map((expense) => (
        <StyledList key={expense.name}>
          <StyledCard $color={expense.categoryId[0].color}>
            <StyledLink href={`expense/${expense._id}`}>
              <ListItem
                id={expense._id}
                name={expense.name}
                amount={expense.amount}
                icon={expense.categoryId[0].icon}
              />
            </StyledLink>
          </StyledCard>
        </StyledList>
      ))}
    </StyledContainer>
  );
}

export default ExpenseList;
