import {
  CollapseContainer,
  CollapsiblePanelContainer,
  FilterButton,
  Select,
  DatePickerWrapper,
  CustomDatePicker,
} from "@/design-system/StyledFilterExpense";
import { useState } from "react";
import { Icon } from "@iconify/react";
import "react-datepicker/dist/react-datepicker.css";

function FilterExpense({ selectedCategory, categoryNames, onCategoryFilter }) {
  const [collapsed, setCollapsed] = useState(true);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

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
            <option value="">Select Amount Range</option>
            <option value="0-50">Less than €50</option>
            <option value="50-100">Between €50 and €100</option>
            <option value="100-200">Between €100 and €200</option>
            <option value="200+">More than €200</option>
          </Select>
          <DatePickerWrapper>
            <CustomDatePicker
              placeholderText="Start Date"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
            />
            <span> to </span>
            <CustomDatePicker
              placeholderText="End Date"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
            />
          </DatePickerWrapper>
        </CollapsiblePanelContainer>
      </CollapseContainer>
    </>
  );
}

export default FilterExpense;
