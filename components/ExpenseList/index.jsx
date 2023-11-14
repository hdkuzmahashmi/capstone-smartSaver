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
  const { data, error } = useSWR("/api/expenses");

  // State variables for handling filters and UI state
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

  // Function to clear all filters
  function handleClearFilters() {
    setSelectedCategory("");
    setSelectedAmountRange(0);
    setSelectedFromDateRange("");
    setSelectedToDateRange("");
    setIsFiltered(false);
  }

  // Function to handle category filtering
  function handleCategoryFilter(category) {
    setSelectedCategory(category);
    setIsFiltered(true);
  }

  // Function to handle amount range filtering
  function handleAmountRangeChange(amountRange) {
    setSelectedAmountRange(amountRange);

    // Update filter status based on the selected amount range and category
    if (amountRange === 0 && selectedCategory === "") {
      setIsFiltered(false);
    } else {
      setIsFiltered(true);
    }
  }

  // Function to handle start-date filtering
  function handleFromDateFilter(selectedFromDateRange) {
    setSelectedFromDateRange(selectedFromDateRange);
    setIsFiltered(true);
  }

  // Function to handle end-date filtering
  function handleToDateFilter(selectedToDateRange) {
    setSelectedToDateRange(selectedToDateRange);
    setIsFiltered(true);
  }

  // Extract unique category names from the expense data
  const ExpenseCategoryNames = data.map(
    (expense) => expense.categoryId[0]?.name
  );
  const categoryNames = Array.from(new Set(ExpenseCategoryNames));

  // Filter expenses based on selected filters
  const filteredExpenses = data.filter((expense) => {
    const categoryMatch =
      !selectedCategory || expense.categoryId[0]?.name === selectedCategory;

    const rangeMatch =
      selectedAmountRange === 0 ||
      (selectedAmountRange > 0 && expense.amount <= selectedAmountRange);

    const dateAt = new Date(expense.createdAt);
    dateAt.setHours(0, 0, 0, 0);

    const dateRange =
      !selectedFromDateRange ||
      !selectedToDateRange ||
      (dateAt >= selectedFromDateRange && dateAt <= selectedToDateRange);

    return categoryMatch && rangeMatch && dateRange;
  });

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
          {filteredExpenses
            .reduce((total, expense) => total + expense.amount, 0)
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
                date={expense.createdAt}
              />
            </StyledLink>
          </StyledCard>
        </StyledList>
      ))}
    </StyledContainer>
  );
}

export default ExpenseList;
