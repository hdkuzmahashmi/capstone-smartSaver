import styled, { css } from "styled-components";
import { Icon } from "@iconify/react";

export const StyledSearchBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledSearchIcon = styled(Icon)`
  position: absolute;
  bottom: -2.4rem;
  right: 0.8rem;
  color: #fafafa;
`;

export const StyledSearchInput = styled.input`
  width: 8.15rem;
  height: 2.4rem;
  padding: 5px 15px;
  margin: 10px 0px -47px 10px;
  border: 2px solid #78b3e6;
  border-radius: 15px;
  background: linear-gradient(to right, #1c91e3, #78b3e6);
  color: #fff;
  caret-color: #78b3e6;
  font-size: 18px;
  cursor: pointer;
  letter-spacing: 1px;
  transition: width linear 0.4s;

  &:hover {
    width: 58vw;
    border: 2px solid #78b3e6;
    box-shadow: inset 0 0 0.6em #78b3e6, inset -0.05em 0 0.1em #1c91e3;
    border-radius: 15px;
    color: #fff;
    background: linear-gradient(to right, #1c91e3, #78b3e6);
  }

  &:focus {
    width: 58vw;
    border: 2px solid #1c91e3;
    outline: none;
    box-shadow: none;
    border-radius: 15px;
    color: #1c91e3;
    padding-left: 1rem;
    padding-right: 2.5rem;
    background: #fafafa;
  }
`;

export const StyledSearchOutput = styled.ul`
  background-color: red;
  position: absolute;
  z-index: 5;
  top: 30px;
  width: 50vw;
  overflow: hidden;
  max-width: 0px;
  max-height: 0px;
  transition: max-height 0.6s ease;

  &.show {
    opacity: 1;
    max-height: 250px;
  }

  opacity: 0;
`;
