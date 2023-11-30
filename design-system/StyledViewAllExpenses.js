import { StyledIcon } from "@/design-system/StyledIcon";

import styled from "styled-components";
import Link from "next/link";

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  color: #333;
`;

export const StyledHistoryIcon = styled(StyledIcon)`
  margin-right: 5px;
`;

export const StyledHeading = styled.h2`
  color: #333;
  font-size: 1em;
`;

export const StyledViewLink = styled(Link)`
  all: unset;
  cursor: pointer;
  color: inherit;
  text-decoration: none;

  &:hover {
    color: #1c91e3;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    padding: 0px 10px;

    ${StyledHistoryIcon}, ${StyledHeading} {
      color: #1c91e3;
    }
  }

  &:active {
    color: #1c91e3;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;
