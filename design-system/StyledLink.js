import styled from "styled-components";
import Link from "next/link";

export const StyledLink = styled(Link)`
  all: unset;
  width: 100%;
  cursor: pointer;
  color: inherit;
  text-decoration: none;

  &:hover {
    color: #1c91e3;
  }

  &:active {
    color: #1c91e3;
  }
`;
