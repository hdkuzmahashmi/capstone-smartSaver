import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;

  ${({ $isFlexRow }) =>
    $isFlexRow
      ? `flex-direction: row; align-items: center; justify-content: center;`
      : `flex-direction: column; align-items: flex-start; justify-content: flex-start;`};

  ${({ $isSpaceBetween }) =>
    $isSpaceBetween &&
    css`
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      height: auto;
    `};

  ${({ $isCenter }) =>
    $isCenter &&
    css`
      flex-direction: row;
      align-items: center;
      justify-content: center;
    `};

  ${({ $isDashboard }) =>
    $isDashboard &&
    css`
      padding-left: 10px;
      padding-right: 10px;
    `};
`;
