import { StyledIcon } from "@/design-system/StyledIcon";

import styled from "styled-components";
import Link from "next/link";

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const StyledHistoryIcon = styled(StyledIcon)``;

export const StyledHeading = styled.h2`
  color: #333;
  font-size: 1rem;
  margin-top: 2rem;
  margin-bottom: 0.3rem;
`;

export const StyledView = styled.h2`
  color: #fff;
  font-size: 12px;
`;

export const StyledViewLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0px 10px;
  margin-right: 10px;
  border: 1px solid #1c91e3;
  box-shadow: inset -0.3em -1.1em 0.4em #1c91e3, 0.05em 0.05em 0.15em #78b3e6;
  border-radius: 15px;
  background: linear-gradient(to right, #1c91e3, #78b3e6);
  color: #fff;
  cursor: pointer;
  transition: background 0.3s, box-shadow 0.15s;
  text-transform: uppercase;
  letter-spacing: 1px;
  align-self: flex-end;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    border: 1px solid #1c91e3;
    box-shadow: inset -0.2em -0.1em 0.25em #1c91e3;
  }

  &:focus {
    outline: none;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;
