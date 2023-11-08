import {
  CollapseContainer,
  CollapsiblePanelContainer,
  FilterButton,
  Select,
} from "@/design-system/StyledFilterExpense";
import { useState } from "react";
import { Icon } from "@iconify/react";

function FilterExpense({ selectedCategory, categoryNames, onCategoryFilter }) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <CollapseContainer>
        <FilterButton onClick={toggleCollapse}>
          {collapsed ? "Filter" : "Close"}
          <Icon icon="mi:filter" color="white" width="24" height="24" />
        </FilterButton>
        <CollapsiblePanelContainer collapsed={collapsed}>
          <Select
            value={selectedCategory}
            onChange={(e) => onCategoryFilter(e.target.value)}
          >
            <option value="">All Categories</option>
            {categoryNames.map((categoryName) => (
              <option key={categoryName} value={categoryName}>
                {categoryName}
              </option>
            ))}
          </Select>
          <Select
            value={selectedCategory}
            onChange={(e) => onCategoryFilter(e.target.value)}
          >
            <option value="">All Categories</option>
            {categoryNames.map((categoryName) => (
              <option key={categoryName} value={categoryName}>
                {categoryName}
              </option>
            ))}
          </Select>
          <Select
            value={selectedCategory}
            onChange={(e) => onCategoryFilter(e.target.value)}
          >
            <option value="">All Categories</option>
            {categoryNames.map((categoryName) => (
              <option key={categoryName} value={categoryName}>
                {categoryName}
              </option>
            ))}
          </Select>
        </CollapsiblePanelContainer>
      </CollapseContainer>
    </>
  );
}
export default FilterExpense;
