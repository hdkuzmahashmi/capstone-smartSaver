import { StyledIcon } from "@/design-system/StyledIcon";
import styled from "styled-components";
import Link from "next/link";

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const StyledHistoryIcon = styled(StyledIcon)`
  padding: 2px;
  margin: -7px 0 2px 0;
`;

export const StyledHeading = styled.h2`
  color: #333;
  font-size: 1rem;
  margin-bottom: -6px;
  margin-top: 2rem;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 0.03rem;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

export const StyledView = styled.span`
  color: #fff;
  font-size: 12px;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export const StyledViewLinkNew = styled(Link)`
  list-style-type: none;
  word-break: break-all;
  text-decoration: none;
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
  border: 2.5px solid #1c91e3;

  &:hover {
    background: #1c91e3;
    box-shadow: inset -0.3em -0.6em 0.4em rgba(0, 0, 0, 0.07),
      0.05em 0.05em 0.15em rgba(0, 0, 0, 0);
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

    span {
      font-size: 9px;
    }
  }
`;

// export const StyledViewLink = styled(Link)`
//   border: 2px solid orange;
//   display: flex;
//   align-items: center;
//   padding: 0px 8px;
//   margin-right: 10px;
//   margin-bottom: -10px;
//   margin-top: 8px;
//   border: 1px solid #1c91e3;
//   box-shadow: inset -0.3em -1.1em 0.4em #1c91e3, 0.05em 0.05em 0.15em #78b3e6;
//   border-radius: 15px;
//   background: linear-gradient(to right, #1c91e3, #78b3e6);
//   color: #fff;
//   cursor: pointer;
//   transition: 0.3s, box-shadow 0.15s;
//   text-transform: uppercase;
//   text-decoration: none;

//   &:hover {
//     border: 1px solid #1c91e3;
//     box-shadow: inset -0.2em -0.1em 0.25em #1c91e3;
//   }

//   &:focus {
//     outline: none;
//   }
// `;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
`;
