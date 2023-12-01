import { StyledIcon } from "@/design-system/StyledIcon";

import styled from "styled-components";
import Link from "next/link";

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  color: #333;
  font-size: small;
  margin-right: 10px;
`;

export const StyledHistoryIcon = styled(StyledIcon)``;

export const StyledHeading = styled.h2`
  color: #333;
  font-size: 1rem;
  margin-top: 1.9rem;
`;

export const StyledView = styled.h2`
  color: #333;
  font-size: 0.9rem;
`;

export const StyledViewLink = styled(Link)`
  all: unset;
  cursor: pointer;
  color: inherit;
  text-decoration: none;

  &:hover {
    color: #1c91e3;
    box-shadow: inset 0 0 35px 5px rgba(0, 0, 0, 0.1),
      inset 0 2px 1px 1px rgba(255, 255, 255, 0.9),
      inset 0 -2px 1px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    padding: 0px 10px;

    ${StyledHistoryIcon}, ${StyledView} {
      color: #1c91e3;
    }
  }

  &:active {
    color: #1c91e3;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;
