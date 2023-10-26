import { createGlobalStyle } from "styled-components";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: ${poppins.style.fontFamily}; 
  }

  body {
    margin: 0;
    font-weight: 400;
    padding-top: 10%;
    background-color: #f5f5f5;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 5%;

    @media (min-width: 768px) {
      padding-left: 10%;
      padding-right: 10%;
      padding-top: 5%;
    }
  }
`;
