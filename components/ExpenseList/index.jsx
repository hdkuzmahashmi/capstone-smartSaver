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
  const [selectedFromDateRange, setSelectedFromDateRange] = useState("");
  const [selectedToDateRange, setSelectedToDateRange] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);

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

  function handleClearFilters() {
    setSelectedCategory("");
    setSelectedAmountRange(0);
    setSelectedFromDateRange("");
    setSelectedToDateRange("");
    setIsFiltered(false);
  }

  function handleCategoryFilter(category) {
    setSelectedCategory(category);
    setIsFiltered(true);
  }

  function handleAmountRangeChange(amountRange) {
    setSelectedAmountRange(amountRange);

    if (amountRange === 0 && selectedCategory === "") {
      // If both the amount range and selected category are 0, reset filters
      setIsFiltered(false);
    } else {
      setIsFiltered(true);
    }
  }

  function handleFromDateFilter(selectedFromDateRange) {
    console.log("selectedFromDateRange", selectedFromDateRange);
    setSelectedFromDateRange(selectedFromDateRange);
    setIsFiltered(true);
  }

  function handleToDateFilter(selectedToDateRange) {
    console.log("selectedToDateRange", selectedToDateRange);
    setSelectedToDateRange(selectedToDateRange);
    setIsFiltered(true);
  }

  console.log("Data:", data);

  const ExpenseCategoryNames = data.map(
    (expense) => expense.categoryId[0]?.name
  );
  const categoryNames = Array.from(new Set(ExpenseCategoryNames));

  const filteredExpenses = data.filter((expense) => {
    const categoryMatch =
      !selectedCategory || expense.categoryId[0]?.name === selectedCategory;

    const rangeMatch =
      selectedAmountRange === 0 ||
      (selectedAmountRange > 0 && expense.amount <= selectedAmountRange);

    const dateAt = new Date(expense.createdAt);
    dateAt.setHours(0, 0, 0, 0);
    console.log("dateAt", dateAt);

    const dateRange =
      !selectedFromDateRange ||
      !selectedToDateRange ||
      (dateAt >= selectedFromDateRange && dateAt <= selectedToDateRange);

    return categoryMatch && rangeMatch && dateRange;
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
        isFiltered={isFiltered}
        onClearFilters={handleClearFilters}
        onFromDateFilter={handleFromDateFilter}
        onToDateFilter={handleToDateFilter}
        selectedFromDateRange={selectedFromDateRange}
        selectedToDateRange={selectedToDateRange}
      />

      <StyledSummaryBox>
        <StyledText>Total</StyledText>
        <StyledText $isSummaryNumber>
  -
  {filteredExpenses.reduce((total, expense) => total + expense.amount, 0)
    .toFixed(2)}{" "}
  €
</StyledText>
      </StyledSummaryBox>
      {filteredExpenses.map((expense) => (
        <StyledList key={expense.name}>
          <StyledCard $color={expense.categoryId[0]?.color}>
            <StyledLink href={`expense/${expense._id}`}>
              <ListItem
                id={expense._id}
                name={expense.name}
                amount={expense.amount}
                icon={expense.categoryId[0]?.icon}
              />
            </StyledLink>
          </StyledCard>
        </StyledList>
      ))}
    </StyledContainer>
  );
}

export default ExpenseList;
