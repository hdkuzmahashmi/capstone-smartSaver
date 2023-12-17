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
  background: linear-gradient(to right, #1c91e3, #78b3e6);
  color: #fff;
  border: 1px solid #1c91e3;
  box-shadow: inset -0.13em -0.15em 0.4em #1c91e3,
    0.02em 0.02em 0.5em rgba(0, 0, 0, 0.24);

  &:hover {
    border: 1px solid #1c91e3;
    box-shadow: inset -0.1em -0.1em 0.15em #1c91e3,
      inset 0 0.04em 0 rgba(0, 0, 0, 0.8), 0 0 0 0.01em rgba(0, 0, 0, 0.3);
  }

  &:active {
    background-color: #1c91e3;
  }

  @media (min-width: 768px) {
    width: 72px;
    height: 72px;
  }
`;
