import Link from "next/link";
import styled from "styled-components";

export const StyledFloatingButton = styled(Link)`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  cursor: pointer;
  background-color: #56a2e8;
  color: #f5f5f5;
  border: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  &:hover {
    background-color: #1c91e3;
  }

  &:active {
    background-color: #1c91e3;
  }

  @media (min-width: 768px) {
    width: 72px;
    height: 72px;
  }
`;
