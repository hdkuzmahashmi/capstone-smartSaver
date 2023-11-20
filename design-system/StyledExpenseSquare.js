import { Icon } from "@iconify/react";
import styled from "styled-components";

export const StyledExpenseSquare = styled.li`
  list-style-type: none;
  height: 115px;
  width: 115px;
  border-radius: 12px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 3px;
  position: relative;
  color: #202020;
  box-shadow: inset 0 0 35px 5px rgba(0, 0, 0, 0.1),
    inset 0 2px 1px 1px rgba(255, 255, 255, 0.9),
    inset 0 -2px 1px rgba(0, 0, 0, 0.05);
  border: 3px solid ${(props) => props.backgroundColor};

  &:hover {
    background-color: ${(props) => props.backgroundColor};
    box-shadow: none;
    color: white;
  }

  h3 {
    margin: 0;
    margin-top: -7px;
    padding: 0;
    z-index: 5;
    font-size: clamp(1rem, 5vw, 1.4rem);
  }

  p {
    font-size: 0.9rem;
    text-align: center;
    margin: 0;
    padding: 0;
    word-break: break-all;
    z-index: 5;
    margin-top: -6px;
  }
`;

export const StyledBackgroundIcon = styled(Icon)`
  position: absolute;
  color: black;
  padding: 5px;
  bottom: 5px;
  right: 5px;
`;
