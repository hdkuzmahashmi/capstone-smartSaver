import { Icon } from "@iconify/react";
import styled from "styled-components";

export const StyledExpenseSquare = styled.li`
  list-style-type: none;
  height: 80px;
  width: auto;
  min-width: 115px;
  border-radius: 15px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  color: #202020;
  box-shadow: inset 0 0 35px 5px rgba(0, 0, 0, 0.05),
    inset 0 2px 1px 1px rgba(255, 255, 255, 0.7),
    inset 0 -2px 1px rgba(0, 0, 0, 0);
  border: 2.5px solid ${(props) => props.$bgcolor};

  &:hover {
    background-color: ${(props) => props.$bgcolor};
    box-shadow: inset -0.3em -0.6em 0.4em rgba(0, 0, 0, 0.07),
      0.05em 0.05em 0.15em rgba(0, 0, 0, 0);
  }

  /* &:hover {
    background: linear-gradient(to right, #1c91e3, #78b3e6);
    box-shadow: inset -0.3em -0.6em 0.4em #1c91e3, 0.05em 0.05em 0.15em #78b3e6;
  } */

  p {
    margin: 0;
    margin-top: -7px;
    padding: 0;
    font-size: 18px;
    font-weight: bold;
  }

  span {
    font-size: 12px;
    text-align: center;
    margin: 0;
    padding: 0;
    word-break: break-all;
    margin-top: -3px;
  }

  @media (max-width: 768px) {
    height: 60px;
    min-width: 80px;

    p {
      font-size: 13px;
    }

    span {
      font-size: 9px;
    }
  }
`;

export const StyledBackgroundIcon = styled(Icon)`
  position: absolute;
  color: #202020;
  padding: 5px;
  top: 47px;
  right: 0px;

  @media (max-width: 768px) {
    width: 30px;
    top: 30px;
    right: -2px;
    width: 33%;
  }
`;
