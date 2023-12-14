import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;

  ${({ $isList }) => $isList && `gap:0`};

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

  ${({ $isLogo }) =>
    $isLogo &&
    css`
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-right: 0.3333rem;
    `};

  ${({ $isLogin }) =>
    $isLogin &&
    css`
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
    `};

  ${({ $isUserContainer }) =>
    $isUserContainer &&
    css`
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `};

  ${({ $isPolicyContainer }) =>
    $isPolicyContainer &&
    css`
      flex-direction: row;
      justify-content: center;
      gap: 2rem;
      margin-top: 4rem;
      opacity: 0.5;
      margin-bottom: -5rem;
    `};
`;
