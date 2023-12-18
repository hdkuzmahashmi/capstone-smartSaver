import styled from "styled-components";
import { commonFilterStyle } from "./StyledFilterExpense";
import DatePicker from "react-datepicker";

export const DatePickerWrapper = styled.div`
  display: flex;
  align-items: center;
  z-index: 15;
`;

export const CustomDatePicker = styled(DatePicker)`
  width: 80%;
  height: 1.8rem;
  font-size: 14px;
  border-radius: 10px;
  letter-spacing: 0.8px;
  text-align: center;
  border: 2px solid #78b3e6;
  background: #1c91e3;
  color: white;
  z-index: 10;
  cursor: pointer;
  letter-spacing: 1px;

  &::placeholder {
    color: #fff;
    opacity: 0.7;
  }

  &:hover {
    border: 2px solid #78b3e6;
    box-shadow: inset 0 0 0.6em #78b3e6, inset -0.05em 0 0.1em #1c91e3;
    color: #fff;
    background: linear-gradient(to top, #1c91e3, #78b3e6);
  }

  &:focus {
    border: 2px solid #1c91e3;
    outline: none;
    box-shadow: none;
    color: #1c91e3;
    background: #fafafa;
  }
`;

export const DatePickerLabel = styled.span`
  margin: 10px;
  color: #777;
  font-size: 14px;
  padding-left: 15px;
`;

export const DatePickerButton = styled.button`
  ${commonFilterStyle};
`;
