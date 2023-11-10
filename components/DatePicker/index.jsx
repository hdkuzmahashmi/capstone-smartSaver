import {
  CustomDatePicker,
  DatePickerButton,
  DatePickerLabel,
  DatePickerWrapper,
} from "@/design-system/StyledDatePicker";
import { CollapsiblePanelContainer } from "@/design-system/StyledFilterExpense";

import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

function DatePicker() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

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
      <CollapsiblePanelContainer collapsed={collapsedDate}>
        <DatePickerWrapper>
          <DatePickerLabel> From </DatePickerLabel>
          <CustomDatePicker
            placeholderText="Start Date"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
          />
          <DatePickerLabel> To </DatePickerLabel>
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
      </CollapsiblePanelContainer>{" "}
    </>
  );
}

export default DatePicker;
