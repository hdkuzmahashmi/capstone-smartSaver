import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  max-width: 800px;
  margin: auto;
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
    `};

  ${({ $isLogin }) =>
    $isLogin &&
    css`
      flex-direction: row;
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
      font-size: 0.85rem;
      position: absolute;
      bottom: 3px;
      overflow: hidden;
      opacity: 0.3333;
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
      align-items: center;
      left: 0;
      justify-content: center;
    `};

  ${({ $isHeader }) =>
    $isHeader &&
    css`
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    `};
`;

export const LoginText = styled.p`
  font-size: 0.85rem;
  margin-top: -1rem;
  text-align: center;
  margin-bottom: -0.5rem;
  display: flex;
  justify-content: center;
  gap: 3.33px;
  align-items: center;
`;
