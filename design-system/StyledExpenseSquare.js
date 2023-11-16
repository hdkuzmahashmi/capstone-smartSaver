import { Icon } from "@iconify/react";
import styled from "styled-components";

export const StyledExpenseSquare = styled.li`
  list-style-type: none;
  height: 115px;
  width: 115px;
  background-color: ${(props) => props.color};
  border-radius: 12px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 3px;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: #202020;

  h3 {
    margin: 0;
    padding: 0;
    z-index: 5;
    font-size: 1.5rem;
    position: absolute;
  }

  p {
    font-size: 1rem;
    text-align: center;
    margin: 0;
    padding: 0;
    word-break: break-all;
    z-index: 5;
    position: absolute;
    bottom: 7px;
  }
`;

export const StyledBackgroundIcon = styled(Icon)`
  position: absolute;
  color: #202020;
  opacity: 0.2;
  z-index: 0;
`;
