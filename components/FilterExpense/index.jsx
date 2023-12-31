import { useState } from "react";
import { Icon } from "@iconify/react";
import {
  CollapseContainer,
  CollapsiblePanelContainer,
  FilterButton,
} from "@/design-system/StyledFilterExpense";
import AmountRange from "../RangeSlider";
import DatePicker from "../DatePicker";
import FilterCategory from "../FilterCategory";

function FilterExpense({
  selectedCategory,
  categoryNames,
  onCategoryFilter,
  selectedAmountRange,
  onAmountRangeChange,
  isFiltered,
  onClearFilters,
  onFromDateFilter,
  onToDateFilter,
  maxAmount = { maxAmount },
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    if (isFiltered) {
      onClearFilters();
    }
    setCollapsed(!collapsed);
  };

  return (
    <CollapseContainer>
      <FilterButton onClick={toggleCollapse}>
        {isFiltered ? "Reset " : "Filter"}

        <Icon icon="mi:filter" color="white" width="24" height="24" />
      </FilterButton>

      <CollapsiblePanelContainer $collapsed={collapsed}>
        <FilterCategory
          selectedCategory={selectedCategory}
          categoryNames={categoryNames}
          onCategoryFilter={onCategoryFilter}
        />
        <AmountRange
          onAmountRangeChange={onAmountRangeChange}
          selectedAmountRange={selectedAmountRange}
          maxAmount={maxAmount}
        />
        <DatePicker
          onFromDate={(date) => onFromDateFilter(date)}
          onToDate={(date) => onToDateFilter(date)}
          isFiltered={isFiltered}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          startDate={startDate}
          endDate={endDate}
        />
      </CollapsiblePanelContainer>
    </CollapseContainer>
  );
}

export default FilterExpense;
