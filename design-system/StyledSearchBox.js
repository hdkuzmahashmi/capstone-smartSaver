import styled, { css } from "styled-components";
import { Icon } from "@iconify/react";

export const StyledSearchBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const StyledSearchIcon = styled(Icon)`
  position: absolute;
  bottom: 2.76rem;
  right: 1.3rem;
  color: #fafafa;
`;

export const StyledSearchInput = styled.input`
  width: 7.9rem;
  padding: 5px 15px;
  margin: -101px 10px 10px 10px;
  border: 1px solid transparent;
  border-radius: 15px;
  background: linear-gradient(to right, #1c91e3, #78b3e6);
  color: #fff;
  caret-color: #78b3e6;
  font-size: 18px;
  cursor: pointer;
  /* transition: background 0.3s, box-shadow 0.3s; */
  /* text-transform: uppercase; */
  letter-spacing: 1px;
  /* align-self: flex-end; */
  transition: width linear 0.8s;

  &:hover {
    width: 18rem;
    border: 1px solid transparent;

    border-radius: 15px;
    color: #fff;
    background: linear-gradient(to right, #1c91e3, #78b3e6);
  }

  &:focus {
    width: 18rem;
    border: 2px solid #78b3e6;
    outline: none;
    border-radius: 15px;
    color: #3393e6;
    padding-left: 1rem;
    padding-right: 2.5rem;
    background: linear-gradient(to right, #dcf3ff, #fafafa);
  }
`;
