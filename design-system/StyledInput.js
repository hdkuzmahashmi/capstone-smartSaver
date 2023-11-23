import styled, { css, keyframes } from "styled-components";
import DatePicker from "react-datepicker";

const inputBaseStyles = `
  padding: 0.5rem 0.75rem;
  background-color: #fff;
  border: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0.375rem;
  outline: none;
  font-size: 1rem;
`;

export const StyledInput = styled.input`
  ${inputBaseStyles}
  margin-top: 0.35rem;
  margin-bottom: 0.8rem;
  width: 100%;

  ${({ $isValid }) => ($isValid ? `outline: 2px red solid;` : `outline: 0;`)}
`;

export const SearchInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 42px;
  line-height: 30px;
  outline: 0;
  border: 0;
  font-size: 2rem;
  border-radius: 20px;
  padding: 0 20px;
  margin: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  display: ${(props) => (props.showSearchInput ? "block" : "none")};
`;

export const FormDateInput = styled(DatePicker)`
  ${inputBaseStyles}
  letter-spacing: 1px;
  text-align: center;
`;

export const FileInput = styled.input`
  ${inputBaseStyles}
  @media (max-width: 768px) {
    width: 100%;
  }
  
`;


export const DateAndFileWrapper = styled.div`
  display: flex;
  margin-top: 0.3rem;
  margin-bottom: 2rem;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LabelAndInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1120px) {
    margin-bottom: 1rem;
    gap: 0.5rem;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const IconCommonCss = css`
  height: 1.25rem;
  width: 1.25rem;
  fill: #00adb5;
  z-index: 10;
  animation: ${fadeIn} 1s linear;
`;
