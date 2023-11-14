import styled from "styled-components";

export const StyledCard = styled.li`
  list-style-type: none;
  width: 100%;
  box-shadow: inset 0 0 35px 5px rgba(0, 0, 0, 0.1),
    inset 0 2px 1px 1px rgba(255, 255, 255, 0.9),
    inset 0 -2px 1px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  border-right: 10px solid ${({ $color }) => $color};
  position: relative;

  &:hover {
    border: 1px solid #eee;
    border-right: 10px solid ${({ $color }) => $color};
  }

  ${(props) =>
    props.$addMarginBottom ? `padding-bottom: 4rem;` : `padding-bottom: 0;`}

  ${(props) =>
    props.$isDetail
      ? `padding: 1rem; padding-bottom:3rem;`
      : `padding: 0 1rem;`}
`;
