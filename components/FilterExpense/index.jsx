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
  selectedFromDateFilter,
  selectedToDateFilter,
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
        {isFiltered ? "Clear Filter" : "Filter"}

        <Icon icon="mi:filter" color="white" width="24" height="24" />
      </FilterButton>
      <CollapsiblePanelContainer collapsed={collapsed}>
        <FilterCategory
          selectedCategory={selectedCategory}
          categoryNames={categoryNames}
          onCategoryFilter={onCategoryFilter}
        />
        <AmountRange
          onAmountRangeChange={onAmountRangeChange}
          selectedAmountRange={selectedAmountRange}
        />
        {/* <DatePicker
          onFromDate={onFromDateFilter}
          onToDate={onToDateFilter}
          selectedFromDate={selectedFromDateFilter}
          selectedToDate={selectedToDateFilter}
        /> */}
        <DatePicker
          onFromDate={(date) => onFromDateFilter(date)}
          onToDate={(date) => onToDateFilter(date)}
          selectedFromDate={selectedFromDateFilter}
          selectedToDate={selectedToDateFilter}
        />
      </CollapsiblePanelContainer>
    </CollapseContainer>
  );
}

export default FilterExpense;
