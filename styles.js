import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: Arial !important ;
  }

  body {
    margin: 0;
    font-family: Arial ;
    padding: 20px;
    background-color: #f5f5f5;
  }
`;
