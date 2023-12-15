import styled from "styled-components";
import { Icon } from "@iconify/react";

export const StyledSearchBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledSearchIcon = styled(Icon)`
  position: absolute;
  bottom: -2.6rem;
  right: 0.8rem;
  color: #fafafa;
  pointer-events: none;
  z-index: 15;
`;

export const StyledSearchInput = styled.input`
  width: 8.15rem;
  height: 2.4rem;
  padding: 5px 15px;
  margin: 10px 0px -48px 10px;
  border: 2px solid #78b3e6;
  border-radius: 15px;
  background: linear-gradient(to right, #1c91e3, #78b3e6);
  color: #fff;
  caret-color: #78b3e6;
  z-index: 10;
  font-size: 18px;
  cursor: pointer;
  letter-spacing: 1px;
  transition: width linear 0.4s;

  &::placeholder {
    color: #fff;
    opacity: 0.7;
  }

  &:hover {
    width: 30.5vw;
    border: 2px solid #78b3e6;
    box-shadow: inset 0 0 0.6em #78b3e6, inset -0.05em 0 0.1em #1c91e3;
    border-radius: 15px;
    color: #fff;
    background: linear-gradient(to right, #1c91e3, #78b3e6);
    @media (max-width: 768px) {
      width: 57vw;
    }
  }

  &:focus {
    width: 30.5vw;
    border: 2px solid #1c91e3;
    outline: none;
    box-shadow: none;
    border-radius: 15px;
    color: #1c91e3;
    padding-left: 1rem;
    padding-right: 2.5rem;
    background: #fafafa;
    @media (max-width: 768px) {
      width: 57vw;
    }
  }
`;

export const StyledSearchOutput = styled.ul`
  position: absolute;
  z-index: 5;
  line-height: 200%;
  top: 41px;
  left: 9%;
  width: 85%;
  overflow: hidden;
  max-width: 90%;
  max-height: 0;
  transition: max-height 0.6s ease;

  opacity: 0;

  ${({ $isDisplayed }) =>
    $isDisplayed &&
    `background-color: #fff;
    box-shadow: inset 0 0 35px 5px rgba(0, 0, 0, 0.1),
    inset 0 2px 1px 1px rgba(255, 255, 255, 0.9),
    inset 0 -2px 1px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.2);
    opacity: 1;
    max-height: 325px;`};
`;
