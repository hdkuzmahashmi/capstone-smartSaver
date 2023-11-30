import styled from "styled-components";
import DatePicker from "react-datepicker";

export const StyledInput = styled.input`
  margin-top: 0.35rem;
  margin-bottom: 0.8rem;
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  background-color: #fff;
  border: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0.375rem;
  outline: none;
  font-size: 1rem;

  ${({ $isValid }) => ($isValid ? `outline: 2px red solid;` : `outline: 0;`)}
`;

export const FormDateInput = styled(DatePicker)`
  margin: 0.35rem 0 1.3rem 0;
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
