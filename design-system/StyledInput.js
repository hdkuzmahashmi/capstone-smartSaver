import styled from "styled-components";
import DatePicker from "react-datepicker";

export const StyledInput = styled.input`
  margin-top: 0.5rem;
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  background-color: #fff;
  border: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0.375rem;
  outline: none;
  font-size: 1rem;
`;

export const FormDateInput = styled(DatePicker)`
  margin-top: 1rem;
  width: 100%;
  padding: 0.4rem;
  text-align: center;
  background-color: #fff;
  border: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0.375rem;
  outline: none;
  font-size: 1rem;
  letter-spacing: 1px;
`;

export const FormDateLabel = styled.span`
  margin: 10px;
  color: #777;
  font-size: 1rem;
`;
