import {
  CustomDatePicker,
  DatePickerWrapper,
} from "@/design-system/StyledDatePicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

function DatePicker() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  return (
    <DatePickerWrapper>
      <span> From </span>
      <CustomDatePicker
        placeholderText="Start Date"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <span> To </span>
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
  );
}

export default DatePicker;
