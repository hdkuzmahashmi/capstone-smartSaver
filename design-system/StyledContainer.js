import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  color: #202020;
  gap: 8px;

  ${({ $isFlexRow }) =>
    $isFlexRow
      ? `flex-direction: row; align-items: center; justify-content: center;`
      : `flex-direction: column; align-items: flex-start; justify-content: flex-start;`};

  ${({ $isSpaceBetween }) =>
    $isSpaceBetween
      ? `flex-direction:row; align-items: center; justify-content: space-between; height:auto;`
      : ``};
`;
