import styled from "styled-components";

export const StyledCard = styled.li`
  padding: 1rem;
  width: 100%;
  background-color: #f7f7f7;
  box-shadow: inset 0 0 35px 5px rgba(0, 0, 0, 0.1),
    inset 0 2px 1px 1px rgba(255, 255, 255, 0.9),
    inset 0 -2px 1px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  position: relative;

  ${(props) =>
    props.$addMarginBottom ? `padding-bottom: 4rem;` : `padding-bottom: 0;`}
`;
