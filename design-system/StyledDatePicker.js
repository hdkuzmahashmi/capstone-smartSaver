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
`;
