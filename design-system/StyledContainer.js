import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;

  ${({ $isFlexRow }) =>
    $isFlexRow
      ? `flex-direction: row; align-items: center; justify-content: center;`
      : `flex-direction: column; align-items: flex-start; justify-content: flex-start;`};

  ${({ $isSpaceBetween }) =>
    $isSpaceBetween
      ? `flex-direction:row; align-items: center; justify-content: space-between; height:auto;`
      : ``};

  ${({ $isCenter }) =>
    $isCenter
      ? `flex-direction:row;align-items:center;justify-content:center;`
      : ``};
`;
