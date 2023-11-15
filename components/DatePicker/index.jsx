import {
  CustomDatePicker,
  DatePickerButton,
  DatePickerLabel,
  DatePickerWrapper,
} from "@/design-system/StyledDatePicker";
import { CollapsiblePanelContainer } from "@/design-system/StyledFilterExpense";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

function DatePicker({
  isFiltered,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  onFromDate,
  onToDate,
}) {
  const [collapsedDate, setCollapsedDate] = useState(true);
  return (
    <>
      <DatePickerButton
        onClick={() => {
          setCollapsedDate(!collapsedDate);
        }}
      >
        Select a Date Range
      </DatePickerButton>
      <CollapsiblePanelContainer $collapsed={collapsedDate}>
        <DatePickerWrapper>
          <DatePickerLabel> From </DatePickerLabel>
          <CustomDatePicker
            placeholderText="Start Date"
            selected={isFiltered ? startDate : ""}
            onChange={(date) => {
              setStartDate(date);
              onFromDate(date);
            }}
            selectsStart
            startDate={startDate}
            endDate={endDate}
          />
          <DatePickerLabel> To </DatePickerLabel>
          <CustomDatePicker
            placeholderText="End Date"
            selected={isFiltered ? endDate : ""}
            onChange={(date) => {
              setEndDate(date);
              onToDate(date);
            }}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
          />
        </DatePickerWrapper>
      </CollapsiblePanelContainer>
    </>
  );
}

export default DatePicker;
