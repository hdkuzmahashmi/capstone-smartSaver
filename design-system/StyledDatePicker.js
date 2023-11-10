import styled from "styled-components";
import { commonFilterStyle } from "./StyledFilterExpense";
import DatePicker from "react-datepicker";

export const DatePickerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const CustomDatePicker = styled(DatePicker)`
  ${commonFilterStyle};
  width: 100%;
  margin: 5px;
`;
export const DatePickerLabel = styled.span`
  margin: 10px;
  color: #777;
  font-size: 14px;
  font-style: italic;
  padding: 5px;
`;
