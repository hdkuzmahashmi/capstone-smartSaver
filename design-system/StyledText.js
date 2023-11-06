import styled, { css } from "styled-components";

export const StyledText = styled.p`
  margin: 0;
  font-weight: ${(props) => (props.$isSummaryNumber ? "500" : "normal")};
  color: ${(props) => (props.$isSummaryNumber ? "white" : "")};
  font-size: ${(props) => (props.$isSummaryNumber ? "2.5rem" : "20px")};
  letter-spacing: 2px;

  ${(props) =>
    props.$isBold &&
    css`
      font-weight: 500;
      letter-spacing: normal;
      font-size: 1rem;
    `};
`;
