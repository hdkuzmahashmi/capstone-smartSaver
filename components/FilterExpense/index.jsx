import {
  CollapseContainer,
  CollapsiblePanelContainer,
  FilterButton,
  Select,
  DatePickerWrapper,
  CustomDatePicker,
  RangeButton,
  RangeSlider,
  SelectedRangeValue,
  RangeSliderContainer,
} from "@/design-system/StyledFilterExpense";
import { useState } from "react";
import { Icon } from "@iconify/react";
import "react-datepicker/dist/react-datepicker.css";

function FilterExpense({ selectedCategory, categoryNames, onCategoryFilter }) {
  const [collapsed, setCollapsed] = useState(true);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [collapsedRange, setCollapsedRange] = useState(true);
  const [rangeValue, setRangeValue] = useState(0);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const toggleCollapseRange = () => {
    setCollapsedRange(!collapsedRange);
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

          {/* ////////Range////////// */}
            <RangeSliderContainer>
          <RangeButton onClick={toggleCollapseRange}>
            Select Amount Range
          </RangeButton>
          <CollapsiblePanelContainer collapsed={collapsedRange}>
              <RangeSlider
                type="range"
                min="0"
                max="10000"
                step="50"
                value={rangeValue}
                onChange={(event) => {
                  setRangeValue(event.target.value);
                }}
              />
              <SelectedRangeValue>{rangeValue} €</SelectedRangeValue>
          </CollapsiblePanelContainer>
            </RangeSliderContainer>
          {/* ///////////////////////// */}

          {/* ////////Date////////// */}
          <DatePickerWrapper>
          <span> from </span>
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
          {/* ///////////////////////// */}
        </CollapsiblePanelContainer>
      </CollapseContainer>
    </>
  );
}

export default FilterExpense;
