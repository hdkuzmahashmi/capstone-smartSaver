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
  const [selectedAmountRange, setSelectedAmountRange] = useState(0);

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

  function handleAmountRangeChange(amountRange) {
    setSelectedAmountRange(amountRange);

    if (amountRange === 0) {
      // If the amount range is 0, reset the selected category
      setSelectedCategory("");
    }

    console.log("Selected Category:", selectedCategory);
    console.log("Selected Amount Range:", amountRange);
  }

  console.log("Data:", data);

  const ExpenseCategoryNames = data.map(
    (expense) => expense.categoryId[0].name
  );
  const categoryNames = Array.from(new Set(ExpenseCategoryNames));

  const filteredExpenses = data.filter((expense) => {
    // console.log("Filtering - Selected Category:", selectedCategory);
    // console.log("Filtering - Selected Amount Range:", selectedAmountRange);
    // console.log("Expense Category:", expense.categoryId[0].name);
    // console.log("Expense Amount:", expense.amount);

    const categoryMatch =
      !selectedCategory || expense.categoryId[0].name === selectedCategory;

    const rangeMatch =
      selectedAmountRange === 0 ||
      (selectedAmountRange > 0 && expense.amount <= selectedAmountRange);

    // console.log("Category Match:", categoryMatch);
    // console.log("Range Match:", rangeMatch);

    return categoryMatch && rangeMatch;
  });

  console.log("Filtered Expenses:", filteredExpenses);

  return (
    <StyledContainer $isFlexEnd>
      <FilterExpense
        selectedCategory={selectedCategory}
        categoryNames={categoryNames}
        onCategoryFilter={handleCategoryFilter}
        onAmountRangeChange={handleAmountRangeChange}
        selectedAmountRange={selectedAmountRange}
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
