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
}) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <CollapseContainer>
      <FilterButton onClick={toggleCollapse}>
        {collapsed ? "Filter" : "Close"}
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
        <DatePicker />
      </CollapsiblePanelContainer>
    </CollapseContainer>
  );
}

export default FilterExpense;
