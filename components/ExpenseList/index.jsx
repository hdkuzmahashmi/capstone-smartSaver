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
import Expenses from "../Expenses";

function ExpenseList({ setToast }) {
  const { data, error } = useSWR("/api/expenses");

  // State variables for handling filters and UI state
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedAmountRange, setSelectedAmountRange] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);

  if (!data) {
    return <Loading />;
  }

  if (error) {
    setToast(
      true,
      "Something went wrong. Please contact the application administrator.",
      "Error"
    );
    return;
  }

  // Function to clear all filters
  function handleClearFilters() {
    setSelectedCategory("");
    setSelectedAmountRange(0);
    setStartDate("");
    setEndDate("");
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
  function handleFromDateFilter(startDate) {
    setStartDate(startDate);
    setIsFiltered(true);
  }

  // Function to handle end-date filtering
  function handleToDateFilter(endDate) {
    setEndDate(endDate);
    setIsFiltered(true);
  }

  const maxAmount = Math.ceil(
    data.reduce((max, current) => {
      return current.amount > max.amount ? current : max;
    }, data[0]).amount
  );

  // Extract unique category names from the expense data
  const expenseCategoryNames = data.map(
    (expense) => expense.categoryId[0]?.name
  );
  const categoryNames = Array.from(new Set(expenseCategoryNames));

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
      !startDate || !endDate || (dateAt >= startDate && dateAt <= endDate);

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
        maxAmount={maxAmount}
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
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
      <Expenses expenses={filteredExpenses} />
    </StyledContainer>
  );
}

export default ExpenseList;
